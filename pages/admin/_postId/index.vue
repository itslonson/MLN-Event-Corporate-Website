<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost"/>
        </section>
    </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
    layout: 'admin',
    components:{
        AdminPostForm
    },
    data(){
        return{
            loadedPost:{
                author: 'Иван Иванович Чук',
                title: 'Как убить дракона',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dignissimos iste a autem accusantium deserunt atque, vel iusto! Blanditiis perferendis commodi quo facere ipsum quibusdam odit, ipsa assumenda tempora molestia',
                thumbnailLink: 'https://azialand.ru/wp-content/uploads/2013/11/331331897.jpg'
            }
        }
    }
}
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

