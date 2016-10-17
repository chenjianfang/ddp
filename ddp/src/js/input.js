import newEleOpera from './common/newEleOpera';
export default{
	init(){
		$(".right-box").on("click",".item-child-input",function(){ //单击输入框input
			newEleOpera.sigleClick($(this),"input");
		});
		
	}
}
