<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
export default {
  layout: "blog",
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    }
  }
};
</script>

<style scoped>
.posts-page {
  background: white;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5%;
}

@media (max-width: 950px) {
  .posts-page {
    padding-top: 10%;
  }
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>


