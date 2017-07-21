$(document).ready(function(){
	
	var n;//当前点击流程
	var liucheng=5;//后端获取01234567对应12345678获取流程
	var benciliucheng;//本次流程
	benciliucheng=liucheng;
	var buttn=benciliucheng-1;
	
//默认状态	默认头部本步骤高亮 默认所获取的状态之前的页面不可见 默认显示本次流程状态页面
	//将按钮样式变化以及切换div封装为函数//初始状态下按钮
	function buttonclick(buttn){
		buttn=benciliucheng-1;
		if(buttn<=0){
			buttn=0;
		}else{
			$(".spage").eq(buttn).find(".subbut").removeClass("subbut").addClass("subbut-visited").hide().next(".sub-non").show();
			$(".spage").eq(benciliucheng).show().siblings().hide();
			$(".spage").eq(buttn).prevAll().find(".subbut").removeClass("subbut").addClass("subbut-visited").hide().next(".sub-non").show();
		}
	}
	buttonclick(buttn);//默认执行初始按钮状态；



	//定义顶部高亮封装为函数
	function gaoliangtop(n){
		$('.wizard-steps li').eq(n).children().first().css("border-color","#1296DB").css("background","#1296DB").css("color","#fff").parent().siblings().children(".step").css("background-color","#CED1D6").css("border-color","#CED1D6").css("color","black");
		$(".wizard-steps  li").eq(n).children().last().css("color","#1296DB").parent().siblings().children(".title").css("color","#333");
		$(".wizard-steps li").eq(n).removeClass().addClass('wizard-steps li ' +"gaoliang").siblings().removeClass('wizard-steps li ' +"gaoliang");
	}
	//顶部左右滚动点击高亮代码 开始 默认状态 liucheng
	var morenliucheng=liucheng; //
	//console.log(n);
	$('.wizard-steps li').eq(morenliucheng).children().first().css("border-color","#1296DB").css("background","#1296DB").css("color","#fff").parent().siblings().children(".step").css("background-color","#CED1D6").css("border-color","#CED1D6").css("color","black");
	$(".wizard-steps li").eq(morenliucheng).children().last().css("color","#1296DB").parent().siblings().children(".title").css("color","#333");
	$(".wizard-steps li").eq(morenliucheng).removeClass().addClass('wizard-steps li ' +"gaoliang").siblings().removeClass('wizard-steps li ' +"gaoliang");
	
	

	// //页面切换动画 点击顶部导航切换
	// $(".wizard-steps li").click(function(){
	// 	n=$(this).index();
	// 	console.log(n);
	// 	//如果当前点击状态大于当前状态 不允许点击未进行的流程
	// 	if(n>benciliucheng){
	// 		n=benciliucheng;
	// 		$(".spage").eq(n).show().siblings().hide();
	// 	}else if(n<benciliucheng&&n>liucheng){
	// 		$('.wizard-steps  li').eq(n).children().first().css("border-color","#1296DB").css("background","#1296DB").css("color","#fff").parent().siblings().children(".step").css("background-color","#CED1D6").css("border-color","#CED1D6").css("color","black");
	// 		$(".wizard-steps  li").eq(n).children().last().css("color","#1296DB").parent().siblings().children(".title").css("color","#333");
	// 		$(".wizard-steps  li").eq(n).removeClass().addClass('wizard-steps li ' +"gaoliang").siblings().removeClass('wizard-steps li ' +"gaoliang");
			
	// 	}else{
	// 		$('.wizard-steps li').eq(n).prevAll().unbind();
	// 	}
	// 	//如果当前点击状态小于当前状态且大于获取的流程状态 liucheng<n<benxiliucheng才可以点
		
	// });




		$(".wizard-steps li").click(function(){
			n=$(this).index();
			console.log(n+"n");
			console.log(liucheng+"liucheng");
			console.log(benciliucheng+"benciliucheng");
			if(n<=benciliucheng&&n>=liucheng){
				$('.wizard-steps  li').eq(n).children().first().css("border-color","#1296DB").css("background","#1296DB").css("color","#fff").parent().siblings().children(".step").css("background-color","#CED1D6").css("border-color","#CED1D6").css("color","black");
				$(".wizard-steps  li").eq(n).children().last().css("color","#1296DB").parent().siblings().children(".title").css("color","#333");
				$(".wizard-steps  li").eq(n).removeClass().addClass('wizard-steps li ' +"gaoliang").siblings().removeClass('wizard-steps li ' +"gaoliang");
				$(".spage").eq(n).show().siblings().hide();
			}

		});
	
	
	
	
	
	//点击底部按钮 提交数据 跳转下一页 并禁用事件
	//page1
		$("#gerenxinxibut").one("click",function(){
			//ajax
			//跳转下一页（隐藏本页 显示下页）
				
			alert("you ");
			$("#page1").stop().fadeOut();
			$("#page2").stop().fadeIn();
			n=1;
			gaoliangtop(n);
			$(this).removeClass("subbut").addClass("subbut-visited");
			benciliucheng++;
			buttonclick(buttn);
		});
	//page2
		//不贷款
		$("#budaikuan").one("click",function(){
			//ajax
			$("#page2").stop().fadeOut();
			$("#page3").stop().fadeIn();
			n=2;
			gaoliangtop(n);
			$(this).removeClass("subbut").addClass("subbut-visited");
			$("#daikuansub").removeClass("subbut").addClass("subbut-visited").unbind("click");
			benciliucheng++;
			buttonclick(buttn);
		});
		//daikuan
		$("#daikuansub").one("click",function(){
			//ajax
			$("#page2").stop().fadeOut();
			$("#page3").stop().fadeIn();
			n=2;
			gaoliangtop(n);
			$("#budaikuan").removeClass("subbut").addClass("subbut-visited").unbind("click");
			$("#daikuansub").removeClass("subbut").addClass("subbut-visited");
			benciliucheng++;
			buttonclick(buttn);
		});
	
	//page3
		$("#xuefeizhifubut").one("click",function(){
			//ajax
			$("#page3").stop().fadeOut();
			$("#page4").stop().fadeIn();
			n=3;
			gaoliangtop(n);
			$(this).removeClass("subbut").addClass("subbut-visited");
			benciliucheng++;
			buttonclick(buttn);
		});
	//page4
		//确认班级分配按钮，使验证是否为必选
		$("#fenpeibut").click(function(){
			var fenpei=$("#select00").val();
			console.log(fenpei);
			if(fenpei==="none"){
				alert("请选择你的班级");
			}
			else{
				$(".zhezhao-queren").stop().fadeIn();
				var yuanxi=$("#yuanxi").text();
				var zhuanye=$("#zhuanye").text();
				console.log(yuanxi+zhuanye);
				$(".queren-wenzi p").text("您被分配到"+yuanxi+fenpei+"，确定分配班级吗？");
			}
		});
		//取消||重选||隐藏遮罩
		$("#quxiao").click(function(){
			$(".zhezhao-queren").stop().fadeOut();
		});
		//确认分配
		$("#querenbut").one("click",function(){
			//ajax
			$("#page4").stop().fadeOut();
			$("#page5").stop().fadeIn();
			n=4;
			gaoliangtop(n);
			$("#fenpeibut").removeClass("subbut").addClass("subbut-visited").unbind("click");
			$(".zhezhao-queren").stop().fadeOut();
			benciliucheng++;
			buttonclick(buttn);
		});
	//page5
		//是否确认分配宿舍并验证是否为空 并跳转下一步
		$("#xuansushe").click(function(){
			var xiaoqu00=$("#xiaoqu00").val();
			var loudong00=$("#loudong00").val();
			var qinshi00=$("#qinshi00").val();
			var chuangwei00=$("#chuangwei00").val();
			console.log(xiaoqu00+loudong00+qinshi00+chuangwei00);
			if(xiaoqu00!=null&&loudong00!=null&&qinshi00!=null&&chuangwei00!=null){
				$("#sushe-queren").stop().fadeIn();
				$("#sushe-queren-z p").text("您被分配到"+xiaoqu00+"，"+loudong00+"，"+qinshi00+"，"+chuangwei00+"，确认分配宿舍吗？");
				$("#sushe-quxiao").click(function(){
					$("#sushe-queren").stop().fadeOut();
				});
				//确认并跳转
				$("#sushe-queren").one("click",function(){
					//ajax
					$("#page5").stop().fadeOut();
					$("#page6").stop().fadeIn();
					n=5;
					gaoliangtop(n);
					$("#xuansushe").removeClass("subbut").addClass("subbut-visited").unbind("click");
					$(".zhezhao-queren").stop().fadeOut();
					benciliucheng++;
					buttonclick(buttn);
				});
				
			}
			else{
				alert("请选择完整！");
			}
			
		});
		
	
	//page6支付
	
		//判断是否要付款；若要付款则将底部按钮变为付款
		//不付款则底部按钮为下一步
		//是否购买军训服
			//计算金额
			var junxunmoney=200;
			var chuangshangmoney=300;
			var zongjine=junxunmoney+chuangshangmoney
			var junxun=$('input:radio[name="junxun"]:checked').val();
			$(".shi-junxun").children(".radio-but").addClass("radio-but-on");
			$(".shi-junxun").click(function(){
				$("#radiotrue1").attr("checked",true);
				$(".fou-junxun").children(".radio-but").removeClass("radio-but-on");
				$(this).children(".radio-but").addClass("radio-but-on");
				junxun="true";
				junxunmoney=200;
				$(".junxunfu-fou").hide().prev().stop().fadeIn();
				console.log(junxunmoney);
				zongjine=junxunmoney+chuangshangmoney;
				
			});
			$(".fou-junxun").click(function(){
				$("#radiofalse1").attr("checked",true);
				$(".shi-junxun").children(".radio-but").removeClass("radio-but-on");
				$(this).children(".radio-but").addClass("radio-but-on");
				junxun="false";
				junxunmoney=0;
				$(".junxunfu-shi").hide().next().stop().fadeIn();
				console.log(junxunmoney);
				zongjine=junxunmoney+chuangshangmoney;
			});
		//点击按钮	
		$("#xuangoubut").click(function(){
			
			$("#goumai-queren").stop().fadeIn();
			$("#goumai-queren-z p").text("确认后不可更改或取消，是否确认？");
			$("#goumai-quxiao").click(function(){
				$("#goumai-queren").stop().fadeOut();
			});
			$("#goumai-queren1").click(function(){
				
				console.log(zongjine);
				if(zongjine>0){
					alert("给钱！"+zongjine+"元");//调支付接口，calback后跳转页面
				}else{
					alert("下一步！");//直接跳转页面
					//ajax
					$("#page6").stop().fadeOut();
					$("#page7").stop().fadeIn();
					n=6;
					gaoliangtop(n);
					$(".zhezhao-queren").stop().fadeOut();
					benciliucheng++;
				}
				
				
				$("#xuangoubut").removeClass("subbut").addClass("subbut-visited");
			});
		});



	
	//page7
		//抵校信息页 radio  赋值
		$(".radio-wrap").click(function(){
			$(this).siblings().children(".radio-button").removeClass("radio-but-on");
			$(this).children(".radio-button").addClass("radio-but-on");
		});
		//baodao
		var	baodao=$('input:radio[name="baodao"]:checked').val();
		$("#baodao1").click(function(){
			baodao="zhunshi";
		});
		$("#baodao2").click(function(){
			baodao="yanchi";
		});
		
		//jiezhan
		var	jiezhan=$('input:radio[name="jiezhan"]:checked').val();
		$("#jiezhan1").click(function(){
			jiezhan="xuyao";
		});
		$("#jiezhan2").click(function(){
			jiezhan="buxuyao";
		});
		
		//jiaotong
		var	jiaotong=$('input:radio[name="jiaotong"]:checked').val();
		$("#jiaotong1").click(function(){
			jiaotong="huoche";
		});
		$("#jiaotong2").click(function(){
			jiaotong="qiche";
		});
		$("#jiaotong3").click(function(){
			jiaotong="xiaoche";
		});
		//peitong
		var	peitong=$('input:radio[name="peitong"]:checked').val();
		$("#peitong1").click(function(){
			peitong="wu";
		});
		$("#peitong2").click(function(){
			peitong="1";
		});
		$("#peitong3").click(function(){
			peitong="2";
		});
		$("#peitong4").click(function(){
			peitong="3";
		});
		$("#peitong5").click(function(){
			peitong="4";
		});
		$("#peitong6").click(function(){
			peitong="5+";
		});
		//dixiao butpage7
		$("#dixiaobut").click(function(){
			if(baodao!=null&&jiezhan!=null&&jiaotong!=null&&peitong!=null){
				//ajax
				console.log(baodao+","+jiezhan+","+jiaotong+","+peitong);
				$("#page7").stop().fadeOut();
				$("#page8").stop().fadeIn();
				n=7;
				gaoliangtop(n);
				$(this).removeClass("subbut").addClass("subbut-visited");
				benciliucheng++;
			}
			else{
				alert("有未作答的项！");
			}
			
		});

			// //点击状态
			// $('.wizard-steps  li').click(function(){
			// 	//console.log(n)
			// 	n=$(this).index();
			// 	console.log(n);
			// 	//控制头部横向高亮 n
			// 	$('.wizard-steps  li').eq(n).children().first().css("border-color","#1296DB").css("background","#1296DB").css("color","#fff").parent().siblings().children(".step").css("background-color","#CED1D6").css("border-color","#CED1D6").css("color","black");
			// 	$(".wizard-steps  li").eq(n).children().last().css("color","#1296DB").parent().siblings().children(".title").css("color","#333");
			// 	$(".wizard-steps  li").eq(n).removeClass().addClass('wizard-steps li ' +"gaoliang").siblings().removeClass('wizard-steps li ' +"gaoliang");
			
			// });
	
	//基本信息填手机号隐藏显示
	$("#inputout").click(function(){
		$("#inputout p").hide().parent().children().last().show().css("border","0").css("text-align","right").css("color","#555");
	});
	
	$("#inputout input").blur(function(){
		var shoujihao=$("#inputout input").val();
		console.log(shoujihao);
		if(shoujihao!=""){
			//alert("ok");
			$("#inputout p").html(shoujihao);
		}else{
			//alert("no");
			shoujihao="请输入手机号"
			$("#inputout p").html(shoujihao);
		}
		
		$("#inputout input").hide().prev().show().css("color","#555");
		
	});
	
	
	//贷款选项卡高亮
	$(".daikuan-left").click(function(){
		$(".daikuan-left").removeClass("daikuan-gaoliang-no").addClass("daikuan-gaoliang").next().addClass("daikuan-gaoliang-no");
		$("#daikuan1").next().stop().fadeOut(200).prev().stop().fadeIn(200);
	});
	
	$(".daikuan-right").click(function(){
		$(".daikuan-right").removeClass("daikuan-gaoliang-no").addClass("daikuan-gaoliang").prev().addClass("daikuan-gaoliang-no");
		$("#daikuan2").prev().stop().fadeOut(200).next().stop().fadeIn(200);
	});
	
	//个人信息展开隐藏
	$(".zhankai").children(".jiantou-geren").addClass("xiala-down");
	$(".zhankai").click(function(){
		$(this).prev().stop().slideToggle();
		$(this).children(".jiantou-geren").toggleClass("xiala-down").toggleClass("xiala-up");
	});
	
	
	//绿色通道 缴费下拉箭头
	$(".feiyongxinxi li").children(".feiyong-list-wrap").children(".feiyong-con").children(".xiala").addClass("xiala-down");
	$(".feiyongxinxi li").click(function(){
		$(this).children(".feiyongxiangqing").stop().slideToggle(200);
		$(this).children(".feiyong-list-wrap").children(".feiyong-con").children(".xiala").toggleClass("xiala-down").toggleClass("xiala-up");
	});
	
	//控制贷款申请文字在200字以内
	$("#shenqing-shuoming").bind('input propertychange',function(){
		var curLength=$("#shenqing-shuoming").val().length; 
		
		if(curLength>200) 
		{ 
			var num=$("#shenqing-shuoming").val().substr(0,200); 
			$("#shenqing-shuoming").val(num); 
			alert("已超过限制字数（200字）！" ); 
		} 
		
	});
	
	
	
/*	//军训服和床上用品页面之间切换 高亮
	$(".xuangou-left").click(function(){
		$(".xuangou-left").removeClass("xuangou-gaoliang-no").addClass("xuangou-gaoliang").next().addClass("xuangou-gaoliang-no");
		$(".junxunfu-page").next().stop().hide().prev().stop().fadeIn();
	});
	
	$(".xuangou-right").click(function(){
		$(".xuangou-right").removeClass("xuangou-gaoliang-no").addClass("xuangou-gaoliang").prev().addClass("xuangou-gaoliang-no");
		$(".chuangshang-page").prev().stop().hide().next().stop().fadeIn();
	});*/
	
	

	
	//是否购买单选框样式切换
	$(".radio-but").click(function(){
		$(this).parent().siblings().children(".radio-but").removeClass("radio-but-on").parent().siblings().children(".radio-but").addClass("radio-but-on");
	});
	
	//是否选购页面切换 给假的radio赋值 改变假的radio样式	
	var val=$('input:radio[name="chuang"]:checked').val();
	$(".shi-chuang").children(".radio-but").addClass("radio-but-on");
	$(".shi-chuang").click(function(){
		$("#radiotrue").attr("checked",true);
		$(".fou-chuang").children(".radio-but").removeClass("radio-but-on");
		$(this).children(".radio-but").addClass("radio-but-on");
		val="true";
		chuangshangmoney=300;
		$(".buxuan-chuangshang").hide().prev().stop().fadeIn();
		console.log(chuangshangmoney);	
		zongjine=junxunmoney+chuangshangmoney;
			
	});
	$(".fou-chuang").click(function(){
		$("#radiofalse").attr("checked",true);
		$(".shi-chuang").children(".radio-but").removeClass("radio-but-on");
		$(this).children(".radio-but").addClass("radio-but-on");
		val="false";
		chuangshangmoney=0;
		$(".xuan-chuangshang").hide().next().stop().fadeIn();
		console.log(chuangshangmoney);
		zongjine=junxunmoney+chuangshangmoney;
	});

	
	
		
	//select change事件 选宿舍 每一次change就给下面的option赋值
	$("#xiaoqu00").change(function(){
		var xiaoqu00=$("#xiaoqu00").val();
		alert(xiaoqu00);
	});		
	
	
		
	
		
	
	
	
	
	
	
	
	
});
