<template>
  <div>
    <div class="header">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <a href="#" v-on:click="logout()">Logout</a>
      </div>
      <h2>SPAR Admin Homepage</h2>
    </div>

    <div class="container">
      <div id="admin" class="vertical-menu">
        <router-link to="/addNewProfile">Add a new Profile</router-link>
        <router-link to="/updateProfile">Update Profile Password</router-link>
        <router-link to="/deleteProfile">Delete Profile</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Admin",
  methods: {
    logout() {
      this.$store.dispatch("doLogin", {
        username: "",
        password: "",
      });
    },
  },
};
</script>

<style scoped>
/* centered page titles */
h2 {
  margin-left: 15%;
}

.container {
  width: 400px;
  display: block;
}

#admin{
  width:200px;
}
</style>

