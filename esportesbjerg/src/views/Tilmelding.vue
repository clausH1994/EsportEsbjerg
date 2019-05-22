<template>
    <v-container  >
        <v-layout text-sx-center wrap>
            <v-flex xs12 sm12>
            <v-card id="outerbox">
                <v-layout wrap>
                <v-flex xs12 sm6>
                    <v-card class="tilbox">
                        <v-card-text text-sx-center center>
                        <h1>Bliv Sponsor</h1>
                        <span>Bliv sponsor af eSport Esbjerg for kun 100 kr om året.
Som sponsor får du nogle fordele samt du støtter lokalsporten.
Disse fordele er:
</span>
                            <ul>
                                <li>Du kan få rabatter på indgang til vores arrangementer.</li>
                                <li>adgang til både Discord og TeamSpeak server.</li>
                                <li>Fordele på eSport Esbjergs spilservere. </li>
                                <li>Tilbud hos vores samarbejdspartnere.</li>
                            </ul>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex xs12 sm6>
                    <v-card class="tilbox"></v-card>
                </v-flex>
                    <v-flex xs12 sm12>
                        <div id="centerbutton">
                <v-btn id="btnTilmeld">Tilmeld</v-btn>
                        </div>
                    </v-flex>
                </v-layout>
            </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Adding"
    }
</script>

<style lang="scss" scoped>
    #outerbox
    {
        border: map-get($colorz, color2) solid 1px;
        height: 600px;
        margin: 40px 0 20px 0;
        padding: 30px;
        display: flex;
    }
    #btnTilmeld
    {
        background-color: map-get($colorz,color2);
        color: map-get($colorz,color1);
        width: 15%;
        font-family: $font1;
        font-size: 21px;
    }
    .tilbox
    {
        border: map-get($colorz, color2) solid 1px;
        box-shadow: $shadow;
        height: 450px;
        margin:20px;
        padding:15px;
    }
    #centerbutton
    {
        display: flex;
        justify-content: center;
    }
</style>