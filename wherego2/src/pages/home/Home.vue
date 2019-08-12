<template>
  <div>
     <HomeHeader/>
		 <HomeSwiper/>
		 
  </div>
</template>

<script>
 import HomeHeader from './components/Header'
 import HomeSwiper from './components/swiper'
  export default {
    name:'Home',
    components:{
      HomeHeader,HomeSwiper
    }
   
  }
</script>

<style >

</style>