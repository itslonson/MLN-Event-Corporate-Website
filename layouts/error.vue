<template>
  <div class="error-page">
    <h1>Ой, что-то пошло не так!</h1>
    <p>
      <a href="/">Вернуться</a>!
    </p>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
.error-page {
  text-align: center;
}

.error-page a {
  text-decoration: none;
  color: red;
}

.error-page a:hover,
.error-page a:active {
  color: salmon;
}
</style>
