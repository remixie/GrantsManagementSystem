<template>
    <div>
        <div class="header">
            <div id="nav">
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link> |
                <router-link to="/">Logout</router-link>
            </div>
            <h2>View all current sponsored projects</h2>
        </div>
        <div class="centered">
            <p>View list of all current sponsored projects where user is PI</p>
            <h3> Current Sponsored Projects List </h3>
            <ul>
                <li>Project A</li>
                <li>Project B</li>
                <li>Project C</li>
                <li>Project D</li>
                <li>Project E</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "CurrentSponsoredProjects",
}
</script>

<style scoped>
    h2{
    margin-left: 14%;
  }
  h3{
      margin-bottom:0px;
  }
  .centered{
    text-align: left;
    width: 35%;
    margin-left: 40%;
  }
  ul {
    list-style-type: none;
    padding: 0;
    border: 1px solid green;
    width:40%;
    margin-top:0px;
    }
    ul li {
    padding: 8px 16px;
    border-bottom: 1px solid green;
    color:black;
    }
    ul li:last-child {
        border-bottom: none
    }
</style>