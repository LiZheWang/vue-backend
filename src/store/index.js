import Vue from 'vue'
import Vuex from 'vuex'
import weixin from './modules/weixin'


Vue.use(Vuex)

export default new Vuex.Store({
    modules : {
		weixin
    }
});
