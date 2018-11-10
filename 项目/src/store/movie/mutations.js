

export default {
    //参数1数据库的值，以及，参数2为接收的值，让actions触发，
    getBanner(state,params){

        state.imgs = params;

    },
    
    getnowPlay(state,params){
       
        state.nowPlay = params;
    },
    getUpMovie(state,data){
        state.upMovie =[...state.movieMore,...data]//获取的数据进行拆分，拼接加载，
    },
    nowPlayMore(state,data){
        state.movieMore =[...state.movieMore,...data] 
    },
    xiangqing(state,params){
        state.xiangqing = params;
    },
}