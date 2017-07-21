$(document).ready(function(){
	var n=0;
	var i;
	$(".shubut").on("tap",function(){
		n=$(this).index();
		$(this).css("background-color","#f00").siblings().css("background-color","#009900");
		console.log(n);
		$(".page").eq(n).stop().fadeIn().siblings().stop().fadeOut(0);
	});
	
	$(".nextbut").on("tap",function(){
		n++;
		$(".page").eq(n).stop().fadeIn().siblings().stop().fadeOut(0);
 		console.log("i="+n);
 		if(n>7){
 			n=8
 		};
 		
 			
	});
		
});