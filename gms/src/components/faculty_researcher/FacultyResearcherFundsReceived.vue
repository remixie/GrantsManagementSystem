<template>
    <div>
        <div class="header">
            <div id="nav">
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link> |
                <router-link to="/">Logout</router-link>
            </div>
            <h2>View Total Grant Funding Received</h2>
        </div>
        <div class="centered">
            <table>
                <tr>
                    <td colspan=2>
                        <p>Select an option to view total amount of grant funding received</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="viewFundsFor"><b>View Total Grant Funding for </b></label>
                    </td>
                    <td>
                        <select name="viewFundsFor" id="viewFundsFor" class="dropdown">
                        <option disabled selected value> -- Select an option -- </option>
                        <option value="specificProject">a specific project</option>
                        <option value="fiscalYear">a given fiscal year</option>
                        <option value="allFundsReceived">all funds ever received</option>
                        </select>
                    </td>
                </tr>
                <tr id="projectRow" hidden>
                    <td>
                        <label for="viewFundsForProject"><b> Select Project to View Total Funding </b></label>
                    </td>
                    <td>
                        <select name="viewFundsForProject" id="viewFundsForProject" class="dropdown">
                        <option disabled selected value> -- Select project -- </option>
                        <option value="a">Project A</option>
                        <option value="b">Project B</option>
                        <option value="c">Project C</option>
                        </select>
                    </td>
                </tr>
                <tr/> <tr/> <tr/>
                <tr>
                    <td colspan=2 style="padding-left:30%;">
                        <button type="submit">View Total Funding</button>
                    </td>
                </tr>
            </table>

            <!-- Element to display total funding goes here --> 

        </div>
    </div>
</template>

<script>
export default {
    name: "FacultyResearcherFundsReceived",
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
        width:95%;
  }
  .centered{
    text-align: left;
    width: 35%;
    margin-left: 37%;
  }

</style>