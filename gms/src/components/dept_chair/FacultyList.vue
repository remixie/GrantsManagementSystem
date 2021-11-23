<template>
    <div>
        <div class="header">
            <div id="nav">
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link> |
                <router-link to="/">Logout</router-link>
            </div>
            <h2>List all faculties</h2>
        </div>
        <div class="centered">
            <table>
                <tr>
                <td colspan=2>
                    <p>View list of all faculties in the department with current(active) grant-funded projects</p>
                </td>
                </tr>
                <tr>
                <td>
                    <label for="deptid"><b>Department ID</b></label>
                </td>
                <td>
                    <select name="deptid" id="deptid" class="dropdown">
                    <option disabled selected value> -- Select Department ID -- </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    </select>
                </td>
                </tr>
                <tr/> <tr/> <tr/>
                <tr>
                <td colspan=2 style="padding-left:30%;">
                    <button type="submit">View Faculty List</button>
                </td>
                </tr>
            </table>

            <!-- Element to display faculty list goes here -->
            
        </div>
    </div>
</template>

<script>
export default {
    name: "FacultyList",
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