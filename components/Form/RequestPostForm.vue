<template>
  <form @submit.prevent="onSave" id="myform">
    <AppControlInput v-model="requestedPost.fullName" required pattern="[А-Яа-яЁё ]{3,80}">ФИО</AppControlInput>
    <label>Формат</label>
    <select v-model="requestedPost.eventType" control-type="select" required>
      <option value disabled selected>Выберите формат</option>
      <option value="Детский">Детский Праздник</option>
      <option value="Свадьба">Свадьба</option>
      <option value="HR">HR</option>
      <option value="VIP">VIP Party</option>
    </select>

    <AppControlInput
      v-model="requestedPost.guestCount"
      required
      pattern="[0-9]{1,3}"
    >Предполагаемое количество гостей</AppControlInput>
    <AppControlInput v-model="requestedPost.eventBudget" required pattern="[0-9]{1,8}">Бюджет</AppControlInput>
    <AppControlInput v-model="requestedPost.emailAddress" type="email" required>Электронная почта</AppControlInput>
    <AppControlInput
      v-model="requestedPost.phoneNumber"
      type="tel"
      pattern="^[+7\[0-9]{12}"
      required
    >Телефонный Номер</AppControlInput>
    <AppButton type="submit">Отправить</AppButton>
  </form>
</template>

<script>
import AppControlInput from "@/components/UI/AppControlInput";
import AppButton from "@/components/UI/AppButton";

export default {
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
      requestedPost: this.post
        ? { ...this.post }
        : {
            fullName: "",
            eventType: "",
            guestCount: "",
            eventBudget: "",
            emailAddress: "",
            phoneNumber: ""
          }
    };
  },
  methods: {
    onSave() {
      //сохранить
      this.$emit("submit", this.requestedPost);
    }
  }
};
</script>


<style scoped>
@font-face {
  font-family: "FuturaRegular";
  src: url("~assets/fonts/FuturaPT-Book.woff") format("woff");
}

form {
  text-align: center;
}
* {
  color: #444444;
  font-family: "FuturaRegular";
  font-size: 15px;
}

option,
label {
  display: block;
  font-weight: bold;
  padding-bottom: 5px;
}

select {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 10px;
}

option {
  border-radius: 10px;
}

select:focus {
  border: 1px solid #940283;
  outline: none;
  transition: all 1s ease-in-out;
}
</style>
