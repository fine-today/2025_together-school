<template>
  <div class="board-wrapper">
    <h2><slot name="title">📋 기본 게시판</slot></h2>
    <table>
      <thead>
      <tr>
        <slot name="header" />
      </tr>
      </thead>
      <tbody>
      <slot />
      </tbody>
    </table>
    <div class="footer">
      <slot name="footer" />
    </div>
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
