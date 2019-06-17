<template>
  <div>
    <AdminNavigation style="margin-top:10px"/>
    <nuxt/>
  </div>
</template>

<script>
import AdminNavigation from "@/components/Admin/AdminNavigation";
export default {
  components: {
    AdminNavigation
  }
};
</script>


<style >
html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>