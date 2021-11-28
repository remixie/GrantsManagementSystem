<template>
    <div>
        <div class="header">
            <div id="nav">
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link> 
            </div>
            <h2>View Total Active Grant Funding for a Faculty</h2>
        </div>
        <div class="centered">
            <table v-if="facultyObj.length <= 0">
                <tr>
                <td colspan=2>
                    <p>Please select a faculty to view total amount of active grant funding received by that faculty</p>
                </td>
                </tr>
                <tr>
                <td>
                    <label for="facultyName"><b>Faculty</b></label>
                </td>
                <td>
                    <select name="facultyName" v-model="selectedFaculty" class="dropdown">
                    <option disabled selected value> -- Select Faculty -- </option>
                    <option v-for="faculty in allFaculty" :key="faculty.facultyID" :value="faculty.facultyID">{{faculty.firstName}} {{faculty.lastName}}</option>
                    </select>
                </td>
                </tr>
                <tr/> <tr/> <tr/>
                <tr>
                <td colspan=2 style="padding-left:30%;">
                    <button type="submit" @click="submit()">View Funding</button>
                </td>
                </tr>
            </table>
            <div v-else>{{facultyObj.firstName}} {{facultyObj.lastName}} has Active Grant Funding of ${{facultyObj.total}}</div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from 'vuex'
export default {
    name: "TotalFacultyFunds",
    data: () => ({
    selectedFaculty: "",
allFaculty: ""
  }),
    computed: {
    ...mapGetters({
deptID: "getDept",
facultyObj: "getFacultyDetails"
  })},
  async mounted(){
    this.$store.dispatch("faculty", {
          operation: "clearFacultyObj"
        });
      const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    let params = new URLSearchParams();
    params.append("operation", "allFaculty");
    params.append("deptID", this.deptID);
          await axios.post(
      "http://localhost:3000/chair",
      params,
      config
    ).then(result => {
        this.allFaculty = result.data;
    });
  },
  methods:{
submit(){
    this.$store.dispatch("faculty", {
          facultyID: this.selectedFaculty,
          operation: "totalFacultyFunds"
        });
}
  }
}
</script>

<style scoped>
    h2{
    margin-left: 14%;
  }
  .dropdown{
        background-color: #04AA6D;
        color: white;
        padding: 5px 12px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        font-size: 15px;
        width:55%;
  }
  .centered{
    text-align: left;
    width: 35%;
    margin-left: 35%;
  }

</style>