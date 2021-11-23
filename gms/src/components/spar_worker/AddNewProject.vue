<template>
  <div>
    <div class="header">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/">Logout</router-link>
      </div>
      <h2>Add new project</h2>
    </div>

    <div class="centered" >
      <table>
        <tr>
          <td colspan=2>
            <p>Please fill in this form to add a new project</p>
          </td>
        </tr>
        <tr>
          <td>
            <label for="projectid"><b>Project ID</b></label>
          </td>
          <td>
            <input type="text" placeholder="Enter Project ID" name="projectid" id="projectid" required>
          </td>
        </tr>
         <tr>
          <td>
            <label for="title"><b>Project Title</b></label>
          </td>
          <td>
            <input type="text" placeholder="Enter Project Title" name="title" id="title" required>
          </td>
        </tr>
        <tr>
          <td>
            <label for="startDate"><b>Start Date</b></label>
          </td>
          <td>
            <input type="text" placeholder="Enter Start Date MM/DD/YYYY" name="startDate" id="startDate" required>
          </td>
        </tr>
        <tr>
          <td>
            <label for="endDate"><b>End Date</b></label>
          </td>
          <td>
            <input type="text" placeholder="Enter End Date MM/DD/YYYY" name="endDate" id="endDate" required>
          </td>
        </tr>
        <tr>
          <td>
            <label for="projStatus"><b>Status</b></label>
          </td>
          <td>
            <select name="projStatus" id="projStatus" class="dropdown">
                <option disabled selected value> ----- Select project status ----- </option>
                <option value="active">Active</option>
                <option value="closed">Closed</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <label for="investigatorid"><b>Investigator ID</b></label>
          </td>
          <td>
            <input type="text" placeholder="Enter Investigator ID" name="investigatorid" id="investigatorid" required>
          </td>
        </tr>
        <tr>
          <td>
            <label for="grantTitle"><b>Grant Title</b></label>
          </td>
          <td>
            <input type="text" placeholder="Enter Grant Title" name="grantTitle" id="grantTitle" required>
          </td>
        </tr>
         <tr>
          <td>
            <label for="sponsorid"><b>Sponsor ID</b></label>
          </td>
          <td>
            <input type="text" placeholder="Enter Sponsor ID" name="sponsorid" id="sponsorid" required>
          </td>
        </tr>
        <tr>
          <td>
            <label for="accIndex"><b>Account Index</b></label>
          </td>
          <td>
            <input type="text" placeholder="Enter Account Index" name="accIndex" id="accIndex" required>
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
    name: "AddNewProject",
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
