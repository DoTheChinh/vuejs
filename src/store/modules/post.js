import axios from 'axios'
import {LIST_POST} from './../mutation_type'
import {ACTION_LIST_POST} from './../action_type'

const m_post = {
    state: {
        posts: [1],
        token: localStorage.getItem('token') || null
    },
    getters: {
        getPost(state){
            return state.posts
        }
    },
    mutations: {
        [LIST_POST](state, posts){
            state.posts = posts
        },
        changeToken(state, token){
            state.token = token
        }
    },
    actions: {
        [ACTION_LIST_POST](context){
            return new Promise((resolve, reject) => {
                axios.defaults.headers['Authentication'] = 'Token ' + localStorage.getItem('token')
                axios.get('posts').then((rep) => {
                    context.commit(LIST_POST, rep.data)
                    context.commit('changeToken', localStorage.getItem('token'))
                    resolve(context.rootState.is_checked)
                }).catch((error) => {
                    reject(error)
                })
            })
        }
    },
}

export default m_post