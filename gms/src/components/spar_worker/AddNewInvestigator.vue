<template>
  <div>
    <div class="header">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        
      </div>
      <h2>Add new investigator</h2>
    </div>

    <div class="centered" >
      <table>
        <tr>
          <td colspan=2>
            <p>Please fill in this form to add a new investigator</p>
          </td>
        </tr>
        <tr>
          <td>
            <label for="investid"><b>Investigator ID</b></label>
          </td>
          <td>
            <input type="text" placeholder="Enter Investigator ID" name="investid" id="investid" required>
          </td>
        </tr>
         <tr>
          <td>
            <label for="firstName"><b>First Name</b></label>
          </td>
          <td>
            <input type="text" placeholder="Enter Investigator's First Name" name="firstName" id="firstName" required>
          </td>
        </tr>
        <tr>
          <td>
            <label for="lastName"><b>Last Name</b></label>
          </td>
          <td>
            <input type="text" placeholder="Enter Investigator's Last Name" name="lastName" id="lastName" required>
          </td>
        </tr>
        <tr>
          <td>
            <label for="email"><b>Email</b></label>
          </td>
          <td>
            <input type="text" placeholder="Enter Investigator's Email" name="email" id="email" required>
          </td>
        </tr>
        <tr>
          <td>
            <label for="deptid"><b>Department ID</b></label>
          </td>
          <td>
            <input type="text" placeholder="Enter Investigator's Department ID" name="deptid" id="deptid" required>
          </td>
        </tr>
        <tr/> <tr/> <tr/>
        <tr>
          <td colspan=2 style="text-align:center;">
            <button type="submit">Submit</button>
          </td>
        </tr>
    </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AddNewInvestigator",
  };
</script>

<style scoped>
  h2{
    margin-left: 15%;
  }
  table{
    width:35%;
  }
  .dropdown{
        background-color: #04AA6D;
        color: white;
        padding: 5px 12px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        font-size: 15px;
        width:85%;
  }
  .centered{
    text-align: left;
    width: 90%;
    margin-left: 36%;
  }
</style>
