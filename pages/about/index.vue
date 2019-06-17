<template>
  <div class="request-post-section">
    <section class="new-request-form">
      <RequestPostForm @submit="onSubmitted" ref="test"/>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    onSubmitted(postData) {
      this.$store.dispatch("addRequest", postData).then(() => {
        document.getElementById("myform").reset();
      });
    }
  }
};
</script>

<style scoped>
.request-post-section {
  height: 100vh;
  background: #999999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.new-request-form {
  font-family: "Roboto", sans-serif;
}

@media (min-width: 800px) {
}
</style>
