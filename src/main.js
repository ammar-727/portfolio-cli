import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue'
import Navbar from './components/Navbar.vue'
import Gigs from './components/Gigs.vue'
import Skills from './components/Skills.vue'
import Intro from './components/Intro.vue'
import Forms from './components/Forms.vue'
import Footer from './components/Footer.vue'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

Vue.component('app-navbar', Navbar);
Vue.component('app-gigs', Gigs);
Vue.component('app-skills', Skills);
Vue.component('app-intro', Intro);
Vue.component('app-forms', Forms);
Vue.component('app-footer', Footer);

new Vue({
  render: h => h(App),
}).$mount('#app')
