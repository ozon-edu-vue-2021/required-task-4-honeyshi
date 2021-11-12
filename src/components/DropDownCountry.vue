<template>
  <div class="dropdown-country-selector">
    <div class="dropdown-selector input-label-wrapper">
      <label :for="id" class="dropdown-selector label">{{ label }}</label>
      <div class="dropdown-selector input-wrapper">
        <input
          :id="id"
          :value="selectedValue"
          class="dropdown-selector input"
          v-click-outside="hideDropdown"
          @focus="showDropdown"
          @input="handleInput"
        />
        <IconUp v-if="isDropdownOpen" @click="hideDropdown" />
        <IconDown v-else @click="showDropdown" />
      </div>
    </div>

    <div v-if="isDropdownOpen" class="dropdown-selector values">
      <ul v-if="values.length">
        <li
          v-for="value in values"
          :key="value.id"
          @click="handleValueSelection(value.nationality)"
        >
          {{ value.nationality }}
        </li>
      </ul>
      <div v-else class="empty">Ничего не найдено</div>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
import IconDown from "./IconDown.vue";
import IconUp from "./IconUp.vue";

export default {
  components: { IconDown, IconUp },
  props: {
    id: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    values: {
      type: Array,
      default: () => [],
    },
    selectedValue: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  methods: {
    showDropdown() {
      this.isDropdownOpen = true;
    },
    hideDropdown() {
      this.isDropdownOpen = false;
    },
    handleValueSelection(value) {
      this.$emit("click", value);
    },
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>