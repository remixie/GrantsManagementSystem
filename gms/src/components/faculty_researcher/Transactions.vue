<template>
    <div>
        <div class="header">
            <div id="nav">
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link> 
            </div>
            <h2>View Transactions</h2>
        </div>
        <div class="centered">
            <table>
                <tr>
                    <td colspan=2>
                        <p>View Transactions made by the Researcher</p>
                    </td>
                </tr>
                <tr v-for="t in facultyObj" :key="t.transactionID">{{t.date}}-> ${{t.transactionAmount}} was paid to {{t.merchant}}<td>         
                </td>
                    </tr>
            </table>

        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "Transactions",
    computed: {
    ...mapGetters({
facultyID: "getFac",
facultyObj: "getFacultyDetails"
  })},
    async mounted(){
            this.$store.dispatch("faculty", {
          facultyID: this.facultyID,
          operation: "remainingFacultyFunds"
        });
    }
}
</script>

<style scoped>
    h2{
    margin-left: 14%;
  }
  table{
      width: 35%;
  }
  .dropdown{
        background-color: #04AA6D;
        color: white;
        padding: 5px 12px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        font-size: 15px;
        width:80%;
  }
  .centered{
    text-align: left;
    width: 80%;
    margin-left: 40%;
  }

</style>