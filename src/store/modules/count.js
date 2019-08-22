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
        [COUNT](state, count){
            console.log("njsncfjsn");
            state.count++
        }
    },
    actions: {
        [ACTION_COUNT](context){
            // return new Promise((resolve, reject) => {
            console.log(context);
        }
    },
}
export default m_count
