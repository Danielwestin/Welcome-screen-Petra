<template>
  <vue-touch-keyboard
    id="keyboard"
    :options="options"
    v-if="visible"
    :layout="layout"
    :cancel="hide"
    :accept="accept"
    :input="input"
  />
</template>

<script>
import VueTouchKeyboard from "vue-touch-keyboard";

export default {
  components: {
    "vue-touch-keyboard": VueTouchKeyboard.component
  },

  components: {
    "vue-touch-keyboard": VueTouchKeyboard.component
  },

  data() {
    return {
      visible: false,
      layout: "normal",
      input: null,
      options: {
        useKbEvents: false
      }
    };
  },

  methods: {
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
