$(document).ready(function(){
	$(".box").hover(function(){
		$(this).children().stop().fadeIn().removeClass("zhezhaodh1").addClass("zhezhaodh").css("width","100%").children().fadeIn(2500);
	},function(){
		$(this).children().children().stop().fadeOut(400).parent().stop().delay(500).remove("zhezhaodh").addClass("zhezhaodh1").css("width","0px").stop().fadeOut();
	});
});
