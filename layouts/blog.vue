<template>
  <div>
    <Header/>
    <nuxt />
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  components:{
    Header
  }
}
</script>

<style>
html {
  font-family: 'Roboto', sans-serif;
}

body{
  margin: 0;
  background: linear-gradient(to right, rgb(123, 182, 78) 0%, rgb(245, 211, 17) 100%) no-repeat center center fixed;
}
</style>


