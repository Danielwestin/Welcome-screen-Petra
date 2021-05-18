<template>
  <q-layout view="lHh Lpr lFf">
    <q-item class="page4background">
      <div class="q-gutter-md" style="backgroundColor: transparent;">
        <h2
          class="text-primary text-h2 q-pb-lg"
          style=" backgroundColor: transparent;"
        >
          Anything else we should know about?
        </h2>
        <p
          class="text-secondary text-h4 q-pb-sm"
          style="width: 50%; backgroundColor: transparent;"
        >
          We don’t mean to pry, but do you suffer from any allergies or anything
          else Cristoffer or our receptionist should know about?
        </p>
        <div
          class="q-mt-xl flex justify-between items-end"
          style="max-width: 90%; backgroundColor: transparent; "
        >
          <q-input
            @focus="show"
            data-layout="normal"
            text-color="white"
            outlined
            v-model="textfield"
            type="textarea"
            placeholder="Please let us know"
            class="textfield-input"
            style="width: 50%; height: 100%; border: solid 1px white;"
          />

          <q-btn
            to="fifth-page"
            v-on:click="carryOn"
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
      textfield: "",
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
    carryOn() {
      console.log(this.textfield);
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
  // position: absolute;
  // top: 647px;
  // left: 1443px;
}
</style>
