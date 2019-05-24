<template>

    <div id="footerline">
        <v-container>

        <v-card id="footerbox">
            <v-layout align-center justify-space-around row fill-height>
                <div>
                    <p class="textfooter">Adresse</p>
                    <span class="textfooter" > Skolebakken 166 - 168 <br> 6705 Esbjerg</span>
                </div>
                <div>
                    <p class="textfooter"> Kontakt</p>
                    <span class="textfooter" >support@esport-esbjerg.dk <br> 31 13 17 74</span>
                </div>
                <img src="../assets/img/facebook.png">
                <img src="../assets/img/instagram.png">
                <img src="../assets/img/discord.png">
                <img src="../assets/img/teamspeak.png">
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
#footerline
{
    height: 200px;
    border-top: map-get($colorz, color2) solid 1px;
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 20px;
}
#footerbox
{
    height: 165px;
    width: auto;
    border:map-get($colorz, color2) solid 1px;
    box-shadow: $shadow;
    padding: 25px;

}
.textfooter
{
    font-family: $font2;
    font-size: 22px;
}
img
{
    height: 100px;
}
</style>