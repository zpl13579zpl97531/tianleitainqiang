<template>


    <div class="upcoming">
        <div class="upMove_title">即将上映</div>
        <div class="upMovie" v-for="(item,index) in upMovie">
        <router-link :to="{name:'xiangqing',
                           params:{id:item.id
                             
                      
                      }}">
           
            <div><img :src="item.cover.origin" ></div>
            <div class="upMovie_desc">
                <div>{{item.name}}</div>
                <div>{{item.date}}</div>
            </div>
             </router-link>
        </div>
    </div>
</template>

<script>
import Vuex from "vuex";
export default {
    methods:{
        ...Vuex.mapActions({

            getUpMovie:"movie/getUpMovie"
        })
    },
    computed:{
        ...Vuex.mapState({
            upMovie:state=>state.movie.upMovie
        })
    },
    created() {
        this.getUpMovie();
        
    }
}
</script>

<style scoped>
.upMove_title{
    width: 1.3rem;
    height: .4rem;
    margin: 0 auto;
    margin-bottom: -20px;
    margin-top: -20px;
    border-radius: 10px;
    font-size: .2rem;
    line-height: .4rem;
    text-align: center;
    color: #eee;
    background-color: #a7a7a7;
}
.upMovie{
    margin:0.2rem .34rem .34rem .34rem;
}

.upMovie_desc{
    width:100%;
    height:1rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:#fff;
}
</style>