<template>
  <q-layout view="lHh Lpr lFf">
    <q-item class="page6 background">
      <div
        class="q-gutter-md"
        style="backgroundColor: transparent; height: 78%;"
      >
        <h2
          class="text-primary title-size q-pb-sm title-font"
          style="margin-bottom: 2rem; backgroundColor: transparent;"
        >
          We will remind you at {{ CheckNumber(time.hour) }}:{{
            CheckNumber(time.minute)
          }}
        </h2>
        <p
          class="text-secondary bread-size q-pb-sm input-font"
          style="width: 58%; backgroundColor: transparent;"
        >
          We know it’s a bugger when the meter runs out, but relax, we’ve got it
          covered. 15 min before the time runs out you will get a text message
          with a friendly reminder.
        </p>
        <q-btn
          to="/eighths-page"
          flat
          label="Continue"
          type="submit"
          color="green"
          class="text-font small-size"
          icon-right="arrow_forward"
        />
        <!-- <div
          class="q-mt-lg flex justify-between items-end"
          style="max-width: 90%; backgroundColor: transparent; "
        ></div> -->
      </div>
    </q-item>
  </q-layout>
</template>

<script>
export default {
  computed: {
    time() {
      return this.$store.getters["parkingTime"];
    }
  },
  methods: {
    CheckNumber(n) {
      return (n < 10 ? "0" : "") + n;
    }
  }
};
</script>

<style lang="scss">
.page6 {
  background-image: url("../assets/page6/page6Background.jpg");

  padding: 7rem 10rem;
}
</style>
