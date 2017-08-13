// JavaScript Document
(function(){
	var tu=$('#brand ul li');
	var show=$('#brand ul li');
	tu.each(function(index, element) {
		$(element).css('background','url(../images/i_logo'+(index+1)+'.png) no-repeat center center');
	});
	show.mouseenter(function(e) {
		$(this).children('p').stop().animate({width:190},200);
	});
	show.mouseleave(function(e) {
		$(this).children('p').stop().animate({width:0},200);
	});
	
})();