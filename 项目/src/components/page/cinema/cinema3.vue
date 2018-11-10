<template>


    <div class="playing wrapper" ref="wrapper" >

        <ul class="content">

            <li v-for="(item,index) in nowPlay" >


             <router-link :to="{name:'xiangqing',
                           params:{id:item.id
                           }}">
           
                <div>
                    <img :src="item.poster.origin">
                    <div class="desc">
                        <p>{{item.name}}</p>
                        <p>{{item.intro}}</p>
                        <p>
                        <span>{{item.cinemaCount}}家影院上映</span>
                        <span>{{item.watchCount}}人购票</span>
                        </p>
                    </div>
                </div>
                <div class="zpl">{{item.grade}}&nbsp;<i>></i></div>
                </router-link>
            </li>
        </ul>
      
    </div>
</template>

<script>
import Vuex from 'vuex';

import BScroll from 'better-scroll';

export default {
    data(){
        return {
            page:2,
            timer:null
        }
    },
    computed:{
        ...Vuex.mapState({

            nowPlay:state=>state.movie.movieMore
        })
    },
    methods:{

        ...Vuex.mapActions({

            nowPlayMore:"movie/nowPlayMore"
        })
    },
    created() {

            this.nowPlayMore();

              
        },
    
    mounted() {

        this.scroll = new BScroll(this.$refs.wrapper,{
        
      //可以点击
      click:true,
  


    })
    },
    
    updated() {
      
   
     //当延迟100毫秒以后重新更新DOM的高度
       
            this.scroll.refresh();
       
        //当用户滚动结束的时候 判断一个当前的页数  以及请求的状态
        this.scroll.on("scrollEnd",()=>{
            if( this.page<15 && !this.timer){
                //延迟3秒以后进行数据的请求
              this.timer = setTimeout(()=>{
                  //将当前页数进行++
                    this.nowPlayMore(this.page++);
                    //当请求结束的时候将状态值改为空
                     this.timer = null
               },1000)
              
            }
        })

   
    
    // this.scroll.on("scrollStart",()=>{
        
    // })
    }  
}

</script>

<style scoped>
i{
    font-style:normal
}
.wrapper{

    height:100%;
    
    overflow:hidden;
   
}
.playing{
    width:100%;
    padding-right:30px;
}
.playing>ul>li{
    height:2.48rem;
    padding:40px 0;
    display:flex;
    justify-content:space-between;
    border-bottom:2px dashed #ccc;
    position:relative
}
.playing>ul>li>div:nth-child(1){
    display:flex;
    justify-content:center;

}

img{
    width:1.2rem;
    height:1.68rem;
    float:left
}
.zpl{
   position:absolute;
   right:10px;
   bottom:30px;
   color:red;
   font-size:30px;
}
.desc{
position:absolute;
   left:140px;
   bottom:100px;
}
</style>