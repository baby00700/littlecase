$(document).ready(function(){
	$(function(){
		var timer;
		$(window).scroll(function(){
			clearTimeout(timer);
			if($(document).scrollTop()>200){
				//var txt1=$(document).scrollTop();
				//console.log(txt1);
				$(".sectionbar").addClass("fixed1");
			}
			else{
				$(".sectionbar").removeClass("fixed1");
			}
		});
	});
	
});
