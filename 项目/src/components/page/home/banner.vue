<template>

    <div class="swiper-container">

            <div class="swiper-wrapper">

                <div class="swiper-slide" v-for="(item,index) in imgs">

                    <img :src="item.imageUrl">

                </div>
            </div>

            <!-- 如果需要分页器 -->

            <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Vuex from "vuex";

//插件轮播的】

import Swiper from "swiper";

import  "../../../../node_modules/swiper/dist/css/swiper.css";

export default {

    methods:{

        ...Vuex.mapActions({

            getBanner:"movie/getBanner"

        })
    },
    
    computed:{

        ...Vuex.mapState({

            imgs:state=>state.movie.imgs
        })
    },

    // watch:{
    //       imgs(){
    //           this.$nextTick(()=>{
    //                //swiper的使用
    //                 var mySwiper = new Swiper ('.swiper-container', {
    //                     loop: true, 
    //                     autoplay:{
    //                         disableOnInteraction: false,
    //                     },
    //                     pagination: {
    //                     el: '.swiper-pagination',
    //                     },
    //                 })  
    //           })
    //        }
    // },

//根据数据更新改变

    updated() {
       
                //swiper的使用
                var mySwiper = new Swiper ('.swiper-container', {
                    loop: true, 
                    autoplay:true,
                    pagination: {
                    el: '.swiper-pagination',
                    },
                })  
    },

    created() {
       // this.getBanner();
       
    this.$store.dispatch("movie/getBanner");
        
    },
}
</script>

<style scoped>
img{width:100%;}
</style>


