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
                        <p>View Transactions</p>
                    </td>
                </tr>
            </table>
            

            <!-- Element to display total remaining funds goes here --> 

        </div>
    </div>
</template>

<script>
export default {
    name: "ExpendedFunds",
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