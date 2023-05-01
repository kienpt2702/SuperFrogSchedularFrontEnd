<template>
    <p>We only service requests that are within 100 mile radius from Amon G. Carter Stadium</p>
    <div class="backholder">
        <RouterLink :to="{ name: 'home' }"><p class="backtext">Back to Home Page</p></RouterLink>
    </div>
</template>

<script>
    import { RouterLink } from 'vue-router';
</script>

<style>
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