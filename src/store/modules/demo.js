export default {
    state : {
        index : 1
    },

    getters : {
        index : state => state.index
    } ,

    mutations : {
        addIndex(state){
            state.index += 1 ;
        }
    },

    actions : {
        addIndex({commit}){
            commit("addIndex") ;
        }
    }





}