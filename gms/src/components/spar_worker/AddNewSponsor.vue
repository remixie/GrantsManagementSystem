<template>
  <div>
    <div class="header">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        
      </div>
      <h2>Add new sponsor</h2>
    </div>

    <div class="centered" >
      <table>
        <tr>
          <td colspan=2>
            <p>Please fill in this form to add a new sponsor</p>
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
            <label for="sponsorName"><b>Sponsor Name</b></label>
          </td>
          <td>
            <input type="text" placeholder="Enter Sponsor Name" name="sponsorName" id="sponsorName" required>
          </td>
        </tr>
        <tr>
          <td>
            <label for="acronym"><b>Acronym</b></label>
          </td>
          <td>
            <input type="text" placeholder="Enter Acronym" name="acronym" id="acronym" required>
          </td>
        </tr>
        <tr>
          <td>
            <label for="type"><b>Sponsor Type</b></label>
          </td>
          <td>
            <select name="type" id="type" class="dropdown">
                <option disabled selected value> ----- Select Sponsor Type ----- </option>
                <option value="federal">Federal</option>
                <option value="state">State</option>
                <option value="nonprofit">Non-Profit</option>
                <option value="Internal">Internal</option>
            </select>
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
    name: "AddNewSponsor",
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
