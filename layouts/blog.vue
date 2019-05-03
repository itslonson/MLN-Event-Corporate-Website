<template>
 <div>
    <TheHeader @sidenavToggle="displaySidenav =! displaySidenav"/>
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false"/> 
    <nuxt />
</div>
</template>

<script>
import TheHeader from '@/components/Navigation/Other/TheHeader'
import TheSidenav from '@/components/Navigation/Other/TheSidenav'

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
html {
  font-family: 'Roboto', sans-serif;
}

body{
  margin: 0;
}
</style>