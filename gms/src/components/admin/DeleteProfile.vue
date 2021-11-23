<template>
    <div>
        <div class="header">
            <div id="nav">
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link> |
                <router-link to="/">Logout</router-link>
            </div>
            <h2>Delete a profile</h2>
        </div>
        <div class="centered">
            <table>
                <tr>
                <td colspan=2>
                    <p>Please select below details to delete a profile</p>
                </td>
                </tr>
                <tr>
                <td>
                    <label for="userid"><b>User ID</b></label>
                </td>
                <td>
                    <select name="userid" id="userid" class="dropdown">
                    <option disabled selected value> ----- Select User ID ----- </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    </select>
                </td>
                </tr>
                <tr>
                <td>
                    <label for="roleid"><b>Role ID</b></label>
                </td>
                 <td>
                    <select name="roleid" id="roleid" class="dropdown">
                    <option disabled selected value> ----- Select Role ID ----- </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    </select>
                </td>
                </tr>
                <tr/> <tr/> <tr/>
                <tr>
                <td colspan=2 style="padding-left:23%;">
                    <button type="submit">Delete</button>
                </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "DeleteProfile",
}
</script>

<style scoped>
    h2{
    margin-left: 14%;
  }
  table{
    width:35%;
  }
  .dropdown{
        background-color: #04AA6D;
        color: white;
        padding: 5px 12px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        font-size: 15px;
        width:42%;
  }
  .centered{
    text-align: left;
    width: 90%;
    margin-left: 40%;
  }

</style>