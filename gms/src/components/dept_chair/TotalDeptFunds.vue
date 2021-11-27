<template>
    <div>
        <div class="header">
            <div id="nav">
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link> 
            </div>
            <h2>View Total Department Grant Funding</h2>
        </div>
        <div class="centered">
            <table>
                <tr><td>The Total Grant Funding for the {{details.departmentName}} Department is ${{details.total}}</td></tr>
            </table>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from 'vuex'
export default {
    name: "TotalDeptFunds",
    data: () => ({
    details: "",
  }),
  computed: {
  ...mapGetters({
deptID: "getDept",
  })},
    async mounted(){
        const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      }
}
let params = new URLSearchParams();
    params.append("operation", "allFunding");
    params.append("deptID", this.deptID);
      await axios.post(
      "http://localhost:3000/chair",
      params,
      config
    ).then(result => {
        this.details = result.data;
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