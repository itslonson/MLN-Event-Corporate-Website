<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="onSubmit">
        <AppControlInput type="email" v-model="email">Почта</AppControlInput>
        <AppControlInput type="password" v-model="password">Пароль</AppControlInput>
        <AppButton type="submit">Войти</AppButton>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AdminAuthPage",
  layout: "admin-auth",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("authenticateUser", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push("/admin");
        });
    }
  }
};
</script>

<style scoped>
.admin-auth-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  padding: 10px;
  box-sizing: border-box;
}
</style>

