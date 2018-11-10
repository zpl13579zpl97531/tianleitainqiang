<template>
    <div class="zpl2">
            
               <div><img :src="xiangqing.cover.origin" ></div>
            <div class="upMovie_desc">
                <div>{{xiangqing.name}}</div>
                <div>{{xiangqing.intro}}</div>
                <div>{{xiangqing.synopsis}}</div>
                 <div>{{xiangqing.mins}}</div>
                   <div>{{xiangqing.language}}</div>
                   <div>{{xiangqing.director}}</div>
                        <div>{{xiangqing.nation}}</div>
                          <div>{{xiangqing.category}}</div>
                            <div>{{xiangqing.grade}}</div>
            </div>  
    </div>
</template>

<style scoped>
.zpl2{
    width:100%;



}
.zpl2 img{
    width:375px;
    height:400px;
    margin-bottom:40px;
}
</style>


<script>
import Vuex from 'vuex';

   export default {
       
      
    data(){
        return {

          id:''
          
            
        }
    },
    computed:{
        ...Vuex.mapState({

           xiangqing:state=>state.movie.xiangqing
        })
    },
    methods:{

        ...Vuex.mapActions({

            xiangqing:"movie/xiangqing"
        })
    },
    created() {


          //接受其他组件穿过来的id，然后再传给actions的id ,获取借口的拼接，请求数据，最关键的一步
          
                this.id=this.$route.params.id
                
            console.log(this.id)


                this.$store.dispatch("movie/xiangqing",this.id)

    }

    
    
}
//组件之间的传递的。以及路由之间的跳转，接口的请求，钻进，vuex的数据管理状态
//公共租件的是一个。如有，渲染，router-view,鼻血的，
</script>




