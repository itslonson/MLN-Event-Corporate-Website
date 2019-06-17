<template>
  <div class="admin-page">
    <section class="existing-posts">
      <h1>Опубликованные посты</h1>
      <PostList isAdmin :posts="loadedPosts"/>
    </section>
  </div>
</template>

<script>
export default {
  layout: "admin",
  middleware: ["check-auth", "auth"],
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    }
  }
};
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.existing-posts h1 {
  text-align: center;
}
</style>


