<template>
  <div>
    <div class="header">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <a href="#" v-on:click="logout()">Logout</a>
      </div>
      <h2>Department Chair Homepage</h2>
    </div>

    <div class="container">
      <div class="vertical-menu">
        <router-link to="/listDeptFaculties">List All Faculty with Active Projects</router-link>
        <router-link to="/totalFundingFaculty">View Total Grant Funding for a Faculty</router-link>
        <router-link to="/totalFundingDept">View Total Grant Funding for the Department</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeptChairs",
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

