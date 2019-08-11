<template>
  <div class="header">
     <div class="header-left">
			 <div class="iconfont back-icon">&#xe653;</div>
		</div>
     <div class="header-input">
			 <span class="iconfont">&#xe60a;</span>
			 输入城市或者景点</div>
     <div class="header-right">城市
      <span class="iconfont arrow-icon">&#xe600;</span>
		 </div>
  </div>
</template>

<script>
  export default {
    name:"HomeHeader"
  }
</script>

<style scoped>
   
   .header{
		 display: flex;
		 line-height: 0.86rem;
		 background: #00bcd4;
		 color:#fff;
	 }
		.header-left{
			width: 0.64rem;
			float:left;
		}
		.back-icon{
			text-align: center;
		font-size:.5rem;	
		}
	 .header-input{
		 flex:1;
		 height:.64rem;
		 margin-top:.12rem;
		 line-height:.64rem;
		 margin-left:.2rem;
		 color:#ccc;
		 background: #fff;
		 border-radius: .1rem;
		 padding-left:.2rem;
	 }
	 .header-right{
		 width:1.24rem;
		 float: right;
		 text-align:center;
	 }
	 .arrow-icon{
		 font-size:.24rem;
		 margin-left:-.04rem;
	 }
</style>