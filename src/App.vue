<template>
  <div id="app">
    <Header v-show="$route.meta.isShowHeader === false ? $route.meta.isShowHeader : true"/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components:{
    Header,
    Footer,
  }
}
</script>

