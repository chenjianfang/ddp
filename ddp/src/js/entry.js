import leftBox from './leftBox.vue';
import rightBox from './rightBox.vue';
import drag from './drag';
import input from './input';
import text from './text';
import search from './search/search';
import code from './common/code';
import form from './form/form';

Vue.config.debug = true;

const vm = new Vue({
	el:'#wrapper',
	components:{
		leftBox,
		rightBox
	},
	data:{

	},
	methods:{

	}
});

drag.init();
input.init();
text.init();
code.init();
search.init();
form.init();
(function(){
	$("#wrapper").click(function(){
		$(".creatInput").remove();
		$(".toolbox").remove();
	});
	$("#wrapper").on("click",".flags",function(e){
		e.stopPropagation();
	});

	$(".review-code textarea").click(function(e){
		e.stopPropagation();
	});
	$(".review-code").click(function(){
		$(this).hide();
	});
	$(".downfile").click(function(e){
		e.stopPropagation();
	});
})();


