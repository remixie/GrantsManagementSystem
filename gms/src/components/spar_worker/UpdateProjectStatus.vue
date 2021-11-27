<template>
  <div>
    <div class="header">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        
      </div>
      <h2>Update project status</h2>
    </div>
    <div class="centered">
     <table>
        <tr>
          <td colspan=2>
            <p>Please select below details to update a project's status</p>
          </td>
        </tr>
        <tr>
          <td>
            <label for="projectid"><b>Project ID</b></label>
          </td>
          <td>
            <select name="projectid" id="projectid" class="dropdown">
              <option disabled selected value> ----- Select Project ID ----- </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <label for="projectTitle"><b>Project Title</b></label>
          </td>
          <td>
            <select name="projectTitle" id="projectTitle" class="dropdown">
              <option disabled selected value> ----- Select Project Title ----- </option>
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
              <option value="d">D</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <label for="projStatus"><b>Set Project Status</b></label>
          </td>
          <td>
            <select name="projStatus" id="projStatus" class="dropdown">
                <option disabled selected value> ----- Select project status ----- </option>
                <option value="active">Active</option>
                <option value="closed">Closed</option>
            </select>
          </td>
        </tr>
        <tr/> <tr/> <tr/>
        <tr>
          <td colspan=2 style="padding-left:30%;">
            <button type="submit">Update</button>
          </td>
        </tr>
     </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "UpdateProjectStatus",
  };
</script>

<style scoped>
  h2{
    margin-left: 14%;
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
    margin-left: 35%;
  }
</style>