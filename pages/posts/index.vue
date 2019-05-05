<template>
    <div class="posts-page">
        <section class="intro">
        </section>
        <PostList :posts="loadedPosts" />
    </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  layout: 'blog',
  components:{
    PostList
  },
     //выполняется на сервере. исп. для получения пререндеренной страницы на сервере <- для seo и web crawlers
  asyncData(context){
    return new Promise((resolve, reject) =>{
      setTimeout(() => {
        resolve({
          loadedPosts: [
          { 
            id: '1', 
            title: 'First Test Post', 
            previewText: 'First preview text test', 
            thumbnail: 'https://static1.squarespace.com/static/5aadc54285ede1bd72181a3a/t/5aadccec0e2e725448d54c7c/1521339652089/shutterstock_538256848.jpg?format=1500w'
          },
          {
            id: '2', 
            title: 'Second Test Post', 
            previewText: 'Second preview text test', 
            thumbnail: 'https://azialand.ru/wp-content/uploads/2013/11/331331897.jpg'
          }        
          ]
        });
      }, 1000);
  })
  .then(data => {
      return data
    })
    .catch(e => {
      context.error(e);
    });
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


