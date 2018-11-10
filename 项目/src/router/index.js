import Vue from 'vue'
import Router from 'vue-router'
import home from "../components/page/home/home.vue";
import movie from "../components/page/movie/movie.vue";
import nowPlay from "../components/page/movie/nowPlay.vue";
import coming from "../components/page/movie/coming.vue";
import xiangqing from "../components/page/movie/xiangqing.vue";
import cinema from "../components/page/cinema/cinema.vue";
import shangcheng from "../components/page/shangcheng/shangcheng.vue";
import my from "../components/page/my/my.vue";
import card from "../components/page/card/card.vue";
//引用组件。，进行组建个的跳转，去个名字，router-link:to,name.进行跳转，
//写在组件标签内部，利于，跳转，传值，store.存数数据，
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/home"
    },{
      path:"/home",
      name:"home",
      component:home
    }
    ,{
      path:"/movie",
      name:"movie",
      component:movie,
      children:[
        {
          path:"nowPlay",
          name:"nowPlay",
          component:nowPlay
        },{
          path:"coming",
          name:"coming",
          component:coming
        },{
          path:"xiangqing/:id",
          name:"xiangqing",
          component:xiangqing
        }
      ]
    },{
      path:"/cinema",
      name:"cinema",
      component:cinema
    },{
      path:"/shangcheng",
      name:"shangcheng",
      component:shangcheng
    },{
      path:"/my",
      name:"my",
      component:my
    },{
      path:"/card",
      name:"card",
      component:card
    }
  ]
})






