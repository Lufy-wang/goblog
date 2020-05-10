import Vue from "vue";
import Vuex from "vuex";
import BlogHeader from "../components/BlogHeader.vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    msg: "Celeste"
  },
  getters: {
    allMsg: state => state.msg
  },
  modules: {
    BlogHeader
  },
  mutations: {
    msgchange: state => state.msg
  },
  actions: {},
  methods: {}
});
