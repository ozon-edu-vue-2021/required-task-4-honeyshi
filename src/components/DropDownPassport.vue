<template>
  <div class="dropdown-passport-selector">
    <label for="passport_type">Тип паспорта</label>
    <input
      id="passport_type"
      :value="selectedValue"
      @focus="isDropdownOpen = true"
      v-click-outside="hideDropdown"
    />

    <div v-if="isDropdownOpen" class="dropdown-passport-selector___values">
      <ul v-if="passportTypes.length">
        <li
          v-for="value in passportTypes"
          :key="value.id"
          @click="handleValueSelection(value.type)"
        >
          {{ value.type }}
        </li>
      </ul>
      <div v-else class="empty">Ничего не найдено</div>
    </div>
  </div>
</template>

<script>
import passportTypes from "@/assets/data/passport-types.json";

import ClickOutside from "vue-click-outside";

export default {
  props: {
    selectedValue: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isDropdownOpen: false,
      passportTypes: passportTypes,
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