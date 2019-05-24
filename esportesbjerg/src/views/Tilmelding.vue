<template>
    <v-container>
        <v-layout text-sx-center wrap>
            <v-flex xs12 sm12>
                <v-card id="outerbox">
                    <v-layout wrap>
                        <v-flex xs12 sm6>
                            <v-card class="tilbox">
                                <v-card-text text-sx-center center>
                                    <h1>Basis medlemskab:</h1>
                                    <div style="margin-top: 15px">
                        <span>
100 kr om året. <br> <br>
Som medlem får du nogle fordele samt du støtter lokalsporten.
Disse fordele er:
</span>
                                    </div>
                                    <ul>
                                        <li>Du kan få rabatter på indgang til vores arrangementer.</li>
                                        <li>adgang til både Discord og TeamSpeak server.</li>
                                        <li>Fordele på eSport Esbjergs spilservere.</li>
                                        <li>Tilbud hos vores samarbejdspartnere.</li>
                                    </ul>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                        <v-spacer></v-spacer>
                        <v-flex xs12 sm6>
                            <v-card class="tilbox">
                                <v-card-text>
                                    <h1>Deltager medlemskab:</h1>
                                    <div style="margin-top: 15px">
                        <span>
Dette medlemskab kræver koster også 100 kr om året for basismedlem oveni deltager prisen. <br> <br>
Den samlede pris includere træning med hold og i fællesskab med andre børn/unge med samme interesse.
</span>
                                    </div>
                                    <ul>
                                        <li>300 kr for en gang i ugen.</li>
                                        <li>500 kr for to gang i ugen.</li>
                                        <li>750 kr for fire gang i ugen.</li>
                                    </ul>
                                    <span>Træning foregår Mandag-Torsdag fra 18-20.</span>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs12 sm12>
                            <div id="centerbutton">

                                <v-dialog v-model="dialog" persistent max-width="290">
                                <template v-slot:activator="{ on }">
                                    <v-btn id="btnTilmeld" v-on="on">Tilmeld</v-btn>
                                </template>
                                <v-card>
                                    <v-card-title class="headline">Use Google's location service?</v-card-title>
                                    <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="green darken-1" flat @click="dialog = false">Disagree</v-btn>
                                        <v-btn color="green darken-1" flat @click="dialog = false">Agree</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
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
        name: "Adding",
        data () {
            return {
                dialog: false
            }
        }
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

    #btnTilmeld {
        background-color: map-get($colorz, color2);
        color: map-get($colorz, color1);
        width: 15%;
        font-family: $font1;
        font-size: 21px;
    }

    .tilbox {
        border: map-get($colorz, color2) solid 1px;
        box-shadow: $shadow;
        height: 450px;
        margin: 20px;
        padding: 15px;
    }

    #centerbutton {
        display: flex;
        justify-content: center;
    }

    ul {
        font-family: $font2;
        font-size: 18px;
    }

    li {
        margin: 20px;
    }

    span {
        font-family: $font2;
        font-size: 18px;
    }

    h1 {

        font-family: $font2;
    }
</style>