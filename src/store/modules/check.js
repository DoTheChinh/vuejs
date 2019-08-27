import { CHANGE_X, CHANGE_TOKEN, CHANGE_IS_AUTHEN, CHANGE_CATE, CHANGE_RELEASE } from "../mutation_type";
import { LOGIN, INSERT_AUTH, REGISTER, LOAD_CATE, LOAD_RELEASE } from "../action_type";
// import { resolve, reject } from "q";

import axios from 'axios'

const m_check = {
    state: {
        is_checked: false,
        is_authen: localStorage.getItem('is_authen') ? true : false,
        token: localStorage.getItem('token') || null,
        category: {},
        release: {},
    },
    getters: {
        getChecked(state) {
            return state.is_checked
        },
        getIsAuthen(state) {
            return state.is_authen
        },
        getCategory(state) {
            return state.category
        },
        getRelease(state) {
            return state.release
        }
    },
    mutations: {
        [CHANGE_X](state, checked) {
            state.is_checked = checked
        },
        [CHANGE_IS_AUTHEN](state, is_authen) {
            state.is_authen = is_authen
        },
        [CHANGE_TOKEN](state, token) {
            state.token = token
        },
        [CHANGE_CATE](state, list) {
            state.category = list
        },
    },
    actions: {
        [LOGIN](context, data) {
            return new Promise((resolve, reject) => {
                axios.post('sign_in', data).then((rep) => {
                    let token = rep.data.jwt
                    localStorage.setItem('token', token)
                    context.commit(CHANGE_TOKEN, token)
                    context.commit(CHANGE_IS_AUTHEN, true)
                    localStorage.setItem('is_authen', true)
                    resolve(rep)
                }).catch((error) => {
                    reject(error)
                })
            })
        },
        [INSERT_AUTH](context, data) {
            axios.defaults.headers['Authentication'] = localStorage.getItem('token')
        },
        [REGISTER](context, data) {
            return new Promise((resolve, reject) => {
                axios.post('register', data).then((res) => {
                    resolve(res)
                }).catch((error) => {
                    reject(error)
                })
            })
        },
        [LOAD_CATE](context) {
            return new Promise((resolve, reject) => {
                axios.get('/').then((res) => {
                    context.commit(CHANGE_CATE, res.data.category)
                    resolve(res)
                }).catch((error) => {
                    reject(error)
                })
            })
        },
        [LOAD_RELEASE](context) {
            return new Promise((resolve, reject) => {
                axios.get('/').then((res) => {
                    context.commit(CHANGE_RELEASE, res.data.release)
                    console.log( res.data.release);
                    
                    resolve(res)
                }).catch((error) => {
                    reject(error)
                })
            })
        }
    }
}
export default m_check