import axios from "axios";

const state = {
};

const getters = {
};

const mutations = {
};

const actions = {
  async addUser(_,payload) {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    let params = new URLSearchParams();
    params.append("username", payload.username);
    params.append("password", payload.password);
    params.append("roleid", payload.roleid);
    params.append("operation", payload.operation)

    await axios.post(
      "http://localhost:3000/profiles",
      params,
      config
    );

  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
