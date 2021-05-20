<template>
  <q-layout view="lHh Lpr lFf">
    <q-item class="page3 background">
      <div
        class="fixed-top"
        style="z-index: 100; height: 8%; background: linear-gradient(to bottom, rgba(13,22,54, 1) 0%, rgba(0, 0, 0, 0) 100%);"
      />
      <div
        class="q-gutter-md wrapper"
        style=" padding-top: 4rem; backgroundColor: transparent; height: 70%; overflow-y: auto; "
      >
        <h2
          class="title-size text-primary q-mb-none title-font"
          style="margin-bottom: 2rem;"
        >
          Please, tell us a little about yourself
        </h2>

        <q-form ref="validateFormRef" @submit.prevent="onSubmit">
          <q-input
            @focus="show"
            data-layout="normal"
            ref="name"
            @input="addSubmitButton"
            class="search-input text-font"
            outlined
            square
            v-model="guest.name"
            label="Your Name"
            :rules="[val => !!val]"
          >
            <template v-if="guest.name" v-slot:append>
              <q-icon
                name="check"
                @click.stop="guest.name = null"
                class="cursor-pointer"
                color="green"
              />
            </template>
          </q-input>

          <div class="row q-mt-none" style="backgroundColor: none;">
            <div class="col ">
              <q-input
                @focus="show"
                data-layout="normal"
                @input="addSubmitButton"
                class="search-input text-font"
                outlined
                square
                v-model="guest.company"
                label="Name of your company"
                :rules="[val => !!val]"
                ><template v-if="guest.company" v-slot:append>
                  <q-icon
                    name="check"
                    @click.stop="guest.company = null"
                    class="cursor-pointer"
                    color="green"
                  />
                </template>
              </q-input>
            </div>
            <div class="col q-pl-md">
              <q-input
                @focus="show"
                data-layout="numeric"
                @input="addSubmitButton"
                class="search-input text-font"
                outlined
                square
                v-model="guest.phoneNumber"
                label="Your phone number"
                :rules="[val => !!val]"
              >
                <template v-if="guest.phoneNumber" v-slot:append>
                  <q-icon
                    name="check"
                    @click.stop="guest.phoneNumber = null"
                    class="cursor-pointer"
                    color="green"
                  />
                </template>
              </q-input>
            </div>
          </div>
          <div class="row" style="backgroundColor: none;">
            <div class="col text-secondary title-font text-body1">
              Did you bring a colleague?
              <div class="row q-mt-xs">
                <transition-group name="fade" tag="div" class="col-12">
                  <div
                    class="col-12 q-mb-sm"
                    v-for="colleague in guest.colleagues"
                    v-bind:key="colleague.id"
                  >
                    <q-input
                      @focus="show"
                      data-layout="normal"
                      @input="addColleagueButton"
                      :key="colleague.id"
                      class="search-input text-font"
                      outlined
                      square
                      v-model="colleague.name"
                      label="Name of your colleague"
                      ><template v-if="colleague.name" v-slot:append>
                        <q-icon
                          name="check"
                          @click.stop="colleague.name = null"
                          class="cursor-pointer"
                          color="green"
                        /> </template
                    ></q-input>
                  </div>
                </transition-group>
                <div ref="scrollRef"></div>
              </div>
            </div>
            <div
              class="col q-py-none q-my-none q-pl-md flex items-end"
              style="background-color: none;"
            >
              <transition name="slide">
                <div
                  class="row q-mb-sm testy"
                  style="backgroundColor: none; width: 100%; "
                >
                  <div
                    v-show="addInputButton"
                    class="col-12 q-mb-xs text-secondary title-font text-body1
"
                  >
                    Add colleague
                  </div>
                  <div class="col-12 flex align-end justify-between ">
                    <span
                      style="height: 55px; width: 55px; background-color: transparent;"
                      v-show="!addInputButton"
                    />
                    <transition name="fade">
                      <q-btn
                        v-show="addInputButton"
                        @click="addColleagueInput"
                        dense
                        size="1.3rem"
                        class="no-border-radius q-pa-xs"
                        color="green"
                        text-color="black"
                        icon="person_add_alt"
                      />
                    </transition>
                    <transition name="fade">
                      <q-btn
                        v-show="submitButton"
                        label="That´s it"
                        type="submit"
                        color="green"
                        flat
                        size="lg"
                        class="q-ml-sm text-font"
                        icon-right="arrow_forward"
                      />
                    </transition>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </q-form>
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
      :next="next"
    />
  </q-layout>
</template>

<script>
import VueTouchKeyboard from "vue-touch-keyboard";

export default {
  components: {
    "vue-touch-keyboard": VueTouchKeyboard.component
  },
  data() {
    return {
      guest: {
        name: "",
        company: "",
        phoneNumber: "",
        colleagues: [{ id: 1, name: "" }]
      },
      submitButton: false,
      addInputButton: false,
      validated: false,
      visible: false,
      layout: "normal",
      input: null,
      options: {
        useKbEvents: false,
        preventClickEvent: false
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

    next(e) {
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
    },
    addSubmitButton() {
      if (this.guest.name && this.guest.company && this.guest.phoneNumber) {
        this.submitButton = true;
      } else {
        this.submitButton = false;
      }
    },

    addColleagueButton() {
      if (
        this.guest.name &&
        this.guest.company &&
        this.guest.phoneNumber &&
        this.guest.colleagues[0].name
      ) {
        this.addInputButton = true;
      } else {
        this.addInputButton = false;
      }
    },
    addColleagueInput() {
      if (
        this.guest.name &&
        this.guest.company &&
        this.guest.phoneNumber &&
        this.guest.colleagues[0].name
      ) {
        this.guest.colleagues.push({ id: Math.random() * 1000, name: "" });

        setTimeout(() => {
          this.$refs.scrollRef.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
          });
        }, 100);
      } else {
        this.$refs.validateFormRef.validate();
      }
    },
    onSubmit(e) {
      this.$refs.validateFormRef.validate().then(() => {
        console.log("success");
        console.log(this.guest);
        this.$router.push("/forth-page");
      });
    }
  }
};
</script>

<style lang="scss">
.page3 {
  background-image: url("../assets/page3/page3Background.png");
  padding: 0rem 10rem;
}

.wrapper {
  width: 100%;
}

.testy {
  transition: all 0.2s ease;
}

.search-input * {
  color: white;
  font-size: 1.4rem;
}
</style>
