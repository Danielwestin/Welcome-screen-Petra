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
          class="text-secondary bread-size q-mb-lg input-font"
          style="width: 55%; backgroundColor: transparent;"
        >
          If you grab one of the keycards on the wall on your right hand side,
          you won’t have wait for the doorbell when you’ve put the permit in
          your car.
        </p>
        <div
          class="flex justify-between items-center q-mb-xl"
          style="backgroundColor: transparent; width: 68%;"
        >
          <p class="text-secondary bread-size q-pt-lg text-font">
            We just need to know the number on the card:
          </p>
          <q-input
            @focus="show"
            data-layout="numeric"
            class="text-secondary text-font number-input"
            v-model.number="keyNumber"
            type="number"
            mask="#"
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
          class="text-font small-size"
          icon-right="arrow_forward"
        />
      </div>
    </q-item>
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
import VueTouchKeyboard from "vue-touch-keyboard";
export default {
  data() {
    return {
      keyNumber: 0,
      visible: false,
      layout: "normal",
      input: null,
      options: {
        useKbEvents: false,
        preventClickEvent: false
      }
    };
  },
  components: {
    "vue-touch-keyboard": VueTouchKeyboard.component
  },
  methods: {
    ChoosenKeyNumber() {
      console.log(this.keyNumber);
    },
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
.page7 {
  background-image: url("../assets/page7/page7Background.jpg");
  padding: 7rem 10rem;
}

.number-input * {
  color: white;
  font-size: 1.7rem;
}

.number-input {
  height: 100px;
  width: 190px;

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
