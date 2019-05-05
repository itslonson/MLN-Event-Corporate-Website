<template>
    <div class="single-post-page">
        <section class="post">
            <h1 class="post-title">{{loadedPost.title}}</h1>
            <div class="post-details">
                <div class="post-detail">Обновлено {{loadedPost.updatedDate}}</div>
                <div class="post-detail">Автор {{loadedPost.author}}</div>
            </div>
            <p class="post-content">{{loadedPost.content}}</p>
        </section>
        <section class="post-feedback">
            <p>Оставьте пожелания и вопросы по этому <a href="mailto:omnixejiharu@gmail.com">адресу</a></p>
        </section>
    </div>
</template>

<script>
export default {
  layout:'blog',
  asyncData(context, callback){
    setTimeout(() => {
      callback(null, {
        loadedPost:{
          id: '1',
          title: "First Test Post (ID: "+ context.params.id +")", 
          previewText: 'First preview text test',
          author: 'Авдюков Иван Игоревич',
          updatedDate: new Date(), 
          thumbnail: 'https://static1.squarespace.com/static/5aadc54285ede1bd72181a3a/t/5aadccec0e2e725448d54c7c/1521339652089/shutterstock_538256848.jpg?format=1500w',
          content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit cum libero, incidunt repellendus quidem dignissimos ea, suscipit voluptas ducimus nemo autem id perferendis natus quibusdam sint labore recusandae laborum consectetur.'
        }
      })
    }, 1000);
  }
}
</script>


<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
