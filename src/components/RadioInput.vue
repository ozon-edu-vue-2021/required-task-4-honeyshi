<template>
  <div class="radio-wrapper">
    <input
      type="radio"
      :value="radioValue"
      :checked="isChecked"
      @change="$emit('change', $event.target.value)"
    />
    <label :for="id" class="radio-label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  model: {
    prop: "modelRadioValue",
    event: "change",
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    modelRadioValue: { default: "" },
    radioValue: {
      type: String,
      default: "",
    },
  },
  computed: {
    isChecked() {
      return this.modelRadioValue == this.radioValue;
    },
  },
};
</script>

<style scoped>
.radio-wrapper {
  margin-bottom: 1rem;
}
.radio-label {
  margin-right: 0.5rem;
  padding-left: 0.5rem;
}
</style>