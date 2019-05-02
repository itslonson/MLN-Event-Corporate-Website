<template>
<div class="container">
    <header class="top-header">
        <ul>
            <li><nuxt-link to="/">Главная</nuxt-link></li>
        </ul>
    </header>
</div>
</template>

<style scoped>
.top-header{
  width: 100%;

  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: transparent;
  z-index: 999;
  box-sizing: border-box;
  padding: 0 20px;
}
</style>

<script>
export default {
    name: "Header"
}
</script>
