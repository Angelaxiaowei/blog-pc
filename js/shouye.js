$(function(){
        var result ={
        	"status" : true,
			"data"   : {
				"lists" : [
					{
						"id": "1",
						"title": "131313",
						"content": "qqqqqqqqqq",
						"image": "./public/upload/img_1508636446641043.png",
						"classify_id": "5",
						"status": "1",
						"createtime": "2017-10-21 10:38:57",
						"updatetime": "2017-10-22 09:40:46",
						"createdate": "2017/10/21"
					},
				],
			}
		}
		 var str="";
        for (var i = 0; i < result.data.lists.length; i++) {
             str='<div class="xuanran"><ul class="timeline"><li><time class="time">'+result.data.lists[i].createdate+'</time><div class="timeicon"></div><div class="tmlable"><h2><a href="#">'+result.data.lists[i].title+'</a></h2><p><span class="blogpic"><a href="#"><img src="../image/f3d31093cb66dae68f96b99b1af416e3.png" alt=""></a></span>'+result.data.lists[i].content+'</p><p><a href="#" class="classname">原创个人博客模板</a><a href="../yueduquanwen.html?id='+result.data.lists[i].id+' class="readmore">阅读全文>></a></p><div class="tri"></div></div></li></ul></div>'
        };
        $(".xuanran").html(str);
        
 //     $.ajax({
	// 	url:"http://192.168.199.249:8080/index.php?c=api&a=bloglist",
	// 	type:"get",
	// 	dataType:"json",
	// success:function(result){
 //        var str="";
 //        for (var i = 0; i < result.data.lists.length; i++) {
 //             str='<div class="xuanran"><ul class="timeline"><li><time class="time">'+result.data.lists[i].createdate+'</time><div class="timeicon"></div><div class="tmlable"><h2><a href="#">'+result.data.lists[i].title+'</a></h2><p><span class="blogpic"><a href="#"><img src="'+result.data.lists[i].image+'" alt=""></a></span>'+result.data.lists[i].content+'</p><p><a href="#" class="classname">原创个人博客模板</a><a href="#" class="readmore">阅读全文>></a></p><div class="tri"></div></div></li></ul></div>'
 //        };
 //        $(".xuanran").html(str);
	// }
	// })
})