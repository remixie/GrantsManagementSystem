<template>
  <div id="app">
    <div class="container">
      <Login/>
   </div>
  </div>
</template>

<script>
import Login from '../components/Login.vue'

export default {
  name: 'Home',
  components: {
    Login
  }
}
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


