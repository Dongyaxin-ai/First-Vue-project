import router from './router'
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import vueaxios from 'vue-axios'
import vueRouter from 'vue-router'
import store from './store'
Vue.use(vueaxios,axios)
Vue.use(vueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  data() {
    return {
      
    }
  },
  component: {
    
  }
}).$mount('#app')
