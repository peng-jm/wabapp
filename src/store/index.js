import Vue from "vue"
import Vuex from "vuex"
import good from "./modules/good"

Vue.use(Vuex)

const store = new Vuex.Store({
	modules:{
		good,
	}
})

export default store