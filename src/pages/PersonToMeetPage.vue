<template>
  <q-layout view="lHh Lpr lFf">
    <q-item class="page2background q-px-xl">
      <div class="q-gutter-md wrapper">
        <h2
          v-on:click="employeeDetails = false"
          class="text-h2 text-primary header-text"
        >
          Who are you here to see?
        </h2>
        <q-input
          autofocus
          v-show="!employeeDetails"
          class="search-input"
          outlined
          square
          v-model="searchedEmpolyee"
          label="Name or phone number:"
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
        <div v-show="!employeeDetails" style="height: 50%; overflow: scroll;">
          <div v-for="empolyee in filteredList" v-bind:key="empolyee.id">
            <q-item clickable v-ripple v-on:click="employeeDetails = empolyee">
              <q-item-section avatar>
                <q-avatar size="6rem" class="avatar-img-wrapper">
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                </q-avatar>
              </q-item-section>
              <q-item-section class="text-secondary text-h4"
                >{{ empolyee.firstName }} {{ empolyee.surname }}</q-item-section
              >
            </q-item>
          </div>
        </div>
      </div>
    </q-item>
  </q-layout>
</template>

<script>
import data from "../store/employees.json";

export default {
  name: "PersonToMeetPage",
  data() {
    return {
      employeeDetails: false,
      searchedEmpolyee: "",
      employees: data.employees
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
    }
  },
  components: {
    //  "ListView" : require("../components/employee/ListView.vue").default,
    DetailedView: require("../components/employee/DetailedView").default
  }
};
</script>

<style lang="scss">
.page2background {
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/page2/page2Background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 4rem 10rem;
}

.wrapper {
  //    background-color: red;
  width: 100%;
}

.header-text {
  margin-bottom: 0;
}

.search-input * {
  color: white;
  font-size: 1.4rem;
}

.q-field--float .q-field__label {
  font-size: 1rem;
}

.q-field--outlined .q-field__control:before {
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.avatar-img-wrapper div {
  border: solid 2px white;
}
</style>
