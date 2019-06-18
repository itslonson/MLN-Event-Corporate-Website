<template>
  <section class="error-section">
    <h1>Ошибка</h1>
    <a href="/">Хорошо, вернуться на главную</a>
  </section>
</template>

<script>
export default {};
</script>


<style scoped>
.error-section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #ededed;
  flex-direction: column;
  flex-wrap: wrap;
}

.error-section h1 {
  text-transform: uppercase;
  font-family: "FuturaBold";
  font-size: 32px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  color: #444444;
  text-align: center;
}

.error-section a {
  text-decoration: none;
  list-style: none;
  padding: 0 20px;
  text-transform: uppercase;
  font-family: "FuturaRegular";
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  color: #444444;
  text-align: center;
  background: white;
  border: 1px solid white;
  border-radius: 50px;
  width: 300px;
  height: 40px;
  line-height: 40px;
}

.error-section a:hover {
  background: #dedede;
}

@media (max-width: 768px) {
  .error-section h1 {
    font-size: 14px;
  }

  .error-section a {
    width: 200px;
    font-size: 12px;
  }
}

@media (max-width: 768px) {
  .error-section h1 {
    font-size: 14px;
  }

  .error-section a {
    width: 200px;
    font-size: 12px;
  }
}
</style>
