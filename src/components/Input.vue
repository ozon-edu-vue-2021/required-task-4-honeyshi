<template>
  <div class="input-wrapper">
    <label :for="id" class="input-label">{{ label }}</label>
    <input :id="id" :type="type" @input="handleInput" />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  margin-right: 0.5rem;
  width: 100%;
}
.input-label {
  margin-bottom: 0.5rem;
}
.radio-wrapper {
  margin-bottom: 1rem;
}
.radio-label {
  margin-right: 0.5rem;
}
input {
  border: 2px solid #b3bcc5;
  border-radius: 6px;
  background-color: white;
  color: #001a34;
  outline: none;
  padding: 10px;
}
input:hover {
  border-color: #005bff;
}
</style>