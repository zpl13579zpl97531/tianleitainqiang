<template>
       <div class="top">
             <div id="header">
            <div class="header_l" @click="handleToggle()">
                <a  href="javascript:;"class="bar">
                    <i class="iconfont">&#xe606;</i>
                    <h3>天垒天强</h3>
                </a>
            </div>
            <div class="header_r">
                <ul>
                    <li>
                        <span>天津</span>

                        <i class="iconfont">&#xe612;</i>
                    </li>
                    <li>
                        <i class="iconfont">&#xe60d;</i>
                    </li>
                </ul>
            </div>
        </div>
        


           <slidebar-com  v-show="show_bar"></slidebar-com>
            <mask-com v-show="show_bar" @handleShow="hadlemask"></mask-com>
 <footer-com ></footer-com>
       </div>
</template>

<script>

import slideBar from "./slidebar";

import mask from "./mask";

import footer from "./footer";

export default {

    data(){
        return {

            show_bar:false
        }
    },

    components:{
        "slidebar-com":slideBar,
            "mask-com":mask,
            "footer-com":footer
    },

    methods:{

        handleToggle(){

            this.show_bar = !this.show_bar;
        },
         hadlemask(val){

            this.show_bar = val;
        }
    }
}

</script>

<style scoped>
.top{
    width:100%;
    height:100%;
}
#header{
    width:100%;
    height:1rem;
    background:#282828;
    position:fixed;
    left:0;
    top:0;
    display:flex;
    justify-content:space-between;
    z-index:12
}
.bar{
    width:2.64rem;
    height:100%;
    display:flex;
    justify-content:space-between;
}
.bar>i,.bar>h3{
    line-height:1rem;
    text-align:center;
    color:#fff;
}
.bar>i{
    width:.96rem;
    border-right:2px solid #222;
    color:#999;
    font-size:0.32rem;
}
.bar>h3{
    padding:0 .28rem;
    font-weight:normal;
    width:2.4rem
}
.header_r{
    width:2.08rem;
    height:1rem;
}

.header_r>ul{
    width:2.08rem;
    height:1rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
}
.header_r>ul>li{
  color:#999;
  font-size:.32rem;
  height:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;

}

.header_r>ul>li:nth-child(2) i{
    width:.96rem;
    text-align:center;
    font-size:.32rem;
}




</style>