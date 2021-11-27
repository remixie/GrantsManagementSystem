<template>
  <div>
    <div class="header">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/">Logout</router-link>
      </div>
      <h2>Update a profile</h2>
    </div>
    <div class="centered">
     <table>
        <tr>
          <td colspan=2>
            <p>Please select below details to update a profile</p>
          </td>
        </tr>
        <tr>
          <td>
            <label for="userid"><b>User ID</b></label>
          </td>
          <td>
            <select name="userid" id="userid" class="dropdown">
              <option disabled selected value> ----- Select username ----- </option>
              <option value="1">1</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <label for="psw"><b>Password</b></label>
          </td>
          <td>
            <input type="password" placeholder="Enter Password" name="psw" id="psw" required>
          </td>
        </tr>
        <tr/> <tr/> <tr/>
        <tr>
          <td colspan=2 style="padding-left:30%;">
            <button type="submit">Update</button>
          </td>
        </tr>
     </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "UpdateProfile",
  };
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
        width:85%;
  }
  .centered{
    text-align: left;
    width: 90%;
    margin-left: 35%;
  }
</style>