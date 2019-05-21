<template>
    <v-toolbar id="header" app>

        <v-layout align-center justify-space-around row fill-height>
            <div class="boxeshead">
                <span class="textheader">FORSIDE</span>
                <span class="textheader">TILMELDING</span>
                <span class="textheader">FORÆLDRE</span>
            </div>
            <div id="midbox">
                <div id="logo"></div>
            </div>
            <div class="boxeshead">
                <span class="textheader">FAQ</span>
                <span class="textheader">FORUM</span>
                <span class="textheader">KALENDER</span>
                <span class="textheader">LOGIN</span>
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
        font-family: $font1;
        color: map_get($colorz, color1);
        font-size: 32px;
        margin: 20px;
    }
</style>