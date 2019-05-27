<template>
    <v-container>
        <v-layout text-sx-center wrap>
            <v-flex xs12 sm12>
                <v-card id="outerbox">
                    <v-layout text-sx-center wrap>
                        <v-flex xs12 sm4>
                            <v-card class="newscard">
                                <h1>Nyhed</h1>
                                <span>På Mandag den. 20 Maj er
                                træning aflyst på
                                grund af sygdom.
                                </span>
                            </v-card>
                            <v-card id="newsbox2" class="newscard">
                                <h1>Næste Event</h1>
                                <span>Der er Lan den .24 -25 maj.
                                        Se mere på vores facebook
                                </span>
                            </v-card>
                        </v-flex>
                        <v-flex xs12 sm8>
                            <v-card id="calendar">
                                <iframe src="https://calendar.google.com/calendar/embed?height=500&amp;wkst=1&amp;bgcolor=%23ffffff&amp;
                                ctz=Europe%2FCopenhagen&amp;src=NTZncThic3RzOTB2bjJzcjE1Y2ZkbXNmdm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;
                                src=ZGEuZGFuaXNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23B39DDB&amp;color=%230B8043&amp;
                                showNav=1&amp;showPrint=0&amp;showCalendars=0&amp;title=Esport%20Esbjerg&amp;showTz=0"
                                        style="border-width:0;" width="100%" height="460" frameborder="0"
                                        scrolling="no"></iframe>
                            </v-card>
                        </v-flex>

                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Kalender"
    }
</script>

<style lang="scss" scoped>
    #outerbox {
        border: map-get($colorz, color2) solid 1px;
        margin: 40px 0 20px 0;
        padding: 20px;
    }

    #newsbox2 {
        background-color: map_get($colorz, color2);
        color: map_get($colorz, color1);
    }

    #calendar {
        height: 500px;
        border: map_get($colorz, color2) solid 1px;
        box-shadow: $shadow;
        margin: 20px;
        padding: 20px;
    }

    .newscard {
        height: 240px;
        border: map_get($colorz, color2) solid 1px;
        box-shadow: $shadow;
        margin: 20px;
        font-family: $font2;
        padding: 20px;
    }

    span {
        font-size: 18px;
    }

    h1 {
        margin-bottom: 20px;
    }
</style>