<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/layout/Header'

  export default {
    name: "apps",
    components: {
      Header,
    }
  }
</script>

<style>
/* CSS common to all pages have been placed here */

  /* default vue css */ 
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  /* css for Home, About and Logout links */ 
  #nav {
      /*padding: 10px;*/
      float: right;
      margin-right: 2%;
      padding-top:1px;
  }

  #nav a {
      font-weight: bold;
      font-size:21px;
      color: #2c3e50;
      text-decoration: none;
  }

  #nav a:hover {
    color:rgba(139, 30, 158, 0.699);
  }

  #nav a.router-link-exact-active {
      color:green;
  }
  /* css for Home, About and Logout links ends*/

  /* css for header(page title + links) of all pages except login */
  .header{
    padding-top:1px;
  }

  /* css for Menus on all home pages */
  .vertical-menu {
    width: 200px;
    display: inline-block;
  }

  .vertical-menu a {
    background-color: #eee;
    color: black;
    display: block;
    padding: 12px;
    text-decoration: none;
  }

  .vertical-menu a:hover {
    background-color: #ccc;
  }

 .vertical-menu a.active {
    background-color: #04AA6D;
    color: white;
    font-weight: bold;
    font-size: 20px;
  }
  /* css for Menus on all pages ends */

  /* css for all textboxes */
  input[type=text], input[type=password] {
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
        width:85%;
  }

  /* css for all buttons */
  button {
        background-color: #04AA6D;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        font-size: 20px;
  }

  /* Add a hover effect for buttons */
  button:hover {
        opacity: 0.8;
  }

  /* css for all labels */
  label{
        padding: 12px 20px;
        margin: 8px 0;
        font-size: 16px;
  }
</style>
