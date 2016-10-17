var name = localStorage.username;
if(String(name).length === 0){
	temp = prompt("请输入您的昵称");
	if(temp !== null && temp !==""){
		name = temp;
		localStorage.username = temp;
	}else{
		name = "匿名";
		localStorage.username = "匿名";
		alert("将以“匿名”来评论！")
	}
}

$.ajax({
	type:"get",
	dataType:"json",
	url:"/initMessage",
	success:function(data){
		console.log(data);
		var result = data.result;
		var arr = [];
		result.map(function(value){
			var ele = "";
			ele += '<li class="list-msg">';
			ele += '<p class="first">';
			ele += '<span class="name">'+value.name+'</span>';
			ele += '<span class="time">'+value.time+'</span>';
			ele += '</p>';
			ele += '<p class="content">'+value.msg+'</p>';
			ele += '</li>';
			arr.push(ele);
		});
		arr.reverse();
		$('.wrapper ul').append(arr.join(""));

		var box = document.querySelector(".wrapper ul");
		var sh = box.scrollHeight;
		var ch = box.clientHeight;
		$('.wrapper ul').animate({"scrollTop":(sh-ch)+"px"});
	}
});


var socket = io();
/*提交评论*/
$('form').submit(function(){
	var msg = $('#msg').val();
	if(msg.length === 0){
		console.log("请输入值");
		return false;
	}
	
	var time = getTime();

	var dataObj = {
		msg:msg,
		name:name,
		time:time
	};
	socket.emit('websocket',dataObj);
	/*调用保存数据接口*/
	$.ajax({
		type:"POST",
		url:"/saveMessage",
		dataType:"json",
		data:dataObj,
		success:function(data){
			if(data.status === "0000"){

			}
		},
		error:function(){
			console.log("xhr error");
		}
	});

	$('#msg').val('');
	return false;
});
socket.on('websocket',function(msg){
	console.log(msg);
	var ele = "";
	ele += '<li class="list-msg">';
	ele += '<p class="first">';
	ele += '<span class="name">'+msg.name+'</span>';
	ele += '<span class="time">'+msg.time+'</span>';
	ele += '</p>';
	ele += '<p class="content">'+msg.msg+'</p>';
	ele += '</li>';
	$('.wrapper ul').append(ele);
	var box = document.querySelector(".wrapper ul");
	var sh = box.scrollHeight;
	var ch = box.clientHeight;
	$('.wrapper ul').animate({"scrollTop":(sh-ch)+"px"});
});


function getTime(){
	var date = new Date();
	var mon = date.getMonth() + 1;
	mon = mon < 10 ? "0"+ mon : mon;

	var dd = date.getDate();
	dd = dd < 10 ? "0"+ dd : dd;

	var hh = date.getHours();
	hh = hh < 10 ? "0"+ hh : hh;

	var mm = date.getMinutes();
	mm = mm < 10 ? "0"+ mm : mm;

	var ss = date.getSeconds();
	ss = ss < 10 ? "0"+ ss : ss;

	return mon+"月"+dd+"日 "+hh+":"+mm+":"+ss;
}