<template>
  <div id="app">
      <header-com></header-com>
      <router-view></router-view>

  </div>
</template>

<script>
import header from "./components/common/header";
export default {
  components:{
    "header-com":header
  }
}
</script>

<style>
#app{
  width:100%;
  height:100%;
}
.page{
  padding-top:1rem;
  
}
</style>

