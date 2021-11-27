<template>
    <div>
        <div class="header">
            <div id="nav">
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link> |
                <router-link to="/">Logout</router-link>
            </div>
            <h2>List all faculties</h2>
        </div>
        <div class="centered">
            <table>
                <tr>
                <td colspan=2>
                    <p>View list of all faculties in the department with current(active) grant-funded projects</p>
                </td>
                </tr>
            </table>
            <table>
                <tr v-for="faculty in activeFaculty" :key="faculty"><td>{{faculty.firstName}} {{faculty.lastName}} is working on {{faculty.projectTitle}}</td></tr>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
    name: "FacultyList",
    data: () => ({
    activeFaculty: "",
  }),
  computed: {
    ...mapGetters({
deptID: "getDept"
  })},
  async mounted(){
      const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    let params = new URLSearchParams();
    params.append("operation", "active");
    params.append("deptID", this.deptID);
          await axios.post(
      "http://localhost:3000/chair",
      params,
      config
    ).then(result => {
        this.activeFaculty = result.data;
    });
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