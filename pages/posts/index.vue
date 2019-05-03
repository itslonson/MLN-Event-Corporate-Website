<template>
    <div class="posts-page">
        <section class="intro">
        </section>
        <PostList/>
    </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  layout: 'blog',
  components:{
    PostList
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
</style>


