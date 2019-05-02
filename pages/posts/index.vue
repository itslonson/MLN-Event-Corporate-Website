<template>
    <div class="posts-page">
        <section class="intro">
            <h1>Наш блог :)</h1>
        </section>
        <section class="featured-posts">

            <nuxt-link :to="'/posts/' + 1" class="post-preview">
                <article >
                    <div class="post-thumbnail" style="background-image : url('https://static1.squarespace.com/static/5aadc54285ede1bd72181a3a/t/5aadccec0e2e725448d54c7c/1521339652089/shutterstock_538256848.jpg?format=1500w')"></div>
                    <div class="post-content">
                        <h1>Название поста 1</h1>
                        <p>Текст - превью 1</p>
                    </div>
                </article>
            </nuxt-link>

            <nuxt-link :to="'/posts/' + 2" class="post-preview">
                <article>
                    <div class="post-thumbnail" style="background-image : url('https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2016/05/10105129/discount-codes-reach-more-people-eventbrite.png')"></div>
                    <div class="post-content">
                        <h1>Название поста 2</h1>
                        <p>Текст - превью 2</p>
                    </div>
                </article>
            </nuxt-link>

        </section>
    </div>
</template>

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

.post-preview {
  background-color: white;
  width: 90%;
  margin: 10px 0px;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>

<script>
export default {
  layout: 'blog'
}
</script>
