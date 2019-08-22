import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import m_post from './modules/post'
import m_check from './modules/check'
import m_count from './modules/count'


Vue.use(Vuex)
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/'
export const store = new Vuex.Store({
    modules: {
        post: m_post,
        check: m_check,
        count: m_count
    },
})

console.log(store.state)
