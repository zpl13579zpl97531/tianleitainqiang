<template>
    <div class="bar">
        <ul>
            <li v-for="(item,index) in bar">
                <router-link :to="item.name">{{item.title}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
//组件中引用vuex，才可以调用里面的数据，


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


<style scoped>
.bar{
    width:75%;
    height:100%;
    background:#282828;
    position:fixed;
    left:0%;
    top:1rem;
    z-index:5;
    animation:zpl2 300ms;
}
.bar>ul{
    width:100%;
}
.bar>ul>li{
    width:100%;
    line-height:1.02rem;
    border-bottom:2px dotted #333;
    padding:0 .32rem;
    font-size:.28rem;
}
.bar>ul>li>a{
    color:#9a9a9a;
}

@keyframes zpl2{

    0%{
        transform:translateX(-100%);
    }
    100%{
        transform:translateX(0%);
    }
}



</style>