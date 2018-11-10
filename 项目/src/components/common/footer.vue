<template>
    <div id="footer">
        <ul>
            <li v-for="(item,index) in bar">
                <router-link :to="item.name">{{item.title}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import Vuex from "vuex";
    export default {
        
       computed:Vuex.mapState(["bar"])
       
        // computed:{

        //     ...Vuex.mapState({

        //         bar:state=>state.bar
        //     })
        // }
    }
</script>

<style>
#footer{
    width:100%;
    height:.98rem;
    background:gray;
    position:fixed;
    left:0;
    bottom:0;
    z-index:20
}
#footer>ul{
    display:flex;
    height:100%;
    justify-content:space-around;
    align-items:center;
}
#footer>ul>li{
    width:100%;
    height:100%;
   
}
#footer>ul>li>a{
    display:block;
    width:100%;
    line-height:.98rem;
    text-align:center;
    color:#fff;
    font-size:24px;
}
#footer>ul>li>.router-link-active{
    background:red;
    
}
</style>