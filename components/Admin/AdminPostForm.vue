<template>
  <form @submit.prevent>
    <!--- @submit.prevent="onSave" !-->
    <AppControlInput v-model="editedPost.author">Имя Автора</AppControlInput>
    <AppControlInput v-model="editedPost.title">Название</AppControlInput>
    <AppControlInput v-model="editedPost.thumbnail">Ссылка на картинку</AppControlInput>
    <AppControlInput control-type="textarea" v-model="editedPost.previewText">Прьевью к посту</AppControlInput>
    <AppControlInput control-type="textarea" v-model="editedPost.content">Контент</AppControlInput>
    <AppButton type="submit" @click="onSave">Опубликовать</AppButton>
    <AppButton type="button" style="margin-left: 10px" btn-style="cancel" @click="onCancel">Отменить</AppButton>
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
