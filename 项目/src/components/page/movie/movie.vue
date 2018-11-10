<template>
    <div class="films_movie page">
        <ul>
           
            <router-link :to="{name:'nowPlay'}">正在上映</router-link>
            <router-link :to="{name:'coming'}">即将上映</router-link>
        </ul>
       
 
        <router-view></router-view>
    </div>
</template>

<script>
    import Vuex from "vuex";
   
    export default {
       
        data(){


            return {
               
               
            }
        },

        methods:{
        
            ...Vuex.mapActions({
                
                //nowPlayMore:"movie/nowPlayMore"
            })
        },

        created() {

            //this.nowPlayMore();

                if(this.$route.path =="/movie"){
                this.$router.push({name:"nowPlay"})
            }
        },


        //时刻更新
             updated(){
                 if(this.$route.path =="/movie"){
                this.$router.push({name:"nowPlay"})

             }
        }
       

    }
</script>

<style scoped>
.router-link-active{
    color:#c33;
    border-bottom:2px solid red;
    height:.5rem
}
.films_movie{
    padding:1rem .3rem 0;
    background:#fff;
    
}
.films_movie>ul{
    display:flex;
    width:100%;
    height:.9rem;
    justify-content:space-between;
    
    background:#fff;
}






</style>