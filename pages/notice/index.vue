<script setup>
import { navigateTo } from '#app'
import {fetchBoards} from "~/composable/api/board/index.js";

const goToWrite = () => {
  navigateTo({ name: 'notice-write' })
}

const goToDetail = (id) => {
  navigateTo({ name: 'notice-id', params: { id } })
}

</script>

<template>
  <div>
    <BoardList :fetch-boards="fetchBoards" :detail-page="goToDetail"/>
    <button @click="goToWrite">글쓰기</button>
  </div>
</template>


<style scoped>

</style>