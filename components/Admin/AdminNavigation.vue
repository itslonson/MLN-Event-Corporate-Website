<template>
  <section class="admin-panel">
    <AppButton @click="$router.push('/admin/new-post')">Создать пост</AppButton>
    <AppButton @click="$router.push('/admin/requests')">заявки</AppButton>
    <AppButton @click="onLogout">Выйти</AppButton>
  </section>
</template>

<style scoped>
.admin-panel {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 0;
  padding-top: 65px;
  border: 1px solid #444444;
}

.admin-panel > button {
  border-radius: 0;
  padding: 10;
}

@media (max-width: 768px) {
  .admin-panel {
    padding-top: 40px;
  }
}

@media (max-width: 375px) {
  .admin-panel > button {
    font-size: 12px;
  }
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
