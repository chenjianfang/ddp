<template>
	<li class="j-left-item" style="">
		<div class="item-child-form item-child" data-id="form">
			<form action method="post" onsubmit="return false" data-id="form-form">
				<!-- chrome autocomplete off bug hack -->
				<input style="display:none" name="hack" data-id="form-hack">
				<input type="password" style="display:none" name="hack1" data-id="form-hack1">
				<div class="form-item" data-id="form-item-username">
					<label for="form-username" data-id="form-flags-username">用户名</label>
					<span class="form-placeholder" data-id="form-placeholder-username">您的账户名</span>
					<input type="text" class="form-remark" id="form-username" maxlength="20" placeholder="" data-id="form-input-username">
				</div>
				<div class="form-item" data-id="form-item-password">
					<label for="form-password" data-id="form-flags-password">密码</label>
					<span class="form-placeholder" data-id="form-placeholder-password">输入密码</span>
					<input type="password" class="form-remark" id="form-password" maxlength="20" placeholder="" data-id="form-input-password">
				</div>
				<div class="form-item" data-id="form-item">
					<label for="form-repassword" data-id="form-flags-repassword">确认密码</label>
					<span class="form-placeholder" data-id="form-placeholder-repassword">再次输入密码</span>
					<input type="password" class="form-remark" id="form-repassword" maxlength="20" placeholder="" data-id="form-input-repassword">
				</div>
				<div class="form-item" data-id="form-item-submit">
					<input type="submit" class="form-submit" value="提交" data-id="form-input-submit">
				</div>
			</form>
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
	.item-child-form{
		box-sizing:border-box;
		z-index:9;
		overflow:hidden;
	}
	.form-item{
		position:relative;
		display:block;
		border:1px solid #ddd;
		height:25px;
		width:180px;
		line-height:25px;
		font-size:12px;
		margin-bottom:10px;
		box-sizing:border-box;
		label{
			float:left;
			width: 60px;
			height:100%;
			text-align:center;
		}
	}
	.form-placeholder{
		position:absolute;
		left:0;
		width:100%;
		height:25px;
		line-height:25px;
		text-align:left;
		padding-left:60px;
		box-sizing:border-box;
		color:rgb(204,204,204);
	}
	.form-remark{
		border:0 none;
		width:118px;
		outline:0;
	}
	.form-submit{
		display:block;
		height:25px;
		width:100%;
		background:red;
		border:0 none;
		color:#fff;
		line-height:25px;
		text-align:center;
	}
</style>