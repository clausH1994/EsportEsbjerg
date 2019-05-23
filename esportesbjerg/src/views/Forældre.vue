<template>
    <v-container>
        <v-layout text-sx-center wrap>
            <v-flex xs12 sm12>
                <v-card id="outerbox">
                    <v-flex xs12 sm3>
                        <v-card id="img1" class="smallbox box"></v-card>
                        <v-card id="img2" class="smallbox box"></v-card>
                    </v-flex>
                    <v-flex xs12 sm6>
                        <v-card class="bigbox box"></v-card>
                    </v-flex>
                    <v-flex xs12 sm3>
                        <v-card id="img3" class="smallbox box"></v-card>
                        <v-card id="img4" class="smallbox box"></v-card>
                    </v-flex>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Forum"
    }
</script>

<style lang="scss" scoped>
    #outerbox {
        border: map-get($colorz, color2) solid 1px;
        height: 600px;
        margin: 40px 0 20px 0;
        padding: 30px;
        display: flex;
    }

    .smallbox {
        height: 245px;
        background-size: cover;
    }

    .bigbox
    {
        height: 500px;
    }

    .box {
        border: map-get($colorz, color2) solid 1px;
        box-shadow: map_get($colorz, color2);
        margin: 10px;
    }
    #img1
    {

    }
    #img2
    {

    }
    #img3
    {

    }
    #img4
    {

    }
</style>