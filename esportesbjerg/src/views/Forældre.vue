<template>
    <v-container>
        <v-layout text-sx-center wrap>
            <v-card id="outerbox">
                <v-layout text-sx-center wrap>
                    <v-flex xs12 sm3>
                        <v-card id="img1" class="smallbox box"></v-card>
                        <v-card id="img2" class="smallbox box"></v-card>
                    </v-flex>
                    <v-flex xs12 sm6>
                        <v-card class="bigbox box">
                            <h1>Forældre</h1>
                            <div class="spacing">
                            <span>E-Sport bliver mere og mere udbredt rundt omkring i verden, og vi i e-Sport Esbjerg vil forsøge at sætte esbjerg på kortet.
E-Sport i Danmark er i højvækst og ud fra statistikker kan det ses at antallet af E-Sportsforeninger er steget med 130,43 % fra 2017 til 2018, 79 i 2017 til 214 i 2018.


Træningstid: Mandag til Torsdag 18-20
Prisen for at deltage i træning kræver at der er lavet et basis medlemskab på 100 kr
derefter vil det koste:
</span>
                            </div>
                            <ul>
                                <li>300 kr for en dags træning i ugen for et halvt år.</li>
                                <li>500 kr for to dages træning i ugen for et halvt år.</li>
                                <li>750 kr for fire dages træning i ugen for et halvt år.</li>
                            </ul>
                            <div class="spacing">
                            <span>
                                eSport Esbjerg er åben for at starte hold op inde for alle spil, men lige nu har vi kun hold i CS:GO og Fortnite. <br>

Alt udstyr bliver stillet til rådighed ved tilmelding af medlem dog anbefaler vi at dit barn har dit eget udstyr med. Der vil blive holdt en sober tone under alle lektioner da vi lægger stor vægt på at der skal være plads til alle i vores forening. Dette kan vi sikre da vi har en pædagog til rådighed hvis der skulle opstå nogle former for konflikter.

                            </span>
                            </div>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 sm3>
                        <v-card id="img3" class="smallbox box"></v-card>
                        <v-card id="img4" class="smallbox box"></v-card>
                    </v-flex>
                </v-layout>
            </v-card>
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
        margin: 40px 0 20px 0;
        padding: 30px;
    }

    .smallbox {
        height: 255px;
        background-size: cover;
    }

    .bigbox {

        padding: 15px;
        font-family: $font2;
        font-size: 16px;
    }

    .spacing {
        margin: 8px;
    }

    .box {
        border: map-get($colorz, color2) solid 1px;
        box-shadow: $shadow;
        margin: 10px;
    }


    #img1 {
        background-image: url("../assets/img/gaming1.png");
    }

    #img2 {
        background-image: url("../assets/img/træner.png");
    }

    #img3 {
        background-image: url("../assets/img/drengløb.png");
    }

    #img4 {
        background-image: url("../assets/img/gaming2.png");
    }
</style>