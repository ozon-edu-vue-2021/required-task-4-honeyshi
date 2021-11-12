<template>
  <div class="dropdown-selector">
    <div class="dropdown-selector input-label-wrapper">
      <label class="dropdown-selector label" for="passport_type"
        >Тип паспорта</label
      >
      <div class="dropdown-selector input-wrapper">
        <input
          class="dropdown-selector input"
          id="passport_type"
          :value="selectedValue"
          @focus="showDropdown"
          v-click-outside="hideDropdown"
        />
        <IconUp v-if="isDropdownOpen" @click="hideDropdown" />
        <IconDown v-else @click="showDropdown" />
      </div>
    </div>

    <div v-if="isDropdownOpen" class="dropdown-selector values">
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
import IconDown from "./IconDown.vue";
import IconUp from "./IconUp.vue";

import ClickOutside from "vue-click-outside";

export default {
  components: { IconDown, IconUp },
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
    showDropdown() {
      this.isDropdownOpen = true;
    },
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

<style>
.dropdown-selector.input-label-wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
}
.dropdown-selector.label {
  margin-bottom: 0.5rem;
}
.dropdown-selector.input {
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
}
.dropdown-selector.input-wrapper {
  display: inline-flex;
  border: 2px solid #b3bcc5;
  border-radius: 6px;
  background-color: white;
  color: #001a34;
  padding: 10px;
  margin-right: 0.5rem;
  cursor: pointer;
}
.dropdown-passport-selector.input-wrapper:hover {
  border-color: #005bff;
}
.dropdown-selector.values {
  box-shadow: 0px -1px 10px 2px #b3bcc5a6;
  border-radius: 10px;
  max-height: 10rem;
  overflow-y: auto;
  margin-top: -0.3rem;
}
.dropdown-selector.values > .empty {
  padding: 10px 12px;
}
.dropdown-selector.values ul li {
  padding: 10px 12px;
  cursor: pointer;
}
.dropdown-selector.values ul li:hover {
  background-color: #005bff26;
}
.dropdown-selector.values ul li:first-child {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-top: 15px;
}
.dropdown-selector.values ul li:last-child {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-bottom: 15px;
}
</style>