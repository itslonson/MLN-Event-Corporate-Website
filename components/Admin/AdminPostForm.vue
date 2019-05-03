<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author">Имя Автора</AppControlInput>
    <AppControlInput v-model="editedPost.title">Название</AppControlInput>
    <AppControlInput v-model="editedPost.thumbnailLink">Ссылка на thumbnail</AppControlInput>
    <AppControlInput control-type="textarea" v-model="editedPost.content">Контент</AppControlInput>
    <AppButton type="submit">Опубликовать</AppButton>
    <AppButton type="button" style="margin-left: 10px" btn-style="cancel" @click="onCancel">Отменить</AppButton>
  </form>
</template>

<script>

import AppControlInput from '@/components/UI/AppControlInput'
import AppButton from '@/components/UI/AppButton'

export default {
    layout: 'blog',
    components:{
        AppControlInput,
        AppButton
    },
    props: {
        post: {
            type: Object,
            required: false
        }
    },
    data(){
        return{
            editedPost: this.post ? {...this.post} : {
                author: '',
                title: '',
                thumbnailLink: '',
                content: ''
            }
        }
    },
    methods: {
        onSave(){
            //сохранить
            console.log(this.editedPost);
        },
        onCancel(){
            //вернуться
            this.$router.push('/admin');
        }
    }
}
</script>
