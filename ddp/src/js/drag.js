export default {
	init(){
		var lockDrag = false;
		$(".item-child").draggable({  //左项 拖动元素
			scroll:true,
			helper:"clone",
			revert:"invalid",
			appendTo:"body",
			start:function(event,ui){
				lockDrag = true;
			},
			stop:function(event,ui){
				lockDrag = false;
			}
		});
		
		$(".right-box").droppable({
			accept: ":not(.ui-sortable-helper)",
			drop:function(event,ui){
				console.log(ui);
				if(!lockDrag){
					return false;
				}

				const _this = $(this);

				var style = {
					left:ui.offset.left+"px",
					top:ui.offset.top+"px",
					position:"absolute"
				}
				var resultELe = ui.draggable[0].outerHTML.replace("ui-draggable ui-draggable-handle","");

				//如果是输入框
				if(/item-child-input/.test(resultELe)){
					resultELe = '<input type="text" class="flags item-child-input item-child" style="width:180px;height:30px;" data-id="input">'

					$(resultELe).css(style).draggable({
						containment:".right-box"
					}).appendTo(this);

				//如果是文本框
				}else if(/item-child-txt/.test(resultELe)){ 
					resultELe = '<textarea class="flags item-child-txt item-child" style="width:180px;height:50px;" data-id="textarea"></textarea>';

					$(resultELe).css(style).draggable({
						containment:".right-box"
					}).appendTo(this);
				
				//如果是搜索组件
				}else if(/item-child-search/.test(resultELe)){
					resultELe = `
						<div class="item-child-search item-child flags" data-id="search">
							<input class="search-input" data-id="search-input" />
							<span class="search-submit" data-id="search-submit">搜索</span>
						</div>
					`;
					$(resultELe).css(style).draggable({
						containment:".right-box"
					}).appendTo(this);
				}else if(/item-child-text/.test(resultELe)){
					$(resultELe).css(style).draggable({
						/*helper:"original",*/
						containment:".right-box"
					}).resizable().appendTo(this);
				}else{
					$(resultELe).css(style).draggable({
						containment:".right-box"
					}).addClass("flags").appendTo(this);
				}
			}
		})

	}
}

