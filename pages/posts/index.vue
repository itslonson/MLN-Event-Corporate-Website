<template>
    <div class="posts-page">
        <section class="intro">
            <h1>Наш блог :)</h1>
        </section>
        <section class="featured-posts">
          <PostPreview
            id="1"
            thumbnail="https://static1.squarespace.com/static/5aadc54285ede1bd72181a3a/t/5aadccec0e2e725448d54c7c/1521339652089/shutterstock_538256848.jpg?format=1500w"
            title="Title Test"
            previewText="Preview Text"
          />
        </section>
    </div>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  layout: 'blog',
  components:{
    PostPreview
  }
}
</script>

<style scoped>
.intro {
    display: flex;
    align-items: center;
    justify-content: center;

}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>


