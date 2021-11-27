import axios from "axios";
//import { router } from "../../router/index.js";

const state = {
  server_answer: "mismatch",
  deptID: ""
};

const getters = {
  answer: (state) => {
    return state.server_answer;
  },
  getDept: (state) =>{
    return state.deptID;
  }
};

const mutations = {
  setStatus(state, payload) {
    state.server_answer = payload;
  },
  setDept(state, payload) {
    state.deptID = payload;
  },
};

const actions = {
  async doLogin({ commit }, payload) {
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

    commit("setStatus", response.data.roleID);
    commit("setDept",response.data.deptID);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
