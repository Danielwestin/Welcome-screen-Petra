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
              style="backgroundColor: transparent; height: 100%; width: 13%;"
            >
              <q-checkbox
                @input="
                  v => {
                    change('checkbox1', v);
                  }
                "
                name="checkbox1"
                ref="checkbox1Ref"
                size="112px"
                v-model="options.checkbox1.state"
              />
            </div>
          </div>
          <div
            class=" flex justify-end items-center"
            style="backgroundColor: transparent; "
          >
            <p class="q-ma-none input-font text-secondary bread-size">
              No, but please remind me by text when my meter runs out at
            </p>
            <div
              style="padding-left: 28px; backgroundColor: transparent; height: 100%; width: 13%;"
            >
              <q-input
                name="time"
                ref="timeRef"
                square
                outlined
                mask="time"
                v-model="options.time.state"
                class="time-input text-font bread-size"
                @input="
                  v => {
                    change('time', v);
                  }
                "
              >
                <template v-slot:append>
                  <q-icon
                    name="access_time"
                    color="white"
                    class="cursor-pointer"
                  >
                    <q-popup-proxy
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-time
                        @input="
                          v => {
                            change('time', v);
                          }
                        "
                        dark
                        format24h
                        class="time-input"
                        v-model="options.time.state"
                      >
                        <div class="row items-center justify-end ">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="green"
                            flat
                          />
                        </div>
                      </q-time>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
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
                size="112px"
                v-model="options.checkbox2.state"
              />
            </div>
          </div>
          <div
            class=" flex justify-end items-center"
            style="backgroundColor: transparent;  "
          >
            <div
              style=" padding-left: 28px; backgroundColor: transparent; height: 100%; width: 13%;"
            >
              <transition name="fade">
                <q-btn
                  v-if="showContinue"
                  flat
                  label="Continue"
                  type="submit"
                  color="green"
                  size="lg"
                  class="text-font"
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
export default {
  data() {
    return {
      showContinue: false,
      options: {
        checkbox1: {
          state: false,
          to: "/eighths-page"
        },
        time: {
          state: "",
          to: "/sixth-page"
        },
        checkbox2: {
          state: false,
          to: "/seventh-page"
        }
      }
    };
  },
  methods: {
    onSubmit(evt) {
      const formData = new FormData(evt.target);
      const submitResult = [];

      for (const [name, value, path] of formData.entries()) {
        if (value) {
          // submitResult.push({
          //   name,
          //   value,
          //   path
          // });
          console.log(name, value);
          this.$router.push(this.options[name].to);
        }
      }
      // this.$router.push(this.options[submitResult[0].name].to);
      // this.submitResult = submitResult;
    },
    change(name, value) {
      console.log("hej");
      Object.keys(this.options).forEach(key => {
        if (key === name) {
          this.options[key].state = value;
          this.showContinue = value;
        } else {
          this.options[key].state = false;
          if (key === "time") {
            this.options.time.state = "";
          }
        }
        console.log("time statet", this.options.time.state);

        // this.options[key] = name === key ? value : false;
      });
    }
  }
};
</script>

<style lang="scss">
.page5 {
  background-image: url("../assets/page5/page5Background.png");
  padding: 4rem 10rem;
}

.time-input {
  width: 150px;
}

.time-input * {
  color: white;
  font-size: 1.4rem;
}
</style>
