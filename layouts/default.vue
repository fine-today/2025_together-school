<script setup>

</script>

<template>
  <div>
    <header class="header">
      <img src="@/public/h1_logo.gif" alt="Logo" class="logo" />
      <h1 class="title"></h1>
    </header>
    <slot />
    <footer>
      <div>
        <h1>Footer</h1>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.header {
  text-align: center;
  padding: 20px;
}

.header img {
  max-width: 150px;
  height: auto;
}
</style>