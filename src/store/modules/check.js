import { CHANGE_X } from "../mutation_type";

const m_check = {
    state: {
        is_checked: false
    },
    getters: {
        getChecked(state){
            return state.is_checked
        }
    },
    mutations: {
        [CHANGE_X](state, checked){
            state.is_checked = checked
        }
    } 
}
export default m_check
