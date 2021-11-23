<template>
  <div>
    <div class="header">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <a href="#" v-on:click="logout()">Logout</a>
      </div>
      <h2>SPAR Worker Homepage</h2>
    </div>

    <div class="container">
      <div id="view" class="vertical-menu">
        <router-link to="/listAllGrants">View Grants</router-link>
        <router-link to="/listAllProjects">View Projects</router-link>
        <router-link to="/listAllFaculties">View Faculties</router-link>
        <router-link to="/totalGrantFunds">View Funds</router-link>
      </div>

      <div id="add" class="vertical-menu">
        <router-link to="/addNewProject">Add New Project</router-link>
        <router-link to="/addNewSponsor">Add New Sponsor</router-link>
        <router-link to="/addNewInvestigator">Add New Investigator</router-link>
      </div>

      <div id="modify" class="vertical-menu">
        <router-link to="/updateProject">Update Project Status</router-link>
        <router-link to="/deleteProject">Delete a Project</router-link>
      </div>

      <div id=clear> </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SparWorker",
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
  width: 800px;
  display: block;
}

#view {
    width: 200px;
    float: left;
}
#add {
    width: 200px;
    float: left;
    margin-left: 60px;
}
#modify {
    width: 200px;
    float: left;
    margin-left: 60px;
}

/* To clear float property for future elemnts being added to container div */
#clear {
    clear: both;
}
</style>

