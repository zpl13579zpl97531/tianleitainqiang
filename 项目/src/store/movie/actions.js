

import axios from "axios";
export default {
    //https://m.maizuo.com
    //
    //请求触发mutation
    getBanner({commit}){
        axios({
            method:"get",
            url:"/v4/api/billboard/home",
            data:{
                __t:new Date().getTime()
            }
        }).then((data)=>{

           commit("getBanner",data.data.data.billboards)
        })
    },


//跨域的代理
    // app.use("/v4",httpProxyMiddleware({
    //     target:"https://m.maizuo.com",
    //     changeOrigin:true
    //   }))
    // https://m.maizuo.com/


    getnowPlay({commit}){

        axios({
            
            method:"get",
            url:"/v4/api/film/now-playing?page=1&count=5",
            data:{
                __t:new Date().getTime()
            }
        }).then((data)=>{
           console.log(data.data.data.films)
           commit("getnowPlay",data.data.data.films)
        })
    },
    getUpMovie({commit}){
        //https://m.maizuo.com
        axios({
            method:"get",
            url:"/v4/api/film/coming-soon?page=1&count=3",
            data:{
                __t:new Date().getTime()
            }
        }).then((data)=>{
            var data = data.data.data.films
            data.map((item)=>{
                var getTime = item.premiereAt;
                var d = new Date(getTime);
                var m = d.getMonth()+1;
                var day = d.getDate();
                item.date = m+"月"+day+"日上映";
            })

           commit("getUpMovie",data)
           
        })
    },

    //https://m.maizuo.com/v4/#!/film/
    nowPlayMore({commit}){
        // https://m.maizuo.com/v4/api/film/now-playing?page=1&count=7
        axios({
            method:"get",
            url:"/v4/api/film/now-playing?page=1&count=7"
        }).then((data)=>{
            commit("nowPlayMore",data.data.data.films)
            
        })
    },
    
    //https://m.maizuo.com/v4/#!/film/
    //https://m.maizuo.com/v4/api/film/4297?__t=1540303803975
   
   
    xiangqing({commit},params){

        // https://m.maizuo.com/v4/api/film/now-playing?page=1&count=7

        axios({
            
            method:"get",

            url:"/v4/api/film/"+params,

            data:{
                __t:new Date().getTime()
            }
        }).then((data)=>{
            
            commit("xiangqing",data.data.data.film)
            
        })
    }
}
//axios请求后台的借口，进行获取数据，在commit触发mutations的方法，进行，传参数，然后再渲染，
//组件中，组建中调用方法，vuex的方法，必须会，