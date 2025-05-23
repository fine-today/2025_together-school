<script setup>
const { currentPage, totalPages } = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
});

const emit = defineEmits(['changePage']);

const change = (page) => {
  if (page >= 1 && page <= totalPages) {
    emit('changePage', page);
  }
};
</script>

<template>
  <div class="pagination">
    <button @click="change(currentPage - 1)" :disabled="currentPage <= 1">Prev</button>
    <button
        v-for="page in totalPages"
        :key="page"
        @click="change(page)"
        :class="{ active: page === currentPage }"
    >
      {{ page }}
    </button>
    <button @click="change(currentPage + 1)" :disabled="currentPage >= totalPages">Next</button>
  </div>
</template>

<style scoped>
.pagination button.active {
  font-weight: bold;
  background: #ddd;
}
</style>
