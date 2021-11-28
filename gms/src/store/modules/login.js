import axios from "axios";
//import { router } from "../../router/index.js";

const state = {
  server_answer: "mismatch",
  deptID: "",
  facultyID: ""
};

const getters = {
  answer: (state) => {
    return state.server_answer;
  },
  getDept: (state) =>{
    return state.deptID;
  },
  getFac: (state) =>{
    return state.facultyID;
  }
};

const mutations = {
  setStatus(state, payload) {
    state.server_answer = payload;
  },
  setDept(state, payload) {
    state.deptID = payload;
  },

  setFac(state, payload) {
    state.facultyID = payload;
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

    await axios.post(
      "http://localhost:3000/check-login",
      params,
      config
    ).then(response => {
      commit("setStatus", response.data.roleID);
    commit("setDept",response.data.deptID);
    commit("setFac",response.data.facultyID);
    });
    
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
