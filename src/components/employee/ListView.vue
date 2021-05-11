<template>
  <div>
    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-avatar size="6rem" class="avatar-img-wrapper">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
        </q-avatar>
      </q-item-section>
      <q-item-section class="text-secondary text-h4">
        {{ empolyee.firstName }} {{ empolyee.surname }}
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
export default {
  name: "ListView",
  created() {
    console.log(this.employee); //undefined;
  },
  props: ["employee", "employeeDetails"],
  data: () => {
    mutableemployeeDetails: this.employeeDetails;
  }

  // props: {
  //     "employee": Object,
  //     "employeeDetails": Boolean
  // },
};
</script>

<style></style>
