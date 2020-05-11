import Vue from "vue";
import Vuex from "vuex";
// import HomeHeader from "../components/HomeHeader.vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    msg: "Celeste"
  },
  getters: {
    allMsg: state => state.msg
  },
  modules: {
    // HomeHeader
  },
  mutations: {
    msgchange: state => state.msg
  },
  actions: {},
  methods: {}
});
