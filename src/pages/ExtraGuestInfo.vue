<template>
  <q-layout view="lHh Lpr lFf">
    <q-item class="page4background q-px-xl">
      <div class="wrapper" style="backgroundColor: transparent;">
        <h2 class="text-h2 text-primary header-text">
          Anything else we should know about?
        </h2>
        <p class="text-secondary text-h4 q-pt-xl" style="width: 50%;">
          We don’t mean to pry, but do you suffer from any allergies or anything
          else Cristoffer or our receptionist should know about?
        </p>
        <div
          class="q-mt-xl"
          style="max-width: 50%; backgroundColor: transparent; "
        >
          <q-input
            text-color="white"
            outlined
            v-model="textfield"
            type="textarea"
            placeholder="Please let us know"
            class="textfield-input"
            style="height: 100%; border: solid 1px white;"
          />

          <q-btn
            label="Carry on"
            color="green"
            flat
            size="xl"
            class="carryOnButton"
            icon-right="arrow_forward"
          />
        </div>
      </div>
    </q-item>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      textfield: ""
    };
  }
};
</script>

<style lang="scss">
.page4background {
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/page4/page4Background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 4rem 10rem;
}

.textfield-input * {
  color: white;
  font-size: 1.4rem;
  height: 290px;
}

.carryOnButton {
  position: absolute;
  top: 647px;
  left: 1443px;
  //   width: 170px;
  //   height: 37px;
}
</style>
