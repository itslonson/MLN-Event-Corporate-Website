<template>
  <div class="requests-page">
    <RequestList :requests="loadedRequests"/>
  </div>
</template>

<script>
export default {
  layout: "admin",
  middleware: ["check-auth", "auth"],
  computed: {
    loadedRequests() {
      this.$store.dispatch("getRequests");
      return this.$store.getters.loadedRequests;
    }
  }
};
</script>

<style scoped>
@media (min-width: 768px) {
}
</style>