<template>
  <div>
    <!-- <TheHeader @sidenavToggle="displaySidenav =! displaySidenav"/>
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false"/>  -->
    <nuxt />
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/Landing/TheLandingHeader'
import TheSidenav from '@/components/Navigation/Landing/TheLandingSidenav'

export default {
    components:{
        TheHeader,
        TheSidenav
    },
    data() {
        return{
            displaySidenav: false
        }
    }
}
</script>

<style >

html,body{
  margin: 0px;
  padding: 0px;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

html::-webkit-scrollbar { width: 0 !important }



</style>







