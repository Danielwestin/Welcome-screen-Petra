<template>
  <q-layout view="lHh Lpr lFf">
    <q-item class="page2 background q-px-xl">
      <div class="q-gutter-md wrapper">
        <h2
          v-on:click="employeeDetails = false"
          class="title-size text-primary header-text q-pt-none title-font"
        >
          Who are you here to see?
        </h2>
        <q-input
          @focus="show"
          data-layout="normal"
          autofocus
          v-show="!employeeDetails"
          class="search-input text-font"
          outlined
          square
          v-model="searchedEmpolyee"
          label="Name or phone number"
        />

        <DetailedView
          v-if="employeeDetails"
          :employeeDetails="employeeDetails"
          @closeDetailedView="employeeDetails = $event"
        />

        <!-- <ListView 
            v-for="employee in filteredList"
            :employee="employee" 
            :employeeDetails="employeeDetails"
            v-bind:key="employee.id"> </ListView> -->
        <div class="employeesWrapper">
          <span
            v-if="addScrollFade"
            class="employeesWrapper__gradient employeesWrapper__gradient--top"
          />
          <div
            style="overflow-y: auto; height: 100%;"
            v-show="!employeeDetails"
          >
            <div v-for="empolyee in filteredList" v-bind:key="empolyee.id">
              <q-item
                clickable
                v-ripple
                v-on:click="employeeDetails = empolyee"
              >
                <q-item-section avatar>
                  <q-avatar size="6rem" class="avatar-img-wrapper">
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                  </q-avatar>
                </q-item-section>
                <q-item-section class="text-secondary text-h4 title-font"
                  >{{ empolyee.firstName }}
                  {{ empolyee.surname }}</q-item-section
                >
              </q-item>
            </div>
          </div>
          <span
            v-if="addScrollFade"
            class="employeesWrapper__gradient employeesWrapper__gradient--bottom"
          />
        </div>
      </div>
    </q-item>
    <!-- <Keyboard /> -->
    <vue-touch-keyboard
      id="keyboard"
      :options="options"
      v-if="visible"
      :layout="layout"
      :cancel="hide"
      :accept="accept"
      :input="input"
    />
  </q-layout>
</template>

<script>
import data from "../store/employees.json";

import VueTouchKeyboard from "vue-touch-keyboard";
import style from "vue-touch-keyboard/dist/vue-touch-keyboard.css";
export default {
  name: "PersonToMeetPage",
  data() {
    return {
      employeeDetails: false,
      searchedEmpolyee: "",
      employees: data.employees,
      visible: false,
      layout: "normal",
      input: null,
      options: {
        useKbEvents: false,
        preventClickEvent: false
      }
    };
  },
  computed: {
    filteredList() {
      return this.employees.filter(empolyee => {
        if (this.searchedEmpolyee) {
          if (
            empolyee.firstName
              .toLowerCase()
              .includes(this.searchedEmpolyee.toLowerCase()) ||
            empolyee.phone.toString().includes(this.searchedEmpolyee.toString())
          ) {
            return empolyee;
          }
        }
      });
    },
    addScrollFade() {
      if (this.employeeDetails !== false) {
        return false;
      } else {
        return true;
      }
    }
  },
  components: {
    //  "ListView" : require("../components/employee/ListView.vue").default,
    DetailedView: require("../components/employee/DetailedView").default,
    // VueTouchKeyboard: require("../components/vueTouchKeyboard").default
    // Keyboard: require("../components/keyboard").default,
    "vue-touch-keyboard": VueTouchKeyboard.component
  },
  methods: {
    accept(text) {
      console.log("Input text: " + text);
      this.hide();
    },

    show(e) {
      this.input = e.target;
      this.layout = e.target.dataset.layout;

      if (!this.visible) this.visible = true;
    },

    hide() {
      this.visible = false;
    },

    next() {
      let inputs = document.querySelectorAll("input");
      let found = false;
      [].forEach.call(inputs, (item, i) => {
        if (!found && item == this.input && i < inputs.length - 1) {
          found = true;
          this.$nextTick(() => {
            inputs[i + 1].focus();
          });
        }
      });
      if (!found) {
        this.input.blur();
        this.hide();
      }
    }
  }
};
</script>

<style lang="scss">
.page2 {
  background-image: url("../assets/page2/page2Background.png");
  padding: 4rem 10rem;
}

.wrapper {
  //    background-color: red;
  width: 100%;
}

.employeesWrapper {
  position: relative;
  height: 50%;
  // overflow-y: auto;
  // background-color: orange;

  &__gradient {
    pointer-events: none;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 100;

    &--top {
      top: 0;
      height: 5%;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0) 100%
      );
    }

    &--bottom {
      height: 20%;
      bottom: 0;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 100%
      );
    }
  }
}

.header-text {
  margin-bottom: 2rem;
}

.search-input * {
  color: white;
  font-size: 1.4rem;
}

// .q-field--float .q-field__label {
//   font-size: 1rem;
// }

// .q-field--outlined .q-field__control:before {
//   border: 1px solid rgba(255, 255, 255, 0.5);
// }

.avatar-img-wrapper div {
  border: solid 2px white;
}
</style>
