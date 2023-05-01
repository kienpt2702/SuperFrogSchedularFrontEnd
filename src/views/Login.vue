<script>
import { RouterLink } from 'vue-router';
import axios from 'axios'
import {login} from '../utils/userLoginUtils.js'
// import { eventBus } from './eventBus.js';
export default {
    data() {
        return {
            email: '',
            password: '',
            error: '',
        };
    },
    methods: {
        async handleSubmit() {
            // Make an HTTP request to the authentication service to validate the user's credentials
            // For example:
            // axios.post('/login', { username: this.username, password: this.password })
            //   .then(response => {
            //     // If authentication succeeds, store the token in local storage or a cookie
            //     localStorage.setItem('token', response.data.token);
            //     // Redirect the user to the home page
            //     this.$router.push('/home');
            //   })
            //   .catch(error => {
            //     // If authentication fails, display an error message to the user
            //     this.error = 'Invalid username or password';
            //   });

            try {
                const user = await login({
                    username: this.email,
                    password: this.password
                })
            } catch(err) {
                console.log(err);
            }
        }
    }
}
</script>

<template>
    <div class="mainlogin alignform">
        <div style="">
            <form class="form-input">
                <div class="imageholder maindiv">
                    <img src="./SuperFrogforLoginPage.jpg" alt="Image" class="image">
                </div>
            
                <div class="maindiv">
                    <label for="email">Email</label>
                        <el-input type="email" name="email" id="email" placeholder="Input your Email" v-model="email" required></el-input>
                    
                </div>

                <div class="maindiv">
                    <label for="password">Password</label>
                        <el-input type="password" name="password" id="password" placeholder="Input your Password" v-model="password" required></el-input>
                </div>

                <div class="maindiv">
                    <el-button type="primary" @click="handleSubmit">Submit</el-button>
                </div>
            </form>
            <p v-if="error">{{ error }}</p>

            <div class="backholder">
                <RouterLink :to="{ name: 'home' }"><p class="backtext">Back to Home Page</p></RouterLink>
            </div>
        </div>


    </div>

</template>

<style scoped>
    .mainlogin {
        background-image: url(./superforg_Stadium.png);
        width: 100%;
        height: 1000px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .alignform {
        display: flex; 
        justify-content: left; 
        padding-left:10%; 
        padding-top: 5%;
    }
    .maindiv {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .form-input {
        padding: 15px;
        color: white;
        border-radius: 10%;

        backdrop-filter: blur(5px);
    }
    .imageholder {
        display: flex;
        justify-content: center;
    }
    .image {
        height: 150px;
        width: 150px;
        border-radius: 200px;
        padding: 1px;
        border: 3px solid purple;
        
    }
    .btn {
        display: flex;
        justify-content: center;
    }
    
    .backtext {
        font-size: 15px;
        font-weight: 200;
    }
    .backholder {
        border: 1.5px solid blue;
        border-radius: 15px;
        background-color: ghostwhite;
        display: grid;
        align-items: center;
        text-align: center;
        width: 170px;
        height: 50px;
        margin: 30px;
    }

    .backholder:hover {
        border: 1.5px solid orangered;
        background-color: blueviolet;   
        font-weight: 700;
    }
</style>
