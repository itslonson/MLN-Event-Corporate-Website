<template>
  <div>
    <NavAlt/>
    <AdminNavigation/>
    <nuxt/>
  </div>
</template>

<script>
import NavAlt from "@/components/Navigation/NavAlt";
import AdminNavigation from "@/components/Admin/AdminNavigation";
export default {
  components: {
    AdminNavigation,
    NavAlt
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