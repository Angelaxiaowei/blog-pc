$(function(){
	$(".click-1 a").click(function(){
		$(this).hide().siblings().show();
		$(".module-1").slideToggle();
	})
	$(".click-2 a").click(function(){
		$(this).hide().siblings().show();
		$(".module-2").slideToggle();
	})
	$(".floor-item-1").mouseover(function(){
		$(".floor-item-1").css({"background":"#fef6f6"});
		$(".action-1").show();
	})
	$(".floor-item-1").mouseout(function(){
		$(".floor-item-1").css({"background":"#fff"});
		$(".action-1").hide();
	})
	$(".build-msg").mouseover(function(){
		$(".f-item").css({"background":"#fef6f6"})
		$(".action-2").show();
	})
	$(".build-msg").mouseout(function(){
		$(".f-item").css({"background":"#fff"})
		$(".action-2").hide();
	})
})