<template>
    <div class="cinema page">
        <cinema2-com></cinema2-com>
        <cinema3-com></cinema3-com>
      
    </div>
</template>

<script>
import cinema2 from "./cinema2";
import cinema3 from './cinema3';

export default {
    
    components:{

        "cinema2-com":cinema2,

        "cinema3-com":cinema3
        
    }
}
</script>

<style>

</style>
