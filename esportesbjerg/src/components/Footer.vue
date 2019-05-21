<template>
    <div>
    <div id="footerline">
        <div id="footerbox">
            <v-layout align-center justify-space-around row fill-height>
                <div>
                    <p class="textfooter">Adresse</p>
                    <span class="textfooter" > Skolebakken 166 - 168 <br> 6705 Esbjerg</span>
                </div>
                <div>
                    <p class="textfooter"> Kontakt</p>
                    <span class="textfooter" >Kontakt@EsportEsbjerg.dk <br> 33333333</span>
                </div>
                <img src="../assets/img/facebook-square-brands.svg">
                <img src="../assets/img/discord-brands.svg">
                <img src="../assets/img/instagram-brands.svg">
                <img src="../assets/img/teamspeak-brands.svg">
            </v-layout>
        </div>
        </div>
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
    width: 90%;
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
    height: 50px;
}
</style>