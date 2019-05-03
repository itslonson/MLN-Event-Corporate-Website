<template>
    <div class="posts-page">
        <section class="intro">
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

.posts-page{
  background: linear-gradient(to right, rgb(87, 193, 159) 0%, rgb(132, 210, 242) 100%) no-repeat center center fixed;
  height: 100vh;
}

.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  background: url('https://cdn2.wpbeginner.com/wp-content/uploads/2019/01/choosethebestbloggingplatform.png');

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


