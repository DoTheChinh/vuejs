import { CHANGE_X, CHANGE_TOKEN, CHANGE_IS_AUTHEN, LOAD_PARENT_CATE } from "../mutation_type";
import { LOGIN, INSERT_AUTH, REGISTER } from "../action_type";
// import { resolve, reject } from "q";

import axios from 'axios'

const m_check = {
    state: {
        is_checked: false,
        is_authen: localStorage.getItem('is_authen') ? true : false,
        token: localStorage.getItem('token') || null
    },
    getters: {
        getChecked(state){
            return state.is_checked
        },
        getIsAuthen(state){
            return state.is_authen
        }
    },
    mutations: {
        [CHANGE_X](state, checked){
            state.is_checked = checked
        },
        [CHANGE_IS_AUTHEN](state, is_authen){
            state.is_authen = is_authen
        },
        [CHANGE_TOKEN](state, token){
            state.token = token
        }
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
        [INSERT_AUTH](context, data){
            axios.defaults.headers['Authentication'] = localStorage.getItem('token')
        },
        [REGISTER](context, data){
            return new Promise((resolve, reject) => {
                axios.post('register', data).then((res) => {

                }).catch((error) => {
                    reject(error)
                })
            })
        },
        [LOAD_PARENT_CATE](context){
            console.log(axios.defaults.baseURL)
            return new Promise((resolve, reject) => {
                axios.get('/').then((res) => {
                    resolve(res)
                }).catch((error) => {
                    reject(error)
                })
            })
        }
    }
}
export default m_check
