<template>
  <div class="admin-page">
    <section class="existing-posts">
      <h1 v-if="loadedPosts.length" class="h1-heading color-gray text-center">Опубликованные посты</h1>
      <h1
        v-if="!loadedPosts.length"
        class="h1-heading color-gray text-center"
      >пока ничего не опубликовано</h1>
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

@media (max-width: 375) {
  h1 {
    font-size: 24px;
  }
}
</style>


