const state = {
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
};

const mutations = {
  //   updateParkingTime(state, { name, value }) {
  //     state[name].state = value;
  //     // Object.assigns(state[name].state, value);
  //   },
  checkbox1(state, { name, value }) {
    // console.log("checkbox1", name, value);
    state[name].state = value;
  },
  time(state, { name, value }) {
    console.log("in store", name, value);
    state[name].state = value;
    // state[payload.name].details = payload.details;
  },
  checkbox2(state, { name, value }) {
    // console.log("checkbox2", name, value);
    state[name].state = value;
  }
};

const actions = {
  //   updateParkingTime({ commit }, payload) {
  //     console.log(payload);
  //     commit("updateParkingTime", payload);
  //   },
  //   time({ commit }, payload) {
  //     console.log("hej");
  //     // commit(payload.name, payload);
  //   },
  //   checkbox1({ commit }, payload) {
  //     commit(payload.name, payload);
  //   },
  //   checkbox2({ commit }, payload) {
  //     commit(payload.name, payload);
  //   }
};

const getters = {
  parkingState: state => {
    return state;
  },
  parkingTime: state => {
    return state.time.state;
  }
};

export default {
  namespaces: true,
  state,
  mutations,
  actions,
  getters
};
