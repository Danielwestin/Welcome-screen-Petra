<template>
  <div v-show="employeeDetails" class="q-pt-md" style="width: 75%;">
    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-avatar size="18rem" class="avatar-img-wrapper">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
        </q-avatar>
      </q-item-section>
      <q-item-section class="q-pl-lg">
        <div
          style="display: flex; flex-direction: column; height: 100%; justify-content: flex-end"
        >
          <div class="text-secondary text-h3 title-font">
            {{ this.employeeDetails.firstName }}
            {{ this.employeeDetails.surname }}
          </div>
          <div
            class="text-secondary text-h6 text-weight-regular q-pt-sm text-font"
          >
            <q-icon name="phone" />
            {{ this.employeeDetails.phone }}
          </div>

          <div
            class="text-secondary text-h5 text-weight-light q-pt-sm input-font"
          >
            {{ this.employeeDetails.description }}
          </div>
          <div
            class="text-secondary text-h5 text-weight-light q-pt-sm row justify-between"
          >
            <q-btn
              flat
              class="q-px-none q-mx-none text-font"
              to="/third-page"
              v-on:click="chosenOne"
              size="1.5rem"
              align="right"
              color="green"
              label="This is the right one!"
            >
              <q-icon class="q-pl-sm" name="arrow_forward" />
            </q-btn>
            <q-btn
              flat
              class="q-px-none q-mx-none text-font"
              @click="CloseDetailedView"
              size="1.5rem"
              color="red"
              label="No, try again"
            />
          </div>
        </div>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
export default {
  props: ["employeeDetails"],
  data: function() {
    return { mutatedEmployeeDetails: this.employeeDetails };
  },
  methods: {
    chosenOne(e) {
      console.log(this.employeeDetails);
      e.stopPropagation();
    },
    CloseDetailedView(e) {
      e.stopPropagation();
      this.$emit("closeDetailedView", (this.mutatedEmployeeDetails = false));
    }
  }
};
</script>
<style lang="scss">
// .btn-no-padding {
//   padding: 0;
// }
</style>
