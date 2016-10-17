<template>
	<li class="j-left-item" style="">
		<div class="item-child-search item-child" data-id="search">
			<span class="search-input" data-id="search-input"></span>
			<span class="search-submit" data-id="search-submit">搜索</span>
		</div>
	</li>
</template>

<script>
	export default{
		data(){
			return{
				content:""
			}
		},
		ready(){
			
		},
		methods:{
			
		}
	}
</script>

<style lang="sass">
	@charset "utf-8";
	@mixin flex(){   //定义flex布局
	    display: -webkit-box;
	    display: -moz-box;
	    display: -ms-flexbox;
	    display: -webkit-flex;
	    display: flex;
	}

	@mixin flex-justify-left(){ //左对齐
	    -webkit-box-pack:start;
	    -moz-justify-content:flex-start;
	    -webkit-justify-content:flex-start;
	    justify-content: flex-start;
	}
	@mixin flex-justify-right(){ //右对齐
	    -webkit-box-pack:end;
	    -moz-justify-content:flex-end;
	    -webkit-justify-content:flex-end;
	    justify-content: flex-end;
	}
	@mixin flex-justify-between(){  //两端对齐
	    -webkit-box-pack:justify;
	    -moz-justify-content:space-between;
	    -webkit-justify-content:space-between;
	    justify-content: space-between;
	}
	@mixin flex-justify-center(){  //居中对齐
	    -webkit-box-pack:center;
	    -moz-justify-content:center;
	    -webkit-justify-content:center;
	    justify-content: center;
	}
	@mixin flex-justify-around(){  //平均分布
	    -webkit-box-pack:justify;
	    -moz-justify-content:space-around;
	    -webkit-justify-content:space-around;
	    justify-content: space-around;
	}
	@mixin flex-align(){ //上下居中
	    -webkit-box-align:center;
	    -moz-align-items:center;
	    -webkit-align-items:center;
	    align-items: center;
	}
	@mixin flex-orient-row(){ //从左到右排列
	    -webkit-box-direction:normal;
	    -webkit-box-orient:horizontal;
	    -moz-flex-direction:row;
	    -webkit-flex-direction:row;
	    flex-direction: row;
	}
	@mixin flex-orient-col(){ //从上到下排列
	    -webkit-box-direction:normal;
	    -webkit-box-orient:vertical;
	    -moz-flex-direction:column;
	    -webkit-flex-direction:column;
	    flex-direction: column;
	}

	@mixin flex-item($num){ //子元素伸缩数
	    -webkit-box-flex:$num;
	    -moz-box-flex:$num;
	    -webkit-flex:$num;
	    -ms-flex:$num;
	    flex: $num;
	}
	.item-child-search{
		height:36px;
		width:180px;
		box-sizing:border-box;
		z-index:9;
		overflow:hidden;
	}
	.search-input{
		float:left;
		height:100%;
		border:1px solid #b6b6b6;
		box-sizing:border-box;
		line-height:36px;
		padding-left:5px;
		text-align:left;
		width:72%;
	}
	.search-submit{
		float:left;
		background:#3385ff;
		border:0;
		cursor:pointer;
		@include flex();
		@include flex-align();
		@include flex-justify-center();
		color:#fff;
		font-size:14px;
		height:100%;
		width:28%;
	}
</style>