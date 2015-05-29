$(document).ready(function(){
	$('#nav-wrapper').height($("#nav").height());
	
	$('#nav').affix({
	      offset: { top: $('#nav').offset().top }
	});	

	$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 700);
	    return false;
	});
});