import newEleOpera from './common/newEleOpera';
export default{
	init(){
		$(".right-box").on("click",".item-child-txt",function(){ //单击文本框textarea
			newEleOpera.sigleClick($(this),"textarea");
		});
	}
}