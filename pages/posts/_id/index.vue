<template>
  <main>
    <section class="post">
      <h1 class="h1-heading color-gray text-center">{{loadedPost.title}}</h1>
      <div class="info">
        <div class="details">
          <div class="author">
            <i class="fas fa-user-circle color-gray"></i>
            <p class="regular-text">{{loadedPost.author}}</p>
          </div>

          <div class="date">
            <i class="far fa-calendar-alt color-gray"></i>
            <p class="regular-text">{{loadedPost.updatedDate | date}}</p>
          </div>
        </div>
        <div class="image">
          <img :src="loadedPost.thumbnail" alt="Фото">
        </div>
      </div>

      <div class="content">
        <p
          v-for="item in loadedPost.content.split('\n\n')"
          :key="item.i"
          class="h3-heading color-gray"
        >{{item}}</p>
      </div>
    </section>
  </main>
</template>

<script>
import axios from "axios";

export default {
  layout: "blog",
  asyncData(context) {
    return axios
      .get(process.env.fbURL + "/posts/" + context.params.id + ".json")
      .then(res => {
        return {
          loadedPost: res.data
        };
      });
  },
  data() {
    return {
      Mycontent: ["{{loadedPost.content}}"]
    };
  }
};
</script>


<style scoped>
.post {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10% 10%;
}

.info {
  display: flex;
  width: 100%;
  flex-direction: row;
  padding-top: 5%;
  padding-bottom: 20px;
}

.image {
  flex: 1;
  order: 0;
}

.details {
  flex: 1;
  order: 1;
  text-align: right;
}

.author,
.date {
  padding: 10px 0;
}

.content {
  flex: 1;
  order: 2;
  text-align: justify;
}

.image img {
  max-width: 700px;
}

@media (max-width: 768px) {
  .info {
    flex-direction: column;
    align-self: center;
    align-items: center;
    padding-bottom: unset;
  }

  .author,
  .date {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 10px 20px;
  }

  .details {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
  .content {
    padding: 0 34px;
  }
}

@media (max-width: 425px) {
  .post h1 {
    font-size: 19px;
  }
  .content {
    padding: 0;
  }

  .post {
    padding: 10% 5%;
  }
}
</style>
