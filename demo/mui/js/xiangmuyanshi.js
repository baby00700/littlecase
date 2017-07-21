$(document).ready(function(){
	$("#clickbut").click(function(){
		$(".chacon").stop().show().animate({
			height:'200px'
		},200).animate({
			
			width:'95%'
		},400);
		
		
	});
	
		$(".closebut").click(function(){
			$(".chacon").animate({
				height:'0px'
				
			},300).animate({
				width:'1px'
			}).hide(0);
		});
		
		
		
		
		
	
});
