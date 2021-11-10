<template>
  <div id="app">
    <div class="container">
      <Login v-if="answer == 'mismatch'" />
      <Admin v-if="answer == 'success'" />
    </div>
  </div>
</template>

<script>
import Login from "../components/Login.vue";
import Admin from "../components/Admin.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Login,
    Admin,
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
