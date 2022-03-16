import axios from "axios";
import Vuex from "vuex";
import Vue from "vue";

//load Vuex
Vue.use(Vuex);

//to handle state
const state = {
  posts: [],
};

//to handle state
const getters = {};

//to handle actions
const actions = {
  getPosts({ commit }) {
    axios
      .get(
        "http://sandbox.arabamd.com/api/v1/listing?sort=1&sortDirection=0&take=20"
      )
      .then((response) => {
        commit("SET_POSTS", response.data);
      });
  },
  getDetails({ commit }, id) {
    axios
      .get("http://sandbox.arabamd.com/api/v1/detail?id=" + id)
      .then((response) => {
        commit("SET_DETAILS", response.data);
      });
  },
};

//to handle mutations
const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts;
  },

  SET_DETAILS(state, details) {
    state.details = details;
  },
};

//export store module
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
