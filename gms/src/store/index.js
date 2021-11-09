import Vuex from 'vuex';
import Vue from 'vue';
import login from './modules/login';

//Load Vuex
Vue.use(Vuex);

//Create store
export default new Vuex.Store({
    modules: {
        login
    }
});