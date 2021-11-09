import axios from "axios";
import { router } from "../../router/index.js";

//Comment for you (plz delete after reading) -  All the state variables need to be reset on logout
const state = {
  isLogin: false,
  token: null,
  user: null, //Comment for you (plz delete after reading) - this field can be used if required otherwise can be eliminated as well.
};

const getters = {};

const actions = {
  async doLogin({ commit }, { username, password }) {
    const req = {
      email: username,
      password: password,
    };

    console.log(req);
    const loginResponse = await axios.post("https://reqres.in/api/login", req);

    console.log(loginResponse.data);

    if (loginResponse.data.error) {
      console.log("Password is missing");
    } else if (loginResponse.data.token) {
      console.log("Login Successful");
      commit("loginSuccess", loginResponse, username);

      router.push("/admin");
    }
  },
};

const mutations = {
  loginSuccess(state, token, username) {
    state.isLogin = true;
    state.token = token;
    state.user = username;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
