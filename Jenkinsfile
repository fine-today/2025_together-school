pipeline {
  agent any

  environment {
    IMAGE_NAME = "my-nuxt-app"
    BLUE_PORT = "3001"
    GREEN_PORT = "3002"
    CURRENT = "" // runtime에 확인
  }

  stages {
    stage('Checkout') {
      steps {
        git 'https://your.repo.url/nuxt-project.git'
      }
    }

    stage('Determine Active Version') {
      steps {
        script {
          def active = sh(script: "docker ps --filter 'name=my-nuxt-blue' --filter 'status=running' -q", returnStdout: true).trim()
          env.CURRENT = active ? "blue" : "green"
          echo "현재 실행 중인 컨테이너: ${env.CURRENT}"
        }
      }
    }

    stage('Build New Image') {
      steps {
        script {
          def next = env.CURRENT == "blue" ? "green" : "blue"
          sh "docker build --build-arg NODE_ENV=staging -t ${IMAGE_NAME}:${BUILD_NUMBER} ."
          sh "docker stop my-nuxt-${next} || true"
          sh "docker rm my-nuxt-${next} || true"
          def port = next == "blue" ? env.BLUE_PORT : env.GREEN_PORT
          sh "docker run -d --name my-nuxt-${next} -p ${port}:3000 ${IMAGE_NAME}:${BUILD_NUMBER}"
        }
      }
    }

    stage('Switch Nginx to New Version') {
      steps {
        script {
          def next = env.CURRENT == "blue" ? "green" : "blue"
          def newPort = next == "blue" ? env.BLUE_PORT : env.GREEN_PORT

          // nginx 설정 파일 동적 수정
          sh """
            sed -i 's/127.0.0.1:[0-9]\\+/127.0.0.1:${newPort}/' /etc/nginx/conf.d/nuxt.conf
            nginx -s reload
          """
        }
      }
    }

    stage('Clean Old Container') {
      steps {
        script {
          def old = env.CURRENT
          if (old) {
            sh "docker stop my-nuxt-${old} || true"
            sh "docker rm my-nuxt-${old} || true"
          }
        }
      }
    }
  }
}
