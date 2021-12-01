<template>
    <div>
        <div class="header">
            <div id="nav">
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link> 
            </div>
            <h2>View Available Funds</h2>
        </div>
        <div class="centered">

            <div>You have an available balance of ${{facultyObj[0].totalRemaining}}</div>
        
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "AvailableFunds",
        data: () => ({
  }),
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