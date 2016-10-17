/*
* sigleClick函数接收两个参数：arg指目标元素，type指目标元素的类型
*
*
*/
export default {
	sigleClick(arg,type){
		let obj = this;
		let _this = arg;
		var left = _this.css("left");
		var top = _this.css("top");
		var width = _this.css("width");
		var height = _this.css("height");
		$(".creatInput").remove();
		$(".toolbox").remove();
		_this.after(`
			<div class="creatInput flags" style="left:${left};top:${top};width:${width};height:${height}"></div>
		`);
		$(".creatInput").draggable({
			helper:"original",
			containment:".right-box",
			drag:function(event,ui){ //拖动跟随
				let left = ui.offset.left;
				let top = ui.offset.top;
				$(this).prev().css({
					left:left,
					top:top
				});
			}
		}).resizable({
			resize:function(event,ui){
				console.log(ui);
				$(this).prev().css({
					width:ui.size.width+"px",
					height:ui.size.height+"px"
				});
			}
		}).dblclick(function(){
			const _this = $(this);
			const temp = _this.prev(); //输入框
			temp.focus();
			_this.remove();
			obj.palette(temp,type); 
		});
	},

	palette(arg,type){
		console.log(typeof type);
		const left = arg[0].offsetLeft;
		const top = arg[0].offsetTop;
		const width = arg[0].offsetWidth;
		const height = arg[0].offsetHeight;
		
		$(".toolbox").remove();

		let valEle = "";
		if(type === "input"){
			valEle = `
				<li class="body-box-li">
					<label class="box-text-tips">输入类型</label>
					<div class="add-subtract">
						<select class="box-select">
							<option value="text">文本</option>
							<option value="password">密码</option>
							<option value="email">邮件</option>
						</select>
					</div>
				</li>
			`;
		}
		

		let block = `

			<div class="toolbox flags" style="left:${left+width+10}px;top:${top}px;">
				<div class="header-box">
					<span class="header-box-setting">设置</span>
					<span class="header-box-delete js-header-box-delete">X</span>
				</div>

				<div class="body-box">
					<ul>
						<li class="body-box-li">
							<div class="add-subtract position-x">
								<span class="box-subtract as-button">-</span>
								<input type="text" class="box-input-number" value="${left}" data-id="x" />
								<span class="box-add as-button">+</span>
							</div>
							<div class="add-subtract position-y">
								<span class="box-subtract as-button">-</span>
								<input type="text" class="box-input-number" value="${top}" data-id="y" />
								<span class="box-add as-button">+</span>
							</div>
						</li>
						<li class="body-box-li">
							<div class="add-subtract position-width">
								<span class="box-subtract as-button">-</span>
								<input type="text" class="box-input-number" value="${width}" data-id="w" />
								<span class="box-add as-button">+</span>
							</div>
							<div class="add-subtract position-height">
								<span class="box-subtract as-button">-</span>
								<input type="text" class="box-input-number" value="${height}" data-id="h" />
								<span class="box-add as-button">+</span>
							</div>
						</li>
						<li class="body-box-li">
							<label class="box-text-tips">圆角半径</label>
							<div class="add-subtract">
								<span class="box-subtract as-button">-</span>
								<input type="text" class="box-input-number" data-id="r" />
								<span class="box-add as-button">+</span>
							</div>
						</li>
						${valEle}
					</ul>
				</div>
			</div>

		`;
		$(arg).parent().append(block);

		function position(data,_addResult){
			switch(data){
				case "x":
					let leftWidth = $(".left-box").css("width").replace(/px/,"");  //左侧元素的宽度
					_addResult = +_addResult < +leftWidth ? +leftWidth : +_addResult;
					arg.css("left",_addResult+"px");
					break;
				case "y":
					arg.css("top",_addResult+"px");
					break;
				case "w":
					arg.css("width",_addResult+"px");
					break;
				case "h":
					arg.css("height",_addResult+"px");
					break;
				case "r":
					arg.css("borderRadius",_addResult+"px");
					break;
				case "s":
					arg.attr("type",_addResult);
					break;
			}
		}

		//减
		$(".box-subtract").click(function(){
			const _sub = $(this).next();
			const data = _sub.data("id");
			const _subResult = _sub.val()-1;
			_sub.val(_subResult);
			position(data,_subResult);
		});

		//加
		$(".box-add").click(function(){
			const _add = $(this).prev();
			const data = _add.data("id");
			const _addResult = +_add.val()+1;
			_add.val(_addResult);
			position(data,_addResult);
		});
		//关闭
		$(".js-header-box-delete").click(function(){
			$(".toolbox").remove();
		});
		//监听弹出框所有input事件
		$(".body-box").on("input",'input[type=text]',function(){
			const _this = $(this);
			let value = _this.val().trim();
			let id = _this.data("id");
			position(id,value);
		});

		//获取select选中的值：$("#box-select option:selected").val();
		$(".box-select").change(function(){
			position("s",$(".box-select option:selected").val());
		});
	}
}