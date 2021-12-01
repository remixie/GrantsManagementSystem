<template>
    <div>
        <div class="header">
            <div id="nav">
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link> 
            </div>
            <h2>View all sponsored projects</h2>
        </div>
        <div class="centered">
            <p>View list of all sponsored projects where user is PI</p>
            <h3> Sponsored Projects List </h3>
            <ul>
                <li v-for="p in projects" :key="p.projectTitle">{{p.projectTitle}} has a start of {{p.projectStartDate.replace("T00:00:00.000Z"," ")}} and a end of {{p.projectEndDate.replace("T00:00:00.000Z"," ")}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
    name: "AllSponsoredProjects",
    computed: {
    ...mapGetters({
facultyID: "getFac",
  })},
    data: () => ({
        projects: ""
    }),
        async mounted(){
            const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      }};
           let params = new URLSearchParams();
           console.log(this.facultyID)
    params.append("facultyID", this.facultyID);
    params.append("operation", "allSponsoredProjects");
    await axios.post(
      "http://localhost:3000/fac",
      params,
      config
    ).then(result => {
        this.projects = result.data;
    })}
}
</script>

<style scoped>
    h2{
    margin-left: 14%;
  }
  h3{
      margin-bottom:0px;
  }
  .centered{
    text-align: left;
    width: 35%;
    margin-left: 40%;
  }
  ul {
    list-style-type: none;
    padding: 0;
    border: 1px solid green;
    width:70%;
    margin-top:0px;
    }
    ul li {
    padding: 8px 16px;
    border-bottom: 1px solid green;
    color:black;
    }
    ul li:last-child {
        border-bottom: none
    }
</style>