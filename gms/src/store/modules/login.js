import axios from "axios";
//import { router } from "../../router/index.js";

const state = {
  server_answer: "mismatch",
};

const getters = {
  answer: (state) => {
    return state.server_answer;
  },
};

const mutations = {
  setStatus(state, payload) {
    state.server_answer = payload.data;
  },
};

const actions = {
  async doLogin({ commit }, payload) {
    //alert("hello!");
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    let params = new URLSearchParams();
    params.append("username", payload.username);
    params.append("password", payload.password);

    let response = await axios.post(
      "http://localhost:3000/check-login",
      params,
      config
    );

    commit("setStatus", response);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
