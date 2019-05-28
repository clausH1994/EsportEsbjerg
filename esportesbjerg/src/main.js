import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-134632491-3'
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
