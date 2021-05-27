const state = {
  checkbox1: {
    state: false,
    to: "/eighths-page"
  },
  time: {
    state: false,
    to: "/sixth-page"
  },
  checkbox2: {
    state: false,
    to: "/seventh-page"
  }
};

const mutations = {
  checkbox1(state, { name, value }) {
    state[name].state = value;
  },
  time(state, { name, value }) {
    state[name].state = value;
  },
  checkbox2(state, { name, value }) {
    state[name].state = value;
  }
};

const actions = {};

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
