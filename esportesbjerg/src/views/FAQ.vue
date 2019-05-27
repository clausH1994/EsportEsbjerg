<template>
    <v-container>
        <v-layout text-sx-center wrap>
            <v-flex xs12 sm12>
                <v-card id="outbox">

                    <v-flex xs12 sm12>
                        <h1 id="faqTitle">FAQ</h1>
                    </v-flex>
                    <v-flex xs12 sm12>
                        <v-expansion-panel id="panel">
                            <v-expansion-panel-content class="content">
                                <template v-slot:header>
                                    <div>Hvor befinder vi os henne?</div>
                                </template>
                                <v-card class="card">
                                    <v-card-text>
                                        <ul><li>Kvaglundhallen: Askekrattet 4, 6705 Esbjerg</li>
                                        <li> Cosmos skolen:  Skolebakken 166, 6705 Esbjerg</li></ul>


                                    </v-card-text>
                                </v-card>
                            </v-expansion-panel-content>
                            <v-expansion-panel-content class="content">
                                <template v-slot:header>
                                    <div>Hvor meget koster det?</div>
                                </template>
                                <v-card class="card">
                                    <v-card-text>
                                        <ul>
                                            <li>100 Kr i basis medlemskab / år</li>
                                            <li>300 Kr for en gang i ugen træning / ½år</li>
                                            <li>500 Kr for to gange i ugen træning / ½år</li>
                                        </ul>
                                    </v-card-text>
                                </v-card>
                            </v-expansion-panel-content>
                            <v-expansion-panel-content class="content">
                                <template v-slot:header>
                                    <div>Hvilke spil udbyder vi? Både som individuel og holdtræning</div>
                                </template>
                                <v-card class="card">
                                    <ul>
                                        <li>Fortnite</li>
                                        <li> Overwatch</li>
                                        <li>Counter Strike: Global Offensive</li>
                                    </ul>
                                </v-card>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-flex>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "FAQ"
    }
</script>

<style lang="scss" scoped>
    #outbox {
        border: map-get($colorz, color2) solid 1px;
        margin: 40px 0 20px 0;
        padding: 30px;
    }

    #faqTitle {
        margin: 0 0 40px 47%;
        font-family: $font1;
        font-size: 46px;
    }

    #panel {
        box-shadow: $shadow;
        border: map-get($colorz, color2) solid 1px;
    }

    .content {
        border: map-get($colorz, color2) solid 1px;
    }

    .card {
        border: grey solid 1px;
        padding: 10px 10px 10px 15px;
    }
</style>