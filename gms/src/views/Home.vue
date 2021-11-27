<template>
  <div id="app">
    <div class="container">
      <Login v-if="answer == 'mismatch'" />
      <Admin v-if="answer == '1'" />
      <DeptChair v-if="answer == '2'" />
      <FacultyResearcher v-if="answer == '3'" />
      <SparWorker v-if="answer == '4'" />
    </div>
  </div>
</template>

<script>
import Login from "../components/Login.vue";
import Admin from "../components/Admin.vue";
import DeptChair from "../components/DeptChair.vue";
import FacultyResearcher from "../components/FacultyResearcher.vue";
import SparWorker from "../components/SparWorker.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Login,
    Admin,
    DeptChair,
    FacultyResearcher,
    SparWorker,
  },
  computed: {
    ...mapGetters(["answer"]),
  },
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial", Arial, sans-serif;
  line-height: 1.6;
  background: #aef5d1;
}
.container {
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
