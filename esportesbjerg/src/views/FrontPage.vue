<template>
  <div>
    <div id="darken">
      <h1 id="titletext">ESPORT ESBJERG</h1>
      <div id="frontImage">
      </div>
    </div>
    <div class="centerPlacement">
    <div id="outlineMain">
      <div class="centerPlacement">
        <v-container>
        <v-layout text-sx-center wrap>
        <v-flex xs12 sm4>
          <v-card>
        <div class="picbox "></div>
          </v-card>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs12 sm7>
          <v-card>
        <div class="textbox">
          <h1 class="fonttext">Hvem er eSport Esbjerg.</h1>
          <div style="margin-top: 15px">
          <span class="fonttext spantext">eSport Esbjerg er en folkeoplysende forening, foreningens
hovedfokus er inde for E-sport og alt hvad der ligger
under det område. Vi har til formål at skabe et godt og trygt miljø  hvor
de unge kan komme og få et godt samvær med hinanden samt møde nye
mennesker, dette gælder selvfølgelig ikke kun unge, men alle der har en interesse
indenfor gaming. eSport Esbjerg ønsker at bidrage til den positive udvikling
af unges fritidsinteresser, og også sætte Esbjerg på landkortet for denne relativt
nye form for sport, som nu er blevet anerkendt af både DGI og
De Olympiske Lege som en reel sportsgren på konkurrenceniveau.
</span>
          </div>
        </div>
          </v-card>
        </v-flex>
        </v-layout>
        </v-container>
      </div>

      <div class="centerPlacement">
        <v-container>
          <v-layout text-sx-center wrap>
          <v-flex xs12 sm7>
            <v-card>
          <div class="textbox2">
            <h1 class="fonttext">eSport Esbjergs mål.</h1>
            <div style="margin-top: 15px">
              <v-card-text >
          <span class="fonttext spantext">eSport Esbjerg ønsker at koordinere og hjælpe til med alle eSport aktiviteter i
Sydvest, hvad enten det drejer sig om mindre LAN parties, større turneringer, fast
træning, tilmelding osv. eSport Esbjerg har også en plan ved siden af det
hyggelige samvær, at skabe hold inden for de forskellige spil, som kan konkurrere
på et professionelt plan. Dette giver en god mulighed for at give de unge idoler i
lokalområdet så de kan se at E-sport ikke kun har gode spillere internationalt, men
også herhjemme. Det vil også være med til at sætte Danmark yderligere på
verdenskortet, når det kommer til eSport, da det viser at vi som land er fremme i
skoene pga. den mængde hold, der vil være med til at konkurrere.
</span>
              </v-card-text >
            </div>
          </div>
            </v-card>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex xs12 sm4>
            <v-card>
          <div class="picbox"></div>
            </v-card>
          </v-flex>
          </v-layout>
        </v-container>
      </div>

      <div class="centerPlacement">
        <v-container>
          <v-layout text-sx-center wrap>
          <v-flex xs12 sm4>
            <v-card>
          <div class="picbox"></div>
            </v-card>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex xs12 sm7>
            <v-card>
          <div class="textbox">
            <h1 class="fonttext">Hvordan vil vi opnå vores mål.</h1>
            <div style="margin-top: 15px">
          <span class="fonttext spantext">For at få disse formål til at lykkedes, så vil der blive lavet flere begivenheder, som
 samler disse gaming entusiaster.Disse begivenheder er blandt andet LAN-events,
der samler en masse interesserede i et rum, hvor de kan konkurrere med andre til
samme begivenhed eller bare tage med for at spille videospil med deres venner.
Der kan også laves begivenheder, som består af små workshops, hvor dem som
interesserer sig for et spil kan komme og spille mod eller med hinanden.
Det kan også gøres muligt, at medlemmerne kan komme ned og møde de
forskellige hold og høre omkring deres oplevelser, som hold, spiller eller hvordan
livet som professionel er.
</span>
            </div>
          </div>
            </v-card>
          </v-flex>
          </v-layout>
        </v-container>
      </div>
    </div>
    </div>

    <div class="centerPlacement">
    <div id="outerVideoBox" class="centerPlacement">
      <v-flex xs12 sm9>
      <div id="inderVideoBox" class="centerPlacement">
        <iframe width="497" height="280" src="https://www.youtube.com/embed/mfqsEpjEtrw"
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
        </iframe>
      </div>
      </v-flex>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({

    })
  }
</script>

<style lang="scss" scoped>
  #titletext
  {
    color: map_get($colorz, color1);
    z-index: 1;
    position: absolute;
    font-family: $font1;
    font-size: 110px;
  }
  #frontImage
  {
    background-image: url("../assets/img/frontPageImage.jpg");
    background-size: cover;
    height: 600px;
    width: 100%;
    opacity: 0.5;
    position: relative;
  }
  #darken
  {
    background-color: black;
    height: 600px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #outlineMain
  {
    border: map-get($colorz, color2) solid 1px;
    height: 1250px;
    width: 90%;
  }

  #outerVideoBox
  {
    border: map-get($colorz, color2) solid 1px;
    height: 340px;
    width: 90%;
    padding: 20px;
    align-items: center;
  }

  #inderVideoBox
  {
    border: map-get($colorz, color2) solid 1px;
    height: 300px;
    box-shadow: $shadow;
    padding: 10px;

  }

  .picbox
  {
    height: 350px;
    background-image: url("../assets/img/demo1.jpg");
    background-size: cover;
    box-shadow: $shadow;
  }
  .textbox
  {
    padding: 20px;
    height: 350px;
    border: map_get($colorz, color2) solid 1px;
    box-shadow: $shadow;
  }

  .textbox2
  {
    padding: 20px;
    height: 350px;
    background-color: map_get($colorz, color2);
    color: map_get($colorz,color1);
    border: map_get($colorz, color2) solid 1px;
    box-shadow: $shadow;
  }

  .fonttext
  {
    font-family: $font2;
  }
  .spantext
  {
    font-size: 16px;
  }
</style>
