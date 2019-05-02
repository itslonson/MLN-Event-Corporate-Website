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
    },
    beforeCreate(){
      document.getElementsByTagName('html')[0].setAttribute('style','background: linear-gradient(to right, rgb(123, 182, 78) 0%, rgb(251, 82, 82) 100%) no-repeat center center fixed')
    }
}
</script>



