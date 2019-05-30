<template>
    <div>
        <div id="darken">
            <h1 id="titletext">ESPORT ESBJERG</h1>
            <div id="frontImage">
            </div>
        </div>
        <v-container>
            <v-layout text-sx-center wrap>
            <v-flex xs12 sm12>
            <div id="outlineMain">

                    <v-container>
                        <v-layout text-sx-center wrap>
                            <v-flex xs12 sm4>
                                <v-card>
                                    <div id="forsideImg1" class="picbox "></div>
                                </v-card>
                            </v-flex>
                            <v-spacer></v-spacer>
                            <v-flex xs12 sm7>
                                <v-card>
                                    <div class="textbox">
                                        <h1 class="fonttext">Hvem er eSport Esbjerg.</h1>
                                        <div style="margin-top: 15px">
          <span class="fonttext spantext">eSport Esbjerg er en folkeoplysende forening, foreningens hovedfokus
              er inde for E-sport og alt hvad der ligger under det område. <br> <br> Vi har til formål at skabe et godt og trygt
              miljø  hvor de unge kan komme og få et godt samvær med hinanden samt møde nye mennesker, dette gælder
              selvfølgelig ikke kun unge, men alle der har en interesse indenfor gaming.
              Vi søger også frivillige til at hjælpe til i hverdagen, på forskellige område.
              Hvis det lyder spændende kan vi kontaktes på mail eller telefon.
</span>
                                        </div>
                                    </div>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>



                    <v-container>
                        <v-layout text-sx-center wrap>
                            <v-flex xs12 sm7>
                                <v-card>
                                    <div class="textbox2">
                                        <h1 class="fonttext">eSport Esbjergs mål.</h1>
                                        <div style="margin-top: 15px">

          <span class="fonttext spantext">eSport Esbjerg ønsker at bidrage til den positive udvikling af
              unges fritidsinteresser, og også sætte Esbjerg på landkortet for denne relativt nye form for sport,
              som nu er blevet anerkendt af både DGI og De Olympiske Lege som en reel sportsgren på konkurrenceniveau. <br> <br>
              eSport Esbjerg ønsker at koordinere og hjælpe til med alle eSport aktiviteter i Sydvest, hvad enten det
              drejer sig om mindre LAN parties, større turneringer, fast træning, tilmelding osv.

</span>

                                        </div>
                                    </div>
                                </v-card>
                            </v-flex>
                            <v-spacer></v-spacer>
                            <v-flex xs12 sm4>
                                <v-card>
                                    <div id="forsideImg2" class="picbox"></div>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>


                    <v-container>
                        <v-layout text-sx-center wrap>
                            <v-flex xs12 sm4>
                                <v-card>
                                    <div id="forsideImg3" class="picbox"></div>
                                </v-card>
                            </v-flex>
                            <v-spacer></v-spacer>
                            <v-flex xs12 sm7>
                                <v-card>
                                    <div class="textbox">
                                        <h1 class="fonttext">Hvordan vil vi opnå vores mål.</h1>
                                        <div style="margin-top: 15px">
          <span class="fonttext spantext">eSport Esbjerg har også en plan ved siden af det hyggelige samvær,
              at skabe hold inden for de forskellige spil, som kan konkurrere på et professionelt plan. <br><br>
              Dette giver en god mulighed for at give de unge idoler i lokalområdet så de kan se at E-sport ikke kun
              har gode spillere internationalt, men også herhjemme. <br> <br> Det vil også være med til at sætte Danmark yderligere
              på verdenskortet, når det kommer til eSport, da det viser at vi som land er fremme i skoene pga.
              den mængde hold, der vil være med til at konkurrere.
</span>
                                        </div>
                                    </div>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>

            </div>
<v-flex xs12 sm12>
            <div id="outerVideoBox">
                <v-flex xs12 sm12>
                    <div id="inderVideoBox" class="centerPlacement">
                        <iframe width="497" height="280" src="https://www.youtube.com/embed/VIEWGNpFe3g"
                                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                    </div>
                </v-flex>
            </div>
</v-flex>
            </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        data: () => ({})
    }
</script>

<style lang="scss" scoped>
    #titletext {
        color: map_get($colorz, color1);
        z-index: 1;
        position: absolute;
        font-family: $font1;
        font-size: 110px;
    }

    #frontImage {
        background-image: url("../assets/img/frontPageImage.jpg");
        background-size: cover;
        background-position: center;
        height: 600px;
        width: 100%;
        opacity: 0.5;
        position: relative;
    }

    #darken {
        background-color: black;
        height: 600px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #outlineMain {
        border: map-get($colorz, color2) solid 1px;

    }

    #outerVideoBox {
        border: map-get($colorz, color2) solid 1px;
        height: 380px;
        padding: 20px;
        align-items: center;
        margin: 20px 0 20px 0;
    }

    #inderVideoBox {
        border: map-get($colorz, color2) solid 1px;
        height: 300px;
        box-shadow: $shadow;
        padding: 10px;

    }

    #forsideImg1
    {
        background-image: url("../assets/img/forside3.png");
    }
    #forsideImg2
    {
        background-image: url("../assets/img/forside2.png");
    }
    #forsideImg3
    {
        background-image: url("../assets/img/forside1.png");
    }
    .picbox {
        height: 350px;
        background-size: cover;
        box-shadow: $shadow;
        margin: 10px 0;
    }

    .textbox {
        padding: 20px;
        height: 350px;
        border: map_get($colorz, color2) solid 1px;
        box-shadow: $shadow;
        margin: 10px 0;
    }

    .textbox2 {
        padding: 20px;
        height: 350px;
        background-color: map_get($colorz, color2);
        color: map_get($colorz, color1);
        border: map_get($colorz, color2) solid 1px;
        box-shadow: $shadow;
        margin: 10px 0;
    }

    .fonttext {
        font-family: $font2;
    }

    .spantext {
        font-size: 16px;
    }

    @media only screen and (max-width: 1250px) {
        .textbox {

            height: 400px;
        }
        .textbox2 {

            height: 400px;
        }
        .picbox {
            height: 400px;

        }
    }
    @media only screen and (max-width: 750px) {
        .textbox {
            height: auto;
        }
        .textbox2 {

            height: auto;
        }
        #titletext {
            font-size: 50px;
        }

    }
</style>
