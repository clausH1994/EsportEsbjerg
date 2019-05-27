<template>

    <div id="footerline">
        <v-container>

            <v-card id="footerbox">
                <v-layout text-sx-center wrap>
                    <v-flex xs12 sm4>
                        <div>
                            <p class="textfooter">Adresse</p>
                            <span class="textfooter"> Skolebakken 166 - 168 <br> 6705 Esbjerg</span>
                        </div>
                    </v-flex>
                    <v-flex xs12 sm3>
                        <div>
                            <p class="textfooter"> Kontakt</p>
                            <span class="textfooter">support@esport-esbjerg.dk <br> 31 13 17 74</span>
                        </div>
                    </v-flex>
                    <v-flex xs6 sm1>
                        <a href="https://www.facebook.com/eSportEsbjerg/" target="_blank"><img
                                src="../assets/img/facebook.png"></a>
                    </v-flex>
                    <v-flex xs6 sm1>
                        <a href="https://www.instagram.com/esport_esbjerg/?hl=da" target="_blank"><img src="../assets/img/instagram.png"></a>
                    </v-flex>
                    <v-flex xs6 sm1>
                        <a href="https://discord.gg/9TButPv" target="_blank"><img src="../assets/img/discord.png"></a>
                    </v-flex>
                    <v-flex xs6 sm1>
                        <a href="" target="_blank"><img src="../assets/img/teamspeak.png"></a>
                    </v-flex>

                </v-layout>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="scss" scoped>
    #footerline {
        border-top: map-get($colorz, color2) solid 1px;
        display: flex;
        justify-content: center;
        align-content: center;
        padding: 20px;
    }

    #footerbox {

        border: map-get($colorz, color2) solid 1px;
        box-shadow: $shadow;
        padding: 35px;

    }

    .textfooter {
        font-family: $font2;
        font-size: 22px;
        margin-top: 5px;
    }

    img {
        height: 100px;
    }
</style>