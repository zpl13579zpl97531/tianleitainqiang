<template>
    <div class="nowPlay">


        <div v-for="(item,index) in nowPlay" class="main">
  
  <router-link :to="{name:'xiangqing',
                           params:{id:item.id
                             
                      
                      }}">
     
        <ul>
          <li> <img :src="item.cover.origin"></li>
            <li>{{item.name}}</li>
          <li>{{item.cinemaCount}}家影院上映
          {{item.watchCount}}人观看</li>
       
          <li id="last"> {{item.grade}}</li>
</ul>

   </router-link>>
        </div>
        <div class="more">更多热映电影</div>

  
    </div>
</template>


<style scoped>


.main{
    width:100%;
    height:100%;
    background:#e1e1e1;

}
.main ul{
    width:3.7rem;
    margin:0.25rem;
}
.main img{
    margin-left:.2rem
}

.main ul li:nth-child(2){
    font-size:.3rem;
    margin-left:.2rem;
    margin-top:.2rem;
      margin-bottom:.1rem
}
.main ul li:nth-child(3){
    font-size:.3rem;
    margin-left:.2rem
}
.main ul li:nth-child(4){
    font-size:.5rem;
    color:red;
    margin-top:-0.6rem;
     margin-left:5rem;
 

}
.more{
    width: 3.2rem;
    height: .6rem;
    border: 2px solid #aaa;
    border-radius: 30px;
    margin: 20px auto 60px;
    text-align: center;
    line-height: .6rem;
    font-size: .24rem;
    color: #616161;
    cursor: pointer;
}


</style>


<script>
import Vuex from "vuex";
export default {
    computed:{

        ...Vuex.mapState({

            nowPlay:state=>state.movie.nowPlay
              
                
               
            
        })
    },
    methods:{
        ...Vuex.mapActions({
            getnowPlay:"movie/getnowPlay"
        })
    },

    created() {


        this.getnowPlay();

      
    },
}

</script>