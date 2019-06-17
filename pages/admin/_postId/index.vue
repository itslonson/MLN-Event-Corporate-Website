<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted"/>
      <AdminDeleteForm :post="loadedPost" @submit="onDeleted"/>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  layout: "admin",
  middleware: ["check-auth", "auth"],
  asyncData(context) {
    return axios
      .get(process.env.fbURL + "/posts/" + context.params.postId + ".json")
      .then(res => {
        return {
          loadedPost: { ...res.data, id: context.params.postId }
        };
      })
      .catch(e => context.error());
  },
  methods: {
    onSubmitted(editedPost) {
      this.$store
        .dispatch("editPost", editedPost)
        .then(() => {
          this.$router.push("/admin");
        })
        .catch(e => context.error());
    },
    onDeleted(deletedPost) {
      this.$store
        .dispatch("deletePost", deletedPost)
        .then(() => {
          this.$router.push("/admin");
        })
        .catch(e => context.error());
    }
  }
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 800px) {
  .update-form {
    width: 500px;
  }
}
</style>

