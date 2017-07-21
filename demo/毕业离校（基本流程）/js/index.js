$(document).ready(function(){
	//studentinfo
	
	$.ajax({
		
		type:"get",
		url:"json/stuinfo.json",
		datatype:"json",
		async:true,
		success:function(data){
			if(data!=null&&data.length>0){
				for(var i=0;i<data.length;i++){
					var name=data[i]["name"];
					var bianhao=data[i]["bianhao"];
					var banji=data[i]["banji"];
					var xuehao=data[i]["xuehao"];
					var xingbie=data[i]["xingbie"];
					var stats=data[i]["stats"];
					console.log(stats);
					
					if(stats==0){
						var qxx='<div class="jinru">启动离校办理</div>';
						$(".butwrap").append(qxx);
						$(".jinru").click(function(){
								$(".shouping").css("-webkit-animation", "goleft 0.3s").css("left","-100%").fadeOut(200);
								$(".wrap").show(0).stop().animate({
									left:'0px'
								},300);
							});
							
						$("#backto1").click(function(){
								$(".wrap").stop().animate({
									left:'100%'
								},200).hide(0);
								$(".shouping").show(0).css("-webkit-animation","goright 0.3s").css("left","0px");
						});
					}
					else{
						var qxx='<div class="jinru2">已启动离校办理</div><div class="enter">直接进入>></div>';
						$(".butwrap").append(qxx);
						$(".enter").click(function(){
								$(".shouping").css("-webkit-animation", "goleft 0.3s").css("left","-100%").fadeOut(200);  
								$(".wrap").show(0).stop().animate({
									left:'0px'
								},300);
						});
						$("#backto1").click(function(){
								$(".wrap").stop().animate({
									left:'100%'
								},200).hide(0);
								$(".shouping").show(0).css("-webkit-animation","goright 0.3s").css("left","0px");
						});
					}
		
					$(".mingzi").append(name);
					$("#bianhao").append(bianhao);
					$("#banji").append(banji);
					$("#xuehao").append(xuehao);
					$("#xingbie").append(xingbie);
					
				}
			}
		}
	});
	
	
	//liuchengxiangqing
	var bumen;
	
	$.ajax({
		type:"get",
		url:"json/liucheng.json",
		async:true,
		datatype:"json",
		success:function(data){
			if(data!=null&&data.length>0){
				for(var i=0;i<data.length;i++){
					var bumen=data[i]["bumen"];
					var id1=data[i]["id"];
					console.log(id1);//获取ID1为背景图像做文件名
					var stats=data[i]["stats"];
					var bianhao=data[i]["bianhao"];
					var jingbanren=data[i]["jingbanren"];
					var shenpijieguo=data[i]["shenpijieguo"];
					var fabushijian=data[i]["fabushijian"];
					var jieshushijian=data[i]["jieshushijian"];
					var ass=bianhao+jingbanren+shenpijieguo+fabushijian+jieshushijian;
					console.log(ass);
					var xianginfo='<div class="xiangqing-wrap" id="chakan"><div class="xiangqing-top">'+bumen+'</div><div class="xiangqing-bianhao"><div class="bianhao-icon"></div><div class="bianhao-shuzi">编号:'+bianhao+'</div></div><div class="fuzeren"><div class="fuzeren-info">负责人信息</div><div class="jingbanren"><div class="jingbanren-icon"></div><div class="jingbanren-z">经办人</div><div class="jingbanren-con">'+jingbanren+'</div></div><div class="shenpi"><div class="shenpi-icon"></div><div class="shenpi-z">审批结果</div><div class="shenpi-con">'+shenpijieguo+'</div></div></div><div class="shijian"><div class="shijian-info">时间信息</div><div class="fabu"><div class="fabu-icon"></div><div class="fabu-z">发布时间</div><div class="fabu-con">'+fabushijian+'</div></div><div class="jieshu"><div class="jieshu-icon"></div><div class="jieshu-z">结束时间</div><div class="jieshu-con">'+jieshushijian+'</div></div></div></div>';
					
					if(stats!=null&&stats==0){
						var zhuangtai='<div class="fuhao1"></div><div class="zhuangtaima1">未审核</div> ';
					}
					else{
						var zhuangtai='<div class="fuhao2"></div><div class="zhuangtaima2">已审核</div>';
					}
					a=i+1;
					var allinfo='<div class="liuchengline"><div class="shuzi"><div class="z">'+a+'</div></div><div class="xian"></div><div class="qipao"><div class="sanjiao"></div><div class="pao"><div class="tubiaoleft" style="background-image:url(img/'+id1+'u.png)"></div><div class="bumen">'+bumen+'</div><div class="zizhuangtai"><div class="stats">'+zhuangtai+'</div><div class="xiangqing">[查看]<div id="divbox" style="display:none;z-index:999;position:fixed;top:0px;left:0px;background-color:#fff;width:100%;height:100%">'+xianginfo+'<div id="backwrap0"><div id="backto2" >返回</div></div></div></div></div></div></div></div>';
					
					$(".liuchengwrap").append(allinfo);
			
				}
			}
		}
	});
	

	$(document).on('touch','.xiangqing',function(){
		
		$(this).find("#divbox").show(300).css("display","block");
		
		
	});
	
	$(document).on('click','.xiangqing',function(){
		
		$(this).find("#divbox").stop().show(300);
		
	});
	
	
	$(document).on('click','#backto2',function(event){
		
		$(this).parent().parent().stop().hide(300);
		event.stopPropagation();
		
		
	});
		
	
	
	
	
	
});
