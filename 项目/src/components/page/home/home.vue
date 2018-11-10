<template>
    <div class="home page">
        <banner-com></banner-com>
        <nowplay-com></nowplay-com>
        <upcom-com></upcom-com>
    </div>
</template>

<script>
import banner from "./banner";
import nowplay from './nowPlay';
import upcom from "./upcom";
export default {
    
    components:{

        "banner-com":banner,

        "nowplay-com":nowplay,
         "upcom-com":upcom
    }
}
</script>

<style>

</style>
