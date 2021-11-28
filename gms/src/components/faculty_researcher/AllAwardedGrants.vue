<template>
    <div>
        <div class="header">
            <div id="nav">
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link> 
            </div>
            <h2>View all awarded grants</h2>
        </div>
        <div class="centered">
            <p>View list of all grants awarded to PI</p>
            <h3> All Awarded Grants List </h3>
            <ul>
                <li v-for="grant in awardedGrants" :key="grant.grantID">{{grant.grantName}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
    name: "AllAwardedGrants",
    data: () => ({
    awardedGrants: "",
  }),
   computed: {
    ...mapGetters({
facultyID: "getFac"
  })},
    async mounted(){
      const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    let params = new URLSearchParams();
    params.append("operation", "allAwardedGrantNames");
    params.append("facultyID", this.facultyID);
          await axios.post(
      "http://localhost:3000/fac",
      params,
      config
    ).then(result => {
        this.awardedGrants = result.data;
    });
  }
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
    margin-left: 43%;
  }
  ul {
    list-style-type: none;
    padding: 0;
    border: 1px solid green;
    width:40%;
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