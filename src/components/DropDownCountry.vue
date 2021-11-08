<template>
  <div class="dropdown-country-selector">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      :value="selectedValue"
      @focus="isDropdownOpen = true"
      v-click-outside="hideDropdown"
    />

    <div v-if="isDropdownOpen" class="dropdown-country-selector___values">
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

export default {
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
    hideDropdown() {
      this.isDropdownOpen = false;
    },
    handleValueSelection(value) {
      this.$emit("click", value);
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>