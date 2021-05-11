<template>
  <q-layout view="lHh Lpr lFf">
    <q-item class="page3background q-px-xl">
      <div
        class="q-gutter-md wrapper"
        style="backgroundColor: orange; height: 80%; overflow-y: auto"
      >
        <h2 class="text-h2 text-primary header-text">
          Please, tell us a little about yourself.
        </h2>

        <q-form ref="validateFormRef" @submit.prevent="onSubmit">
          <q-input
            autofocus
            ref="name"
            @input="addSubmitButton"
            class="search-input"
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

          <!---OLDEST CODE --->
          <div class="row q-mt-none" style="backgroundColor: none;">
            <div class="col ">
              <q-input
                @input="addSubmitButton"
                class="search-input"
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
                @input="addSubmitButton"
                class="search-input"
                outlined
                square
                mask="####-######"
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
            <div class="col text-secondary ">
              Did you bring a colleague?
              <div class="row q-mt-xs">
                <transition-group name="glide" tag="div" class="col-12">
                  <div
                    class="col-12 q-mb-sm"
                    v-for="colleague in guest.colleagues"
                    v-bind:key="colleague.id"
                  >
                    <q-input
                      @input="addColleagueButton"
                      :key="colleague.id"
                      class="search-input"
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
                <span
                  id="scrollRef"
                  style="width: 2px; height: 2px; background-color: green;"
                ></span>
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
                    class="col-12 q-mb-xs text-secondary"
                  >
                    Add colleague.
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
                        class="q-ml-sm"
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
  </q-layout>
</template>

<script>
import { scroll } from "quasar";
const { getScrollTarget, setScrollPosition } = scroll;
export default {
  data() {
    return {
      // guest: {
      //   name: "Ulf Vanselius",
      //   company: "Pyramid communication",
      //   phoneNumber: "0733-903525",
      //   colleague: ""
      // },
      guest: {
        name: "",
        company: "",
        phoneNumber: "",
        colleagues: [{ id: 1, name: "" }]
      },
      submitButton: false,
      addInputButton: false,
      validated: false
    };
  },
  methods: {
    //v-bind:class="{ textPositive: validated }"
    // validateInput(val) {
    //     // console.log(val.length);
    //     return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //     // call
    //     //  resolve(true)
    //     //     --> content is valid
    //     //  resolve(false)
    //     //     --> content is NOT valid, no error message
    //     //  resolve(error_message)
    //     //     --> content is NOT valid, we have error message
    //     resolve(val.length > 1)

    //     // calling reject(...) will also mark the input
    //     // as having an error, but there will not be any
    //     // error message displayed below the input
    //     // (only in browser console)
    //     }, 500)
    // })
    //     },
    val(e) {
      console.log(this.$refs.name.hasError);
      if (!this.$refs.name.hasError && e.length >= 5) {
        console.log("inne if");
        this.validated = true;
        console.log(this.$refs.name.value);
        console.log(e);
      } else {
        console.log("inne else");
        this.validated = false;
      }
    },
    addSubmitButton() {
      if (this.guest.name && this.guest.company && this.guest.phoneNumber) {
        this.submitButton = true;
      } else {
        this.submitButton = false;
      }
    },
    onSubmit(e) {
      this.$refs.validateFormRef.validate().then(() => {
        console.log("success");
        console.log(this.guest);
        this.$router.push("/forth-page");
      });
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

    handleScroll(msg) {
      const ele = document.getElementById("scrollRef"); // You need to get your element here
      const target = getScrollTarget(ele);
      const offset = ele.offsetTop;
      const duration = 1000;
      setScrollPosition(target, offset, duration);
      console.log(ele, target, offset);
    },
    scrollToEnd: function() {
      var container = this.$el.querySelector("#container");
      container.scrollTop = container.scrollHeight;
    },

    addColleagueInput() {
      if (
        this.guest.name &&
        this.guest.company &&
        this.guest.phoneNumber &&
        this.guest.colleagues[0].name
      ) {
        this.guest.colleagues.push({ id: Math.random() * 1000, name: "" });
        // const testy = document.querySelector(".testy");
        // testy.style.transform = "translateY(81%)";
        this.scrollToEnd();
      } else {
        this.$refs.validateFormRef.validate();
      }
    }
  }
};
</script>

<style lang="scss">
.page3background {
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/page3/page3Background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 4rem 10rem;
}

.wrapper {
  // background-color: red;
  width: 100%;
}

.testy {
  transition: all 0.2s ease;
}

.search-input * {
  color: white;
  font-size: 1.4rem;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}

.glide-enter,
.glide-leave-to {
  visibility: hidden;
  opacity: 0;
}

.glide-enter-active,
.glide-leave-active {
  transition: all 0.5s;
}

.q-field--float .q-field__label {
  font-size: 1rem;
}

.q-field--outlined .q-field__control:before {
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.textPositive {
  .q-field__inner {
    border: solid 1px green;
  }

  .q-field__control {
    border: solid 2px green;
    // color: green;
  }

  .q-field__control:before {
    // border: solid 1px green;
    // color: green;
  }
}
</style>
