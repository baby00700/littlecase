$(document).ready(function(){
	/*var dh=$(".daohanglan").height();

	var ch=$(".caidan").height();

	var mh=(dh-ch)/2;*/
	$(".caidan").hover(function(){
		$(this).removeClass("hover2").addClass("hover1");
	},function(){
		console.log("ok");
		$(this).removeClass("hover1").addClass("hover2");
	});

	
	
	
	
});
