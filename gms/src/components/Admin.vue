<template>
    <div>
        <div class="header">
            <div id="nav">
                    <router-link to="/admin">Home</router-link> |
                    <router-link to="/about">About</router-link> |
                    <router-link to="/" >Logout</router-link>
            </div>
            <h2>SPAR Admin Homepage </h2>
        </div>

        <div class="container">
            <div class="vertical-menu">
                <router-link to="#" class="active">Admin services</router-link>
                <router-link to="/addNewProfile">Add a new Profile</router-link>
                <router-link to="#">Update Profile</router-link>
                <router-link to="#">Delete Profile</router-link>
            </div>
        </div>
    </div>			
</template>

<style scoped>
    /* centered page titles */
    h2{
        margin-left: 14%;
    }

    .container {
        width:400px;
        display: block;
        }
</style>