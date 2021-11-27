<template>
  <div id="login">
    <div class="header">
      <div id="nav">
        <router-link to="/about">About</router-link>
      </div>
      <h3>Please login to continue</h3>
    </div>

    <div class="container">
      <table align="center">
        <tr>
          <td style="width: 1%">
            <label for="uname"><b>Username</b></label>
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
          <td style="width: 1%">
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

        <tr></tr>
        <tr />
        <tr></tr>
        <tr />

        <tr>
          <td></td>
          <td class="left">
            <button type="submit" @click="onLogin()">Login</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    username: "",
    password: "",
  }),
  methods: {
    onLogin() {
      if (this.username && this.password) {
        this.$store.dispatch("doLogin", {
          username: this.username,
          password: this.password,
        });
      } else {
        alert("Please enter username and/or password");
      }
    },
  },
};
</script>

<style scoped>
.container {
  padding: 16px;
  width: 400px;
}

/* Align login button */
.left {
  text-align: left;
}
</style>
