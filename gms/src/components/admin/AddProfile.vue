<template>
  <div>
    <div class="header">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <h2>Add a new profile</h2>
    </div>

    <div class="centered">
      <table>
        <tr>
          <td colspan="2">
            <p>Please fill in this form to add a new profile</p>
          </td>
        </tr>
        <tr>
          <td>
            <label for="roleid"><b>Role</b></label>
          </td>
          <td>
            <select name="roleid" v-model="roleid" class="dropdown">
              <option disabled selected value> ----- Select Role ----- </option>
              <option value="1">Admin</option>
              <option value="2">Chair</option>
              <option value="3">Faculty Researcher</option>
              <option value="4">Worker</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <label for="username"><b>Username</b></label>
          </td>
          <td>
            <input
              type="text"
              v-model="username"
              placeholder="Enter Username"
            />
          </td>
        </tr>
        <tr>
          <td>
            <label for="psw"><b>Password</b></label>
          </td>
          <td>
            <input
              type="password"
              v-model="password"
              placeholder="Enter Password"
            />
          </td>
        </tr>
        <tr />
        <tr />
        <tr />
        <tr>
          <td colspan="2" style="text-align: center">
            <button type="submit" @click="submit('')">Submit</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddProfile",data: () => ({
    username: "",
    password: "",
    roleid: ""
  }),
   methods: {
  submit() {
      if (this.username && this.password && this.roleid.length > 0) {
        this.$store.dispatch("profiles", {
          username: this.username,
          password: this.password,
          roleid: this.roleid,
          operation: "add"
        });
        this.$router.push('/');
      } else {
        alert("Please fill out all fields.");
      }
    },
   }
};
</script>

<style scoped>

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
h2 {
  margin-left: 15%;
}
table {
  width: 35%;
}

.centered {
  text-align: left;
  width: 90%;
  margin-left: 36%;
}
</style>
