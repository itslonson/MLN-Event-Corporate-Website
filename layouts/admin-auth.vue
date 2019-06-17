<template>
  <div>
    <NavAlt/>
    <nuxt/>
  </div>
</template>

<script>
import NavAlt from "@/components/Navigation/NavAlt";

export default {
  components: {
    NavAlt
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
  font-family: "Roboto", sans-serif;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

html::-webkit-scrollbar {
  width: 0 !important;
}

* {
  color: black;
}
</style>







