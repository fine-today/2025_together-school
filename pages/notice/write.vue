<script setup>
import {reactive} from "vue";
import {navigateTo} from "#app";
import {registerBoard} from "~/composable/api/board/index.js";
const inputData = reactive({title: '', content: ''});

async function submit() {
  await registerBoard(inputData)
  navigateTo({ name: 'notice' })
}

</script>

<template>
  <div>
    <input v-model="inputData.title" placeholder="제목">
    <input v-model="inputData.content" placeholder="내용">
    <input type="button" value="저장" name="saveBtn" @click="submit">
  </div>
</template>

<style scoped>

</style>