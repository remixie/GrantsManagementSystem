<template>
  <div>
    <div class="header">
            <div id="nav">
                <router-link to="/">Home</router-link> |  <!-- Comment for you (plz delete after reading) - Here routing needs to be added based on whether About was clicked from Login Page or user's homepage. Home button should redirect accordingly.-->
                <router-link to="/about">About</router-link> |
                <router-link to="/">Logout</router-link>
            </div>
            <h2>About SPAR GMS</h2>
    </div>
    
    <div class="container"> 
      <table>
        <tr> 
          <td> 
            <p> SPAR Grants Management System allows different users of the application to manage specific information related to grants such as: </p> 
          </td>
        </tr>

        <tr>
          <td> 
            <ul>
                <li>Maintaining all sponsored projects data</li>
                <li>Tracking project expenditures</li>
                <li>Generating reports on the total amount of funding the university receives in grants</li>
                <li>For tracking which faculty and departments bring in the most funding</li>
            </ul>  
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>

  /* centered page titles */
  h2{
      margin-left: 9%;
  }

  table{
    text-align: left;
    font-size: 20px;
    color:black;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif ;
  }

  p{
    margin-top:0%;
  }

  .container {
        width:800px;
    }

  /* display bullets on the same line */
  ul{
    list-style-position: inside;
  }
</style>
