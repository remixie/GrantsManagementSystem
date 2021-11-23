<template>
  <div>
    <div class="header">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/">Logout</router-link>
      </div>
      <h2>Add a new profile</h2>
    </div>

    <div class="centered" >
      <table>
        <tr>
          <td colspan=2>
            <p>Please fill in this form to add a new profile</p>
          </td>
        </tr>
        <tr>
          <td>
            <label for="userid"><b>User ID</b></label>
          </td>
          <td>
            <input type="text" placeholder="Enter User ID" name="userid" id="userid" required>
          </td>
        </tr>
         <tr>
          <td>
            <label for="username"><b>Username</b></label>
          </td>
          <td>
            <input type="text" placeholder="Enter Username" name="username" id="username" required>
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
        <tr>
          <td>
            <label for="roleid"><b>Role ID</b></label>
          </td>
          <td>
            <input type="text" placeholder="Enter Role ID" name="roleid" id="roleid" required>
          </td>
        </tr>
        <tr/> <tr/> <tr/>
        <tr>
          <td colspan=2 style="text-align:center;">
            <button type="submit">Submit</button>
          </td>
        </tr>
    </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AddProfile",
  };
</script>

<style scoped>
  h2{
    margin-left: 15%;
  }
  table{
    width:35%;
  }

  .centered{
    text-align: left;
    width: 90%;
    margin-left: 36%;
  }
</style>
