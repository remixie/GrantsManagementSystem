import axios from "axios";

const state = {
    facultyObj: ""
}

const getters ={
    getFacultyDetails: (state) => {
        return state.facultyObj
    }
};

const mutations = {
    setFacultyObj(state, payload) {
        state.facultyObj = payload;
      },
};
  
const actions = {
    async faculty({commit},payload) {

      if(payload.operation == "clearFacultyObj"){
        commit("setFacultyObj",[""])
      }else{
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
    let params = new URLSearchParams();
    params.append("operation", payload.operation);
    params.append("facultyID", payload.facultyID);

    let response = await axios.post(
      "http://localhost:3000/chair",
      params,
      config
    );
        commit("setFacultyObj",response.data[1]?response.data:response.data[0])
    }
}

}

export default {
    state,
    getters,
    mutations,
    actions,
  };
  