import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import m_post from './modules/post'
import m_check from './modules/check'
import m_count from './modules/count'


Vue.use(Vuex)
axios.defaults.baseURL = 'http://localhost:3000/api/v1/'
export const store = new Vuex.Store({
    modules: {
        post: m_post,
        check: m_check,
        count: m_count
    },
})
