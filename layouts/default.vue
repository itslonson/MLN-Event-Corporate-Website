<template>
  <div>
    <nuxt />
  </div>
</template>

<script>


export default {
      beforeCreate(){
      document.getElementsByTagName('html')[0].setAttribute('style','background: linear-gradient(to right, rgb(248, 182, 78) 0%, rgb(251, 82, 82) 100%) no-repeat center center fixed')
    }
}
</script>

<style >
html {
  font-family: 'Roboto', sans-serif;
}

body{
  margin: 0;
}
</style>





