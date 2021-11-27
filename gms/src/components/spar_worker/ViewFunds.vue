<template>
    <div>
        <div class="header">
            <div id="nav">
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link> 
            </div>
            <h2>View Total Grant Funds</h2>
        </div>
        <div class="centered">
            <table>
                <tr>
                    <td colspan=2>
                        <p>Select an option to view total amount of grant funds</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="viewGrantFundsFor"><b>View Total Grant Funds for </b></label>
                    </td>
                    <td>
                        <select name="viewGrantFundsFor" id="viewGrantFundsFor" class="dropdown">
                        <option disabled selected value> -- Select an option -- </option>
                        <option value="currFiscalYear">a given fiscal year</option>
                        <option value="totalFundsReceived">all funds ever received</option>
                        </select>
                    </td>
                </tr>
                <tr/> <tr/> <tr/>
                <tr>
                    <td colspan=2 style="padding-left:30%;">
                        <button type="submit">View Total Funds</button>
                    </td>
                </tr>
            </table>

            <!-- Element to display total funds goes here --> 

        </div>
    </div>
</template>

<script>
export default {
    name: "ViewFunds",
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
        width:95%;
  }
  .centered{
    text-align: left;
    width: 80%;
    margin-left: 39%;
  }

</style>