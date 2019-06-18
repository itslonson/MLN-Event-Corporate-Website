<template>
  <nuxt-link :to="postLink" class="post-preview">
    <article>
      <div class="post-thumbnail" :style="{backgroundImage : 'url('+ thumbnail +')'}"></div>
      <div class="post-content">
        <h3 class="h3-heading color-gray text-center">{{ title}}</h3>
        <p class="regular-text color-gray">{{previewText}}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  name: "PostPreview",
  props: {
    id: {
      type: String,
      require: true
    },
    isAdmin: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      require: true
    },
    previewText: {
      type: String,
      require: true
    },
    thumbnail: {
      type: String,
      require: true
    }
  },
  computed: {
    postLink() {
      return this.isAdmin ? "/admin/" + this.id : "/posts/" + this.id;
    }
  }
};
</script>


<style scoped>
.post-preview {
  background-color: white;
  width: 90%;
  margin: 10px 0px;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 950px) {
  .post-preview {
    width: 500px;
    margin: 30px;
    background-color: #ededed;
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
  background-color: #dedede;
}
</style>
