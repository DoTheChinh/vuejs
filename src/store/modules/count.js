import { COUNT } from "./../mutation_type";
import { ACTION_COUNT } from "./../action_type";
// import { resolve } from "url";
// import { reject } from "q";

const m_count = {
    state: {
        count: 0
    },
    getters: {
        getCount(state){
            return state.count
        }
    },
    mutations: {
        [COUNT](state){
            state.count++
        }
    },
    actions: {
        [ACTION_COUNT](context){
            return new Promise(() => {
                context.commit(COUNT)   
            })
        }
    },
}
export default m_count
