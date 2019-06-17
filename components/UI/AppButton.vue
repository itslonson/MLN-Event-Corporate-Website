<template>
  <button class="button" :class="btnStyle" v-bind="$attrs" v-on="$listeners">
    <slot/>
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    btnStyle: {
      type: String,
      default: ""
    }
  }
};
</script>


<style scoped>
@font-face {
  font-family: "FuturaRegular";
  src: url("~assets/fonts/FuturaPT-Book.woff") format("woff");
}

@font-face {
  font-family: "FuturaBold";
  src: url("~assets/fonts/FuturaPT-Bold.woff") format("woff");
}

.button {
  text-transform: uppercase;
  font-family: "FuturaMedium";
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 40px;
  color: #444444;
  text-align: center;
  background: white;
  border-radius: 50px;
  border-width: 1px;
  border-color: rgb(221, 221, 221);
  height: 40px;
  width: 100%;
  cursor: pointer;
}

.button:hover {
  background: #ededed;
}

.inverted {
  background-color: white;
  color: black;
  border: 1px solid transparent;
}

.inverted:hover,
.inverted:active {
  color: #ccc;
  background-color: white;
  border: 1px solid transparent;
}

.cancel {
  background-color: red;
  color: white;
  border: 1px solid transparent;
}

.cancel:hover,
.cancel:active {
  background-color: salmon;
  border: 1px solid transparent;
  color: white;
}
</style>
