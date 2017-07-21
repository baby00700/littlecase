//使用Vue输出文字
new Vue({
	el:'#app',
	data:{
		message:'hello vue'
	}
})

//html
new Vue({
	el:'#appa',
	data:{
		message:'<h1>vue out html</h1>'
	}
});


new Vue({
	el: '#appb',
  data:{
  	class1: false
  }
});
//表达式
new Vue({
	el:'#appc',
	data:{
		ok:true,
		message:'123456',
		id:1
	}
});
//指令
new Vue({
	el:'#appd',
	data:{
		seen:true
	}
});


//参数
new Vue({
	el:'#appe',
	data:{
		url:'http://www.baidu.com'
	}
})




new Vue({
	el:'#appf',
	data:{
		funa:function(){
			alert("done");
		}
	}
});





//用户输入
new Vue({
	el:'#appg',
	data:{
		message:'在这里输入，会同步显示'
	}
})



//反转字符串
new Vue({
	el:'#apph',
	data:{
		msg:'tou1234567wei',
		
	},
	methods:{
		reverse:function(){
		this.msg=this.msg.split('').reverse().join('');
		}
	}
	
});

//
