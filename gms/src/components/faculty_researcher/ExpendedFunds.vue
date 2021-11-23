<template>
    <div>
        <div class="header">
            <div id="nav">
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link> |
                <router-link to="/">Logout</router-link>
            </div>
            <h2>View Expended Funds</h2>
        </div>
        <div class="centered">
            <table>
                <tr>
                    <td colspan=2>
                        <p>View amount of funds spent to date from active grant account</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="grantAcc"><b> Grant Account</b></label>
                    </td>
                    <td>
                        <select name="grantAcc" id="grantAcc" class="dropdown">
                        <option disabled selected value> ----- Select account ----- </option>
                        <option value="a">Grant Account</option>
                        </select>
                    </td>
                </tr>
                <tr/> <tr/> <tr/>
                <tr>
                    <td colspan=2 style="padding-left:30%;">
                        <button type="submit">View Funds</button>
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