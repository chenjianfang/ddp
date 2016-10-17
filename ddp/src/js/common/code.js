export default{
	init(){

		var _this = this;

		let tempUser = _this.localStorageUser();

		$(".js-code").click(function(){
			let wrapperBox = $(".right-box").find(".item-child-text");
			if(wrapperBox.length > 0){

				/*外层块的位置信息*/
				let point = _this.calcPosition(wrapperBox);

				let ic = $(".right-box").find(".item-child");
				let tags = [];
				let tagsPoint = []; //获得在内层元素的属性，包括元素字符串和样式
				if(ic.length > 1){ //包含需要的标签
					$.each(ic,function(index,ele){
						if($(ele).hasClass("item-child-text")){
							return;
						}
						tags.push(ele);
					});

					//计算出最大框的point坐标区间
					let y = point.leftTop[1];
					let x = point.leftTop[0];
					let by = point.rightBottom[1];
					let bx = point.rightBottom[0];

					//外层块包含的标签的位置信息
					tags.map(function(value){
						let valEle = $(value);
						let temp = _this.calcPosition(valEle);

						let _ay = temp.leftTop[1];
						let _ax = temp.leftTop[0];
						let _by = temp.rightTop[1];
						let _bx = temp.rightTop[0];
						let _cy = temp.leftBottom[1];
						let _cx = temp.leftBottom[0];
						let _dy = temp.rightBottom[1];
						let _dx = temp.rightBottom[0];

						if( _ay > y && 
							_ax > x && 

							_by > y && 
							_bx > x && 

							_cy > y && 
							_cx > x && 

							_dy > y && 
							_dx > x && 

							_ay < by && 
							_ax < bx && 

							_by < by && 
							_bx < bx && 

							_cy < by && 
							_cx < bx && 

							_dy < by && 
							_dx < bx

							){

							_this.travCompon(value);
							let tempEle = valEle[0].outerHTML.replace(/(class="[^"]+")|(style="[^"]+")/g,"");
							let obj = {};
							obj.ele = tempEle;  /*单个组件html*/
							obj.style = _this.style; /*单个组件css*/
							_this.style = [];
							tagsPoint.push(obj);
						}
					});
					(function(){
						console.log(tagsPoint);
						$(".review-code textarea").html("");
						//计算相对外层的位置 //得到工作区的X,Y位置
						let top = +wrapperBox.css("top").replace('px','');
						let left = +wrapperBox.css("left").replace('px','');

						//得到代码
						let codeDev = "";
						tagsPoint.map(function(value){
							let tempEle = value.ele;  //组件html元素字符串；
							let postionLock = false;
							//遍历组件的节点  得到样式的值
							value.style.map(function(val){
								for(let tem in val){ /*这里只有一个属性，就是元素每个节点对应的data-id的属性值*/
									let style = "";
									//相对于工作区的定位
									if(!postionLock){
										if(val[tem].top.length > 0){
											val[tem].top = (+val[tem].top.replace("px","") - top)+"px";
										}
										if(val[tem].left.length > 0){
											val[tem].left = (+val[tem].left.replace("px","") - left)+"px";
										}
									}
									postionLock = true;

									for(let st in val[tem]){
										style += `${st}:${val[tem][st]};`;
									}

									tempEle = tempEle.replace(new RegExp(`data-id=\"${tem}\"`),`data-id=\"${tem}\" style="${style}"`);
								}
							});
							codeDev += tempEle;
						});
						console.log(codeDev);
						//-----把代码字符串传到后台处理
						
						$.ajax({
							type:"POST",
							url:"fileCode",
							dataType:"json",
							data:{
								tempUser:tempUser,
								data:codeDev
							},
							success:function(data){
								console.log(data);
								if(data.status === "0000"){
									
								}
							},
							error:function(){
								console.log("updata code error")
							}
						});

						//得到HTML元素
						let _html = codeDev.replace(/style="[^"]+"/g,"");
						_html = _html.replace(/data-id/g,"class");

						$(".review-code textarea").html(_html);
						$(".review-code").show();

						$(".downfile").attr("href",`/lib/downfile.html?filename=downloadCss&tempUser=${tempUser}.css`);
					})();
					


				}else{
					alert("请拖入你需要的标签");
				}

			}else{
				alert("请拖入工作区");
			}
		});
	},
	calcPosition(wrapperBox){
		const left = wrapperBox.css("left").replace("px","")-0;
		const top = wrapperBox.css("top").replace("px","")-0;
		const width = wrapperBox.css("width").replace("px","")-0;
		const height = wrapperBox.css("height").replace("px","")-0;

		//计算出框框的4个角的坐标
		let point = {
			leftTop: [left,top],
			rightTop: [left+width,top],
			leftBottom:[left,top+height],
			rightBottom:[left+width,top+height]
		};
		return point;
	},

	//获得元素的html元素和css样式
	style: [],  //作用：临时存储一下单个组件的样式
	travCompon(arg){
		let _this = this;
		let cssArr = [
			"background",
			"border",
			"box-sizing",
			"box-shadow",
			"color",
			"cursor",
			"display",
			"font-size",
			"text-align",
			"float",
			"width",
			"height",
			"left",
			"top",
			"line-height",
			"margin-bottom",
			"margin-left",
			"margin-right",
			"margin-top",
			"opacity",
			"overflow",
			"outline",
			"padding-bottom",
			"padding-left",
			"padding-right",
			"padding-top",
			"position",
			"word-break",
			"z-index",
			];
		
		let getCode = function(ar){
			let _arg = $(ar);
			let id = _arg.data("id");
			_this.style.push(allCss(ar,id));
			if(_arg.children().length){
				_arg.children().map(function(index,value){
					getCode(value);
				});
			}	
		};
		let allCss = function(target,id){
			let _tag = $(target);
			let tempCss = {};
			cssArr.map(function(value){
				// tempCss.push(_tag.css(value));
				tempCss[value] = _tag.css(value);
			});
			let obj = {};
			obj[id] = tempCss;
			return obj;
		};
		getCode(arg);
	},
	localStorageUser(){
		if(typeof localStorage.tempUser !== "undefined"){
			return localStorage.tempUser;
		}else{
			let useArr = "0123456789abcdefghijklmnopqrstuvwxyz_";
			let len = useArr.length;
			let tempUser = "";
			for(let i = 0 ; i < 3 ; i++ ){
				let num = Math.floor(Math.random()*len);
				tempUser += useArr.charAt(num);
			};
			tempUser += new Date().getTime();
			localStorage.tempUser = tempUser;
			return tempUser;
		}
	}
}