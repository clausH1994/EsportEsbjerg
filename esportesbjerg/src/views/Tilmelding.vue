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
                                        <li>300 kr for en gang i ugen. 1. dags træning.</li>
                                        <li>500 kr for to gang i ugen. 2. dages træning.</li>
                                        <li>750 kr for fire gang i ugen. 4. dages træning.</li>
                                    </ul>
                                    <span>Træning foregår Mandag-Torsdag fra 18-20. </span>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs12 sm12>
                            <div id="centerbutton">

                                <v-dialog v-model="dialog" persistent max-width="600">
                                    <template v-slot:activator="{ on }">
                                        <v-btn id="btnTilmeld" v-on="on">Tilmeld</v-btn>
                                    </template>
                                    <v-card id="tilmeldbox1">
                                        <v-card id="tilmeldbox2">
                                            <v-form>
                                                <v-container>
                                                    <v-layout text-sx-center wrap>
                                                        <v-flex class="flexpad" xs12 sm6>
                                                        <p>Nickname</p>
                                                        </v-flex>
                                                        <v-flex class="flexpad" xs12 sm6>
                                                        <p>Medlemskab</p>
                                                        </v-flex>
                                                        <v-flex class="flexpad" xs12 sm6>
                                                        <v-text-field solo placeholder="Nickname" class="fields"></v-text-field>
                                                        </v-flex>
                                                        <v-flex class="flexpad" xs12 sm6>
                                                        <v-overflow-btn
                                                                class="drop"
                                                                :items="dropdown_font"
                                                                label="Vælg Medlemskab"
                                                                target="#dropdown-example"
                                                        ></v-overflow-btn>
                                                        </v-flex>
                                                        <v-flex class="flexpad" xs12 sm6>
                                                            <p>Fulde Navn</p>
                                                        </v-flex>
                                                        <v-flex class="flexpad" xs12 sm6>
                                                            <p>Fødselsdag</p>
                                                        </v-flex>
                                                        <v-flex class="flexpad" xs12 sm6>
                                                            <v-text-field solo placeholder="Fulde Navn" class="fields"></v-text-field>
                                                        </v-flex>
                                                        <v-flex class="flexpad" xs12 sm6>
                                                        <v-menu
                                                                ref="menu"
                                                                v-model="menu"
                                                                :close-on-content-click="false"
                                                                :nudge-right="40"
                                                                lazy
                                                                transition="scale-transition"
                                                                offset-y
                                                                full-width
                                                                min-width="290px"
                                                        ><template v-slot:activator="{ on }">
                                                            <v-text-field
                                                                    v-model="date"
                                                                    solo
                                                                    placeholder="Fødselsdag"
                                                                    readonly
                                                                    v-on="on"
                                                            ></v-text-field>
                                                        </template>
                                                            <v-date-picker
                                                                    ref="picker"
                                                                    v-model="date"
                                                                    :max="new Date().toISOString().substr(0, 10)"
                                                                    min="1950-01-01"
                                                                    @change="save"
                                                            ></v-date-picker>
                                                        </v-menu>
                                                        </v-flex>
                                                        <v-flex  class="flexpad" xs12 sm6>
                                                            <p>Adresse</p>
                                                        </v-flex>
                                                        <v-flex  class="flexpad" xs12 sm6>
                                                            <p>Email</p>
                                                        </v-flex>
                                                        <v-flex class="flexpad" xs12 sm6>
                                                            <v-text-field solo placeholder="Addresse" class="fields"></v-text-field>
                                                        </v-flex>
                                                        <v-flex class="flexpad" xs12 sm6>
                                                            <v-text-field solo placeholder="Email" class="fields"></v-text-field>
                                                        </v-flex>
                                                    </v-layout>
                                                </v-container>
                                            </v-form>
                                            <v-card-actions>
                                                <v-flex sx6 sm6 offset-sm2>
                                                <v-btn class="btnstyle" flat @click="dialog = false">Anullere
                                                </v-btn>
                                                </v-flex>
                                                <v-flex xs12 sm6 offset sm2>
                                                <v-btn class="btnstyle" flat @click="dialog = false">Send
                                                    tilmelding
                                                </v-btn>
                                                </v-flex>
                                            </v-card-actions>
                                        </v-card>
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
        data() {
            return {
                dialog: false,
                dropdown_font: ['Basis medlemskab', '1. dags træning', '2. dages træning', '4. dages træning' ],
                date: null,
                menu: false
            }
        },
        watch: {
            menu (val) {
                val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
            }
        },
        methods: {
            save (date) {
                this.$refs.menu.save(date)
            }
        }
    }
</script>

<style lang="scss" scoped>
    #outerbox {
        border: map-get($colorz, color2) solid 1px;
        margin: 40px 0 20px 0;
        padding: 20px;
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
        margin: 20px;
        padding: 15px;
        height: 450px;
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

    #tilmeldbox1 {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        border: map-get($colorz, color2) solid 1px;
    }

    #tilmeldbox2 {
        border: map-get($colorz, color2) solid 1px;
        box-shadow: $shadow;
        width: 550px;
        padding: 30px;
    }

    p {
        font-family: $font2;
        font-size: 20px;
        margin: 0 5px 0 5px;
        padding: 0;
    }

    .fields {
        margin: 0 5px;
        font-family: $font2;
    }

    .drop
    {
        margin: 0 5px;
        font-family: $font2;

    }
    .flexpad
    {
        padding: 0 !important;
    }

    .btnstyle
    {
        background-color: map-get($colorz, color2);
        color: map-get($colorz, color1);
        font-family: $font2;
        box-shadow: $shadow;
        margin: 10px;
    }

    @media only screen and (max-width: 1270px) {
        .tilbox {

            height: 600px;
        }
    }
    @media only screen and (max-width: 850px) {
        .tilbox {

            height: auto;
        }
    }
</style>