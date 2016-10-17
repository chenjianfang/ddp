<template>
	<div class="left-box">
		<ul class="j-left-list">
			<li class="j-left-item">
				<div class="item-child-text item-child"></div>
			</li>
			<input-vue></input-vue>
			<text-vue></text-vue>
			<search-vue></search-vue>
			<form-vue></form-vue>
		</ul>
	</div>
</template>

<script>
	import inputVue from './input.vue';
	import textVue from './text.vue';
	import searchVue from './search/search.vue';
	import formVue from './form/form.vue';
	export default{
		components:{
			textVue,
			inputVue,
			searchVue,
			formVue
		},
		data(){
			return {
				lists:[
					{msg:"文本框"},
					{msg:"数字框"},
					{msg:"电子邮件框"},
					{msg:"密码框"}
				]
			}
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
	.left-box{
		@include flex-item(1);
		height:100%;
		border-right:1px solid #000;
	}
	.j-left-list{
		@include flex();
		@include flex-justify-center();

		display:block;
		width:180px;
		margin:0 auto;
		text-align:center;
		padding:20px;
	}
	.j-left-item{
		display:block;
		margin-bottom:20px;
		cursor:pointer;
	}
	.item-child-text{
		height:180px;
		width:180px;
		border:1px solid #000;
		outline:none;
		z-index:1;
	}


</style>