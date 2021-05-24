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
          We will remind you at {{ t }}
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
          size="xl"
          class="text-font"
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
    t() {
      return this.$store.getters["parkingTime"];
    }
  }
};
</script>

<style lang="scss">
.page6 {
  background-image: url("../assets/page6/page6Background.png");

  padding: 4rem 10rem;
}
</style>
