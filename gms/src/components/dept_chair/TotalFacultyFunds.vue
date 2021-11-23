<template>
    <div>
        <div class="header">
            <div id="nav">
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link> |
                <router-link to="/">Logout</router-link>
            </div>
            <h2>View Total Grant Funding for a Faculty</h2>
        </div>
        <div class="centered">
            <table>
                <tr>
                <td colspan=2>
                    <p>Please select a faculty to view total amount of grant funding received by that faculty</p>
                </td>
                </tr>
                <tr>
                <td>
                    <label for="facultyName"><b>Faculty</b></label>
                </td>
                <td>
                    <select name="facultyName" id="facultyName" class="dropdown">
                    <option disabled selected value> -- Select Faculty -- </option>
                    <option value="a">A</option>
                    <option value="b">B</option>
                    <option value="c">C</option>
                    <option value="d">D</option>
                    </select>
                </td>
                </tr>
                <tr/> <tr/> <tr/>
                <tr>
                <td colspan=2 style="padding-left:30%;">
                    <button type="submit">View Funding</button>
                </td>
                </tr>
            </table>

            <!-- Element to display faculty funcding goes here --> 

        </div>
    </div>
</template>

<script>
export default {
    name: "TotalFacultyFunds",
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