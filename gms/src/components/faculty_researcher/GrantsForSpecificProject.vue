<template>
    <div>
        <div class="header">
            <div id="nav">
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link> |
                <router-link to="/">Logout</router-link>
            </div>
            <h2>View Grants for Specific Project</h2>
        </div>
        <div class="centered">
            <table>
                <tr>
                    <td colspan=2>
                        <p>Select a project to view its total grant funding</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="fundsForProject"><b> Project Title</b></label>
                    </td>
                    <td>
                        <select name="fundsForProject" id="fundsForProject" class="dropdown">
                        <option disabled selected value> ----- Select a project ----- </option>
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
    name: "GrantsForSpecificProject",
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
        width:90%;
  }
  .centered{
    text-align: left;
    width: 80%;
    margin-left: 40%;
  }

</style>