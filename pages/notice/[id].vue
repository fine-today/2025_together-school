<script setup>
import {onMounted, reactive} from "vue";
import { useRoute } from 'vue-router';
import {navigateTo} from "#app";
import {fetchBoard, modifyBoard, removeBoard} from "~/composable/api/board/index.js";

const route = useRoute();
const inputData = reactive({title: '', content: ''});
const id = route.params.id;

async function submit() {
  await modifyBoard(id, inputData)
  alert('수정 완료')
  navigateTo({ name: 'notice' })
}


async function loadBoard() {
  const res = await fetchBoard(id)
  Object.assign(inputData, res.data)
}

async function removeBtnClickEvent() {
  await removeBoard(id)
  alert('삭제 완료')
  navigateTo({ name: 'notice' })
}

onMounted(() => {
  loadBoard();
});


</script>

<template>
  <div>
    <input v-model="inputData.title" placeholder="제목">
    <input v-model="inputData.content" placeholder="내용">
    <input type="button" value="저장" name="saveBtn" @click="submit">
    <input type="button" value="삭제" name="removeBtn" @click="removeBtnClickEvent">
  </div>
</template>

<style scoped>

</style>