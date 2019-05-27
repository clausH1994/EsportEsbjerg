<template>
    <v-toolbar id="header" app>
        <v-layout align-center justify-space-around row fill-height>
            <div class="boxeshead reverseflex" >

                <router-link to="/tilmelding" class="textheader hidden-sm-and-down">TILMELDING</router-link>
                <router-link to="/forældre" class="textheader hidden-sm-and-down">FORÆLDRE</router-link>
            </div>
            <div id="midbox">
                <router-link to="/" style="height: 110px; width: 100px; position: absolute"></router-link>
                <div id="logo"></div>
            </div>
            <div class="boxeshead  hidden-sm-and-down">
                <router-link to="/faq" class="textheader hidden-sm-and-down" >FAQ</router-link>
                <router-link to="/kalender" class="textheader hidden-sm-and-down">KALENDER</router-link>
            </div>
            <div class="boxeshead hidden-md-and-up reverseflex">
            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn style="background-color: black" v-on="on" class="hidden-md-and-up"><i style="color: white" class="fas fa-align-justify"></i></v-btn>
                </template>
                <v-list id="list">
                    <v-list-tile><router-link to="/tilmelding" class="textheader">TILMELDING</router-link></v-list-tile>
                    <v-list-tile > <router-link to="/forældre" class="textheader">FORÆLDRE</router-link></v-list-tile>
                    <v-list-tile >  <router-link to="/faq" class="textheader">FAQ</router-link></v-list-tile>
                    <v-list-tile > <router-link to="/kalender" class="textheader">KALENDER</router-link></v-list-tile>
                </v-list>
            </v-menu>
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
    #header {
        background-color: map-get($colorz, color2);
        height: 80px;
    }

    #logo {
        background-image: url("../assets/img/logoSVG.svg");
        height: 150px;
        width: 150px;
    }

    #midbox {
        height: 80px;
        width: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 60px;

    }

    .reverseflex {
        display: flex;
        flex-direction: row-reverse;
        margin-bottom: 39px;
    }

    .boxeshead {
        height: 80px;
        width: 700px;
        padding: 25px 5px 20px 10px;
    }


    .textheader {
        text-decoration: none;
        font-family: $font1;
        color: map_get($colorz, color1);
        font-size: 32px;
        margin: 20px;
    }
    #list
    {
        background-color: map_get($colorz, color2);
    }
    i{
        font-size: 36px;
        margin:20px 0;
    }
</style>