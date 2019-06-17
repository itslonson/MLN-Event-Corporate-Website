<template>
  <div>
    <!-- <TheHeader @sidenavToggle="displaySidenav =! displaySidenav"/>
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false"/>-->
    <Nav/>
    <nuxt/>
  </div>
</template>

<script>
import TheHeader from "@/components/Navigation/Landing/TheLandingHeader";
import TheSidenav from "@/components/Navigation/Landing/TheLandingSidenav";
import Nav from "@/components/Navigation/Nav";

export default {
  components: {
    TheHeader,
    TheSidenav,
    Nav
  },
  data() {
    return {
      displaySidenav: false
    };
  }
};
</script>

<style >
html,
body {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth !important;
}

* {
  scroll-behavior: smooth !important;
}
html::-webkit-scrollbar {
  width: 0 !important;
  scroll-behavior: smooth !important;
}
</style>







