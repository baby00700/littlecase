$(document).ready(function(){
	$("#caidan1").click(function(){
		$("#firpage").show().siblings().hide();
		console.log("show page1");
	});
	$("#caidan2").click(function(){
		$("#secpage").show().siblings().hide();
		console.log("show page2");
	});
	$("#caidan3").click(function(){
		$("#thipage").show().siblings().hide();
		console.log("show page3");
	});
	$("#caidan4").click(function(){
		$("#forpage").show().siblings().hide();
		console.log("show page4");
	});
});
