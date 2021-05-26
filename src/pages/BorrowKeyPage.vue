<template>
  <q-layout view="lHh Lpr lFf">
    <q-item class="page7 background">
      <div
        class="q-gutter-md"
        style="backgroundColor: transparent; height: 78%;"
      >
        <h2
          class="text-primary title-size q-pb-sm title-font"
          style="margin-bottom: 4rem; backgroundColor: transparent;"
        >
          Want to borrow a key?
        </h2>
        <p
          class="text-secondary bread-size q-mb-xl input-font"
          style="width: 55%; backgroundColor: transparent;"
        >
          If you grab one of the keycards on the wall on your right hand side,
          you won’t have wait for the doorbell when you’ve put the permit in
          your car.
        </p>
        <div
          class="flex justify-between items-center q-mb-xl"
          style="backgroundColor: transparent; width: 63%;"
        >
          <p class="text-secondary bread-size q-pt-lg text-font">
            We just need to know the number on the card:
          </p>
          <q-input
            class="text-secondary text-font number-input"
            v-model.number="keyNumber"
            type="number"
            mask="#"
            min="1"
            max="10"
            :rules="[value => value > 0]"
            square
            outlined
            label="Card Number:"
          />
        </div>
        <q-btn
          @click="ChoosenKeyNumber"
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
  data() {
    return {
      keyNumber: 0
    };
  },
  methods: {
    ChoosenKeyNumber() {
      console.log(this.keyNumber);
    }
  }
};
</script>

<style lang="scss">
.page7 {
  background-image: url("../assets/page7/page7Background.jpg");
  padding: 4rem 10rem;
}

.number-input * {
  color: white;
  font-size: 1.7rem;
}

.number-input {
  height: 100px;
  width: 130px;

  .q-field__control {
    height: 100px;
  }

  input[type="number"] {
    font-size: 60px;
  }
}

// .q-input {
//   height: 8.5em;
// }

// .q-if-label {
//   height: 8em;
// }

// input[type="number"] {
//   height: 8em;
// }
</style>
