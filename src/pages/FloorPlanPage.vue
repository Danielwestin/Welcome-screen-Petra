<template>
  <q-layout view="lHh Lpr lFf">
    <q-item to="/" class="page8 background">
      <div
        class="q-gutter-md"
        style="backgroundColor: transparent; height: 78%;"
      >
        <h2
          class="text-primary title-size title-font"
          style="margin-bottom: 2rem; backgroundColor: transparent;"
        >
          Cristoffer is on his way!
        </h2>
        <p
          class="text-secondary bread-size input-font"
          style="width: 56%; backgroundColor: transparent;"
        >
          In the mean time, please have a look at the map of Petra where you’ll
          find the emergency exits, as well as powder rooms and our kitchen if
          you want tea, coffee or water with or without bubbles.
        </p>
        <div>
          <q-img
            src="../assets/page8/PetraOfficeFloorPlan.png"
            class="floor-plan"
          />
        </div>
      </div>
    </q-item>
  </q-layout>
</template>

<script>
export default {};
</script>

<style lang="scss">
.page8 {
  background-image: url("../assets/page8/page8Background.jpg");
  padding: 7rem 10rem;
}

.floor-plan {
  position: absolute;
  top: 120px;
  left: 0px;
  width: 1858px;
  height: 788px;
}
</style>
