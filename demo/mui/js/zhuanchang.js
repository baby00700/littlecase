$(document).ready(function(){
	
	$(".but1").click(function(){
		$(".box1").stop().animate({
			width:'50%',
			height:'50%'
		});
	});
	
	$(".but2").click(function(){
		$(".box1").stop().animate({
			width:'50%',
			height:'50%'
		});
	});
	
	
	$(".but3").click(function(){
		$(".box1,.box2").animate({
			width:'50%',
			height:'50%'
		},function(){
			$(".box1").animate({
				left:'80%'
			},function(){
				$(".box1").css("z-index","256").next().css("z-index","253").prev().animate({
					left:'0px'
				},function(){
					$(".box1").animate({
						width:'100%',
						height:'100%'
					});
				});
				
			});
		});
		
		
	});
	
	
	
	$(".but4").click(function(){
		
		$(".box1,.box2").animate({
			width:'50%',
			height:'50%'
			
		},function(){
			$(".box2").animate({
				left:'80%'
			},function(){
				$(".box2").css("z-index","256").prev().css("z-index","253").next().animate({
					left:'0px'
				},function(){
					$(".box2").animate({
						width:'100%',
						height:'100%'
					});
				});
			});
		});
		
		
	});
	
	

});
