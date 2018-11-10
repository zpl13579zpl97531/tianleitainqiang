import Vue from "vue";
import Vuex from "vuex";
import movie from "./movie";

Vue.use(Vuex);

const state = {
    bar:[
        {
            name:"/home",
            title:"首页"
        },
        {
            name:"/movie",
            title:"影片"
        },
        {
            name:"/cinema",
            title:"影院"
        },
        
        {
            name:"/shangcheng",
            title:"商城"
        },
        {
            name:"/my",
            title:"我的"
        },
        {
            name:"/card",
            title:"卖座卡"
        }
    ]
}


const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules:{
        movie
    }
    
})

export default store;