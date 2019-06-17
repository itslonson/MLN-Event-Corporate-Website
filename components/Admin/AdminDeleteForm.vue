<template>
  <form @submit.prevent>
    <AppButton type="submit" @click="onDelete">Удалить</AppButton>
  </form>
</template>

<script>
import AppControlInput from "@/components/UI/AppControlInput";
import AppButton from "@/components/UI/AppButton";

export default {
  layout: "blog",
  components: {
    AppControlInput,
    AppButton
  },
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: "",
            title: "",
            thumbnail: "",
            previewText: "",
            content: ""
          }
    };
  },
  methods: {
    onSave() {
      //сохранить
      this.$emit("submit", this.editedPost);
    },
    onCancel() {
      //вернуться
      this.$router.push("/admin");
    },
    onDelete() {
      //сохранить
      this.$emit("submit", this.editedPost);
    }
  }
};
</script>
