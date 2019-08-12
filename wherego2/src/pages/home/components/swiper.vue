<template>
<div class="wrapper">
	 <swiper :options="swiperOption">
    <swiper-slide v-for="item of swiperList" :key="item.id" >
   <img class="swiper-img" :src="item.imgUrl" />
		</swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
   
  </swiper>
	</div>
</template>

<script>
	export default {
		name:'HomeSwiper',
		data(){
		return{
      swiperOption: {
				loop:true,
        autoplay: 3000,
        pagination: '.swiper-pagination',
     
		},
		swiperList:[{
			id:'0001',
			imgUrl:"//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/3f5ff03fa0c024b930f515e63ae2c702.jpg_945x288_7dff4510.jpg"

		},{
	id:'0002',
			imgUrl:
	"//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/b72df47942fb28fcd7bf481f01e785f5.jpg"
		},{
			id:'0002',
			imgUrl:
			"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/a31023dce497dfebeaced802008c6209.jpg"
		}
		]	
		}
	}
	}
</script>

<style scoped>
.wrapper >>> .swiper-pagination-bullet-active{
	    background: #fff ;
}
.wrapper{
	width:100%;
	height:0;
	overflow: hidden;
	background:#eee;
	padding-bottom: 31.25%;
}
.swiper-img{
     width:100%;
}
</style>