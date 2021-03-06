import Vuex from 'vuex';
import Vue from 'vue';
import login from './modules/login';
import profiles from './modules/profiles';
import faculty from './modules/faculty';

//Load Vuex
Vue.use(Vuex);

//Create store
export default new Vuex.Store({
    modules: {
        login,
        profiles,
        faculty
    }
});