<template>
       <div class="mask" @click="handleShow()"></div>
</template>
<script>
    export default {
        methods:{

            //子给父亲传值，让其隐藏
            handleShow(){
               this.$emit("handleShow",false)  
            }
        }
    }
</script>
<style>

.mask{
    width:100%;
    height:100%;
    background:rgba(0,0,0,.5);
    position:fixed;
    left:0;
    top:1rem;
    animation:zpl 300ms;
    z-index:2

}





@keyframes zpl{
    0%{
        opacity:0
    }
    100%{
        opacity:.5
    }
}



</style>