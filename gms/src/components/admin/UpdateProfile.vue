<template>
    <div>
        <div class="header">
            <div id="nav">
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link> |
                <router-link to="/">Logout</router-link>
            </div>
            <h2>Update a profile</h2>
        </div>
        <div class="centered">
            <table>
                <tr>
                <td colspan=2>
                    <p>Please select below details to update a profile</p>
                </td>
                </tr>
                <tr>
                <td>
                    <label for="userid"><b>User ID</b></label>
                </td>
                <td>
                    <select name="userid" v-model="selectedUsername" class="dropdown">
                    <option disabled selected value> ----- Select username ----- </option>
                    <option v-for="username in usernames" :key="username" :value="username">{{username}}</option>
                    </select>
                </td>
                </tr>
                <tr>
          <td>
            <label for="psw"><b>Password</b></label>
          </td>
          <td>
            <input
              type="password"
              v-model="password"
              placeholder="Enter Password"
            />
          </td>
        </tr>
                <tr/> <tr/> <tr/>
                <tr>
                <td colspan=2 style="padding-left:23%;">
                    <button type="submit" @click="submit()">Update</button>
                </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "UpdateProfile",
    data: () => ({
    usernames: "",
    selectedUsername: "",
    password: ""
  }),
  methods:{
      submit(){
          this.$store.dispatch("profiles", {
          username: this.selectedUsername,
          password: this.password,
          operation: "update"
        });
        this.$router.push('/');
      }
  },
    async mounted() {
        const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    let params = new URLSearchParams();
    params.append("operation", "get");
          await axios.post(
      "http://localhost:3000/profiles",
      params,
      config
    ).then(result => {
        this.usernames = result.data;
    });
        }
}
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
        width:42%;
  }
  .centered{
    text-align: left;
    width: 90%;
    margin-left: 40%;
  }

</style>