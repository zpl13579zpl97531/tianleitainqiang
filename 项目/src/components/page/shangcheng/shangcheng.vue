<template>
    <div class="shangcheng page">
        <shangcheng2-com></shangcheng2-com>
        <shangcheng3-com></shangcheng3-com>
      
    </div>
</template>

<script>
import shangcheng2 from "./shangcheng2";
import shangcheng3 from './shangcheng3';

export default {
    
    components:{

        "shangcheng2-com":shangcheng2,

        "shangcheng3-com":shangcheng3
        
    }
}
</script>

<style>

</style>