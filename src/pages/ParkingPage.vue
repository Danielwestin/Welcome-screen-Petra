<template>
  <q-layout view="lHh Lpr lFf">
    <q-item class="page5 background">
      <div
        class="q-gutter-md q-pr-lg"
        style="backgroundColor: transparent; width: 100%;"
      >
        <h2
          class="text-primary title-font title-size"
          style=" margin-bottom: 0; backgroundColor: transparent;"
        >
          Have you parked in one of our spots?
        </h2>
        <q-form @submit="onSubmit" ref="myForm">
          <div
            class=" flex justify-end items-center"
            style="backgroundColor: transparent; "
          >
            <p class="q-ma-none input-font text-secondary bread-size">
              No
            </p>
            <div
              style="backgroundColor: transparent; height: 100%; width: 13%; "
            >
              <q-checkbox
                @input="
                  v => {
                    change('checkbox1', v);
                  }
                "
                name="checkbox1"
                ref="checkbox1Ref"
                size="200px"
                :value="this.parkingState.checkbox1.state"
              />
            </div>
            <div
              style="backgroundColor: transparent; height: 100%; width: 8%;"
            ></div>
          </div>
          <div
            class=" flex justify-end items-center"
            style="backgroundColor: transparent; "
          >
            <p class="q-ma-none input-font text-secondary bread-size">
              No, but please remind me by text when my meter runs out at
            </p>
            <div
              class="flex justify-center"
              style="backgroundColor: transparent; height: 100%; width: 13%;"
            >
              <q-btn
                size="40px"
                icon="access_time"
                round
                color="secondary"
                text-color="black"
              >
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time
                    @input="(v, d) => change('time', d)"
                    format24h
                    class="time-input"
                    :value="this.parkingState.time.state"
                  >
                    <div class="row items-center justify-end q-gutter-sm">
                      <q-btn
                        label="Cancel"
                        color="primary"
                        flat
                        v-close-popup
                      />
                      <q-btn label="OK" color="primary" flat v-close-popup />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-btn>
            </div>
            <div
              class="flex justify-start items-center"
              style="backgroundColor: transparent; height: 100%; width: 8%;"
            >
              <p
                v-if="this.parkingState.time.state"
                class="q-ma-none text-secondary text-font bread-size"
              >
                {{ CheckNumber(this.parkingState.time.state.hour) }}:{{
                  CheckNumber(this.parkingState.time.state.minute)
                }}
              </p>
              <p class="q-ma-none text-secondary text-font bread-size" v-else>
                --:--
              </p>
            </div>
          </div>

          <div
            class=" flex justify-end items-center"
            style="backgroundColor: transparent; "
          >
            <p class="q-ma-none input-font text-secondary bread-size">
              Yes, and I would like to have a parking permit
            </p>
            <div
              style="backgroundColor: transparent; height: 100%; width: 13%;"
            >
              <q-checkbox
                @input="
                  v => {
                    change('checkbox2', v);
                  }
                "
                name="checkbox2"
                ref="checkbox2Ref"
                size="200px"
                :value="this.parkingState.checkbox2.state"
              />
            </div>
            <div
              style="backgroundColor: transparent; height: 100%; width: 8%;"
            ></div>
          </div>
          <div
            class=" flex justify-end items-center"
            style="backgroundColor: transparent;  "
          >
            <div
              style="backgroundColor: transparent; height: 100%; width: 18%;"
            >
              <transition name="fade">
                <q-btn
                  v-if="showContinue"
                  flat
                  label="Continue"
                  type="submit"
                  color="green"
                  class="text-font small-size"
                  icon-right="arrow_forward"
                />
              </transition>
            </div>
          </div>
        </q-form>
      </div> </q-item
  ></q-layout>
</template>

<script>
// @input=" (v, d) => {change('checkbox1', v, d);}"
// @input="(v, d) => {change('time', v, d);}"
// @input=" (v, d) => {change('checkbox2', v, d);}"

// import { mapActions } from "vuex";
// import store from "../store/store-parkingPage";

export default {
  data() {
    return {
      showContinue: false
    };
  },

  computed: {
    parkingState() {
      return this.$store.getters["parkingState"];
    }
  },
  mounted() {
    return Object.keys(this.parkingState).forEach(key => {
      this.$store.commit(key, { name: key, value: false });
      if (key === "time") {
        this.$store.commit("time", { name: key, value: "" });
      }
    });
  },
  methods: {
    CheckNumber(n) {
      return (n < 10 ? "0" : "") + n;
    },
    onSubmit() {
      Object.keys(this.parkingState).forEach(key => {
        if (this.parkingState[key].state) {
          console.log("picked choice:", key, this.parkingState[key]);
          this.$router.push(this.parkingState[key].to);
        }
      });
    },
    change(name, value) {
      Object.keys(this.parkingState).forEach(key => {
        if (key === name) {
          this.$store.commit(key, { name: key, value });
          this.showContinue = value;
        } else {
          this.$store.commit(key, { name: key, value: false });
        }
      });
    }
  }
};
</script>

<style lang="scss">
.page5 {
  background-image: url("../assets/page5/page5Background.jpg");
  padding: 7rem 10rem;
}

.time-input {
  width: 150px;
}

.time-input {
  color: black;

  .q-time__header-label {
    font-size: 2.5rem;
  }

  .q-time__main * {
    font-size: 1.5rem;
  }
}
</style>
