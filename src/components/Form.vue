<template>
  <div class="form">
    <h3>Личные данные</h3>
    <div class="row">
      <Input id="surname" label="Фамилия" v-model="formData.surname" />
      <Input id="name" label="Имя" v-model="formData.name" />
      <Input id="patronymic" label="Отчество" v-model="formData.patronymic" />
    </div>
    <Input
      id="birthdate"
      label="Дата рождения"
      type="date"
      class="birthdate-input"
      v-model="formData.birthdate"
    />
    <Input id="email" label="E-mail" type="email" v-model="formData.email" />

    <h3>Пол</h3>
    <div class="row">
      <RadioInput
        id="male"
        radioValue="male"
        label="Мужской"
        v-model="formData.gender"
      />
      <RadioInput
        id="female"
        radioValue="female"
        label="Женский"
        v-model="formData.gender"
      />
    </div>
    <h3>Паспортные данные</h3>
    <div class="row">
      <DropDownCountry
        id="citizenship"
        label="Гражданство"
        :values="citizenships"
        :selectedValue="formData.citizenship"
        @click="selectCitizenship"
      />
    </div>
    <div v-if="formData.citizenship === 'Russia'" class="row">
      <Input
        id="series_passport"
        label="Серия паспорта"
        v-model="formData.passportSeries"
      />
      <Input
        id="number_passport"
        label="Номер паспорта"
        v-model="formData.passportNumber"
      />
      <Input
        id="dategiven_passport"
        label="Дата выдачи"
        type="date"
        v-model="formData.passportDate"
      />
    </div>

    <div v-else-if="formData.citizenship !== ''">
      <div class="row">
        <Input
          id="surname_latin"
          label="Фамилия на латинице"
          v-model="formData.surnameLatin"
        />
        <Input
          id="name_latin"
          label="Имя на латинице"
          v-model="formData.nameLatin"
        />
      </div>

      <div class="foreigners-hint">
        <small
          >Иностранцы заполняют латинскими буквами. Например, Ivanov Ivan</small
        >
      </div>

      <div class="row">
        <Input
          id="number_passport"
          label="Номер паспорта"
          v-model="formData.passportNumber"
        />
        <DropDownCountry
          id="countrygiven_passport"
          label="Страна выдачи"
          :values="citizenships"
          :selectedValue="formData.passportCountry"
          @click="selectPassportCountry"
        />
        <DropDownPassport
          :selectedValue="formData.passportType"
          @click="selectPassportType"
        />
      </div>
    </div>

    <h4>Меняли ли фамилию или имя?</h4>
    <div class="row">
      <RadioInput
        id="no"
        radioValue="no"
        label="Нет"
        v-model="formData.changeName"
      />
      <RadioInput
        id="yes"
        radioValue="yes"
        label="Да"
        v-model="formData.changeName"
      />
    </div>

    <div v-if="formData.changeName === 'yes'" class="row">
      <Input
        id="surname-change"
        label="Предыдущая Фамилия"
        v-model="formData.previousSurname"
      />
      <Input
        id="name-change"
        label="Предыдущее Имя"
        v-model="formData.previousName"
      />
    </div>

    <div class="button-wrapper">
      <button class="submit-button" @click="printFormData">Подтвердить</button>
    </div>
  </div>
</template>

<script>
import DropDownCountry from "./DropDownCountry.vue";
import Input from "./Input.vue";
import RadioInput from "./RadioInput.vue";
import citizenships from "@/assets/data/citizenships.json";
import DropDownPassport from "./DropDownPassport.vue";

export default {
  components: { Input, RadioInput, DropDownCountry, DropDownPassport },
  data() {
    return {
      formData: {
        surname: "",
        name: "",
        patronymic: "",
        birthdate: "",
        email: "",
        gender: "male",
        citizenship: "",
        passportSeries: "",
        passportNumber: "",
        passportDate: "",
        surnameLatin: "",
        nameLatin: "",
        passportCountry: "",
        passportType: "",
        changeName: "no",
        previousSurname: "",
        previousName: "",
      },
      citizenships: citizenships,
    };
  },
  methods: {
    selectCitizenship(value) {
      this.formData.citizenship = value;
    },
    selectPassportCountry(value) {
      this.formData.passportCountry = value;
    },
    selectPassportType(value) {
      this.formData.passportType = value;
    },
    printFormData() {
      console.log(this.formData);
    },
  },
};
</script>

<style scoped>
.form {
  border: solid #005bff 2px;
  border-radius: 3px;
  background-color: white;
  padding: 2rem;
}
.row {
  display: flex;
  flex-direction: row;
}
.submit-button {
  background-color: #005bff;
  border-radius: 6px;
  color: #fff;
  padding: 0 20px;
  border: 0;
  height: 3rem;
  cursor: pointer;
}
.button-wrapper {
  display: flex;
  justify-content: flex-end;
}
.foreigners-hint {
  color: #b3bcc5;
  margin-bottom: 1rem;
}
</style>
