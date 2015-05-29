$(document).ready(function(){
	$('#nav-wrapper').height($("#nav").height());
	
	$('#nav').affix({
	      offset: { top: $('#nav').offset().top }
	});	

	$('#anchor1').click(function(){
	    $('html, body').animate({
	        scrollTop: $('.container3').offset().top
	    }, 1500);
	});

	$('#anchor2').click(function(){
	    $('html, body').animate({
	        scrollTop: $('.container2').offset().top
	    }, 1500);
	});
});