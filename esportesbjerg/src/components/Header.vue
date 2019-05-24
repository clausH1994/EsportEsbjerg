<template>
    <v-toolbar id="header" app>
        <v-layout align-center justify-space-around row fill-height>
            <div class="boxeshead">

                <router-link to="/tilmelding" style="margin-left: 32%" class="textheader">TILMELDING</router-link>
                <router-link to="/forældre" class="textheader">FORÆLDRE</router-link>
            </div>
             <div id="midbox">
                 <router-link to="/" style="height: 110px; width: 100px; position: absolute"></router-link>
                  <div id="logo"></div>
            </div>
            <div class="boxeshead">
                <router-link to="/faq" class="textheader">FAQ</router-link>
                <router-link to="/kalender" class="textheader">KALENDER</router-link>
            </div>
        </v-layout>
    </v-toolbar>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="scss">
    #header
    {
        background-color: map-get($colorz, color2);
        height: 80px;
    }
    #logo
    {
        background-image: url("../assets/img/logoSVG.svg");
        height: 150px;
        width: 150px;
    }

    #midbox
    {
        height: 80px;
        width: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 60px;

    }

    .boxeshead
    {
        height: 80px;
        width: 700px;
        padding: 25px 5px 20px 10px;
    }

    .textheader
    {
        text-decoration: none;
        font-family: $font1;
        color: map_get($colorz, color1);
        font-size: 32px;
        margin: 20px;
    }
</style>