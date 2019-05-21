<template>
  <v-app>
    <Header></Header>

    <v-content>
      <FrontPage></FrontPage>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import FrontPage from './views/FrontPage'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    FrontPage,

  },
  data () {
    return {
      //
    }
  }
}
</script>
<style lang="scss">

</style>
