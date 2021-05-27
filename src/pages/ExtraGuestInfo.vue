<template>
  <q-layout view="lHh Lpr lFf">
    <q-item class="page4 background">
      <div @click="hide" class="q-gutter-md" style="height: 78%;">
        <h2
          class="text-primary title-size q-pb-sm title-font"
          style="margin-bottom: 2rem;"
        >
          Anything else we should know about?
        </h2>
        <p
          class="text-secondary bread-size q-pb-sm input-font"
          style="width: 55%;"
        >
          We don’t mean to pry, but do you suffer from any allergies or anything
          else Cristoffer or our receptionist should know about?
        </p>
        <div
          class="q-mt-lg flex justify-between items-end"
          style="max-width: 90%;"
        >
          <q-input
            @click.stop="show"
            data-layout="normal"
            text-color="white"
            outlined
            v-model="textfield"
            type="textarea"
            placeholder="Please let us know"
            class="textfield-input text-font"
            style="width: 50%; height: 100%; border: solid 1px white;"
          />

          <q-btn
            to="fifth-page"
            v-on:click="carryOn"
            label="Carry on"
            color="green"
            flat
            size="xl"
            class="text-font"
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
.page4 {
  background-image: url("../assets/page4/page4Background.jpg");
  padding: 7rem 10rem;
}

.textfield-input * {
  color: white;
  font-size: 1.4rem;
  height: 290px;
}
</style>
