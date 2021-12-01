<template>
  <div>
    <div class="header">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <a href="#" v-on:click="logout()">Logout</a>
      </div>
      <h2>Faculty Researcher Homepage</h2>
    </div>

    <div class="container">
      <div class="vertical-menu">
        <router-link to="/listSponsoredProjects">View All Sponsored Projects</router-link>
        <router-link to="/listCurrentProjects">View Current Sponsored Projects</router-link>
        <router-link to="/allAwardedGrants">View All Awarded Grants</router-link>
        <router-link to="/allActiveGrants">View All Active Grants</router-link>
        <router-link to="/availableFunds">View Available Funds</router-link>
        <router-link to="/transactions">View Transactions</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FacultyResearcher",
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
</style>

