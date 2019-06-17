<template>
  <div class="input-control">
    <label>
      <slot/>
    </label>
    <input
      v-if="controlType === 'input'"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
    <textarea
      v-if="controlType === 'textarea'"
      rows="10"
      :value="value"
      @input="$emit('input', $event.target.value)"
    ></textarea>
    <select
      v-if="controlType === 'select'"
      :value="value"
      @input="$emit('input', $event.target.value)"
    ></select>
  </div>
</template>

<script>
export default {
  name: "AppInputControl",
  props: {
    controlType: {
      type: String,
      default: "input"
    },
    value: {
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
* {
  font-family: "FuturaRegular";
  font-size: 15px;
  border-radius: 10px;
  color: #444444;
}

.input-control {
  margin: 25px 0;
}

.input-control label {
  display: block;
  font-weight: bold;
  padding-bottom: 10px;
}

.input-control input,
.input-control textarea,
.input-control select {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  border: 1px solid #dedede;
  padding: 5px;
  color: #444444;
}

.input-control input:focus,
.input-control textarea:focus,
.input-control select:focus {
  border: 1px solid #940283;
  outline: none;
  transition: all 1s ease-in-out;
}
</style>


