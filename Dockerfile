FROM node:22.16.0-alpine AS builder

WORKDIR /app

COPY package*.json .npmrc ./
RUN npm install

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

COPY . .
RUN cp .env.${NODE_ENV} .env

RUN npm run build

FROM node:22.16.0-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.output ./.output

ENV NITRO_PORT=3000
EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]

#sh "docker build --build-arg NODE_ENV=production -t togetherschool ."
#docker run -d -p 3000:3000 nuxt-app-prod