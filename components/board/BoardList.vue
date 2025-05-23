<script setup>
import { ref, onMounted } from 'vue';
import Pagination from '@/components/board/Pagination.vue';

const boards = ref([]);
const currentPage = ref(1);
const totalPages = ref(1);
const pageSize = 10;

const {fetchBoards, detailPage} = defineProps({
  fetchBoards: {
    type: Function,
    required: true
  },
  detailPage: {
    type: Function,
    required: true
  },
});

const loadBoards = async (page) => {
  currentPage.value = page;
  const res = await fetchBoards(page - 1, pageSize); // 0-based
  boards.value = res.data;
  totalPages.value = Math.ceil(res.total / pageSize);
};


onMounted(() => {
  loadBoards(1);
});
</script>

<template>
  <div>
    <h2>📋 게시판</h2>
    <ul>
      <li v-for="item in boards" :key="item.id" @click="detailPage(item.testId)">
        {{ item.title }}
      </li>
    </ul>

    <Pagination
        :current-page="currentPage"
        :total-pages="totalPages"
        @changePage="loadBoards"
    />
  </div>
</template>


<style scoped>
.board-wrapper {
  padding: 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
}
thead {
  background-color: #f0f0f0;
}
</style>