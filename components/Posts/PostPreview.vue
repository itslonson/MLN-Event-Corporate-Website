<template>
<nuxt-link :to="'/posts/' + id" class="post-preview">
    <article >
        <div class="post-thumbnail" :style="{backgroundImage : 'url('+ thumbnail +')'}"></div>
        <div class="post-content">
            <h1>{{ title}}</h1>
            <p>{{previewText}}</p>
        </div>
    </article>
</nuxt-link>
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
    id: {
      type: String,
      require : true
    },
    title: {
      type: String,
      require : true
    },
    previewText:{
      type: String,
      require : true
    },
    thumbnail:{
      type: String,
      require : true
    }
  }
}
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
