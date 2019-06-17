<template>
  <section class="new-post">
    <AppButton @click="$router.push('/')">На главную</AppButton>
    <AppButton @click="$router.push('/admin/new-post')">Создать пост</AppButton>
    <AppButton style="margin-left: 10px" @click="$router.push('/admin/requests')">Смотреть заявки</AppButton>
    <AppButton style="margin-left: 10px" @click="onLogout">Выйти из режима Администратора</AppButton>
  </section>
</template>

<style scoped>
.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}
</style>

<script>
export default {
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
      this.$router.push("/admin/auth");
    }
  }
};
</script>
