
var $mask = $('<div id="mask"></div>');
var $image = $('<img id="maskimg">');
var $caption = $('<p id="maskcap"></p>');

$mask.append($image);
$mask.append($caption);

$("body").append($mask);

$(".gallink").click(function(event){
	
	event.preventDefault();
	
	var imageLocation = $(this).attr("href");
	
	$image.attr("src", imageLocation);
	
	
	
	
	
	var captionText = $(this).children("p").text();
	$caption.text(captionText);
	// alert($("body").height());
	
	var windowTop = $(window).scrollTop();
	var pageHeight = $("body").height();
	var viewportFrac = $(window).height() / 20;
	var imgPosition	= windowTop + viewportFrac
	
	
	var position = $(window).scrollTop();
	
	$("#mask").css({
		
		'height':$("body").height()
		
	
		
	});
	$("#maskimg").css({
		'margin':'4rem auto 0rem auto',
		'margin-top':imgPosition,
		'width':'90%',
		'max-width':'650px',
		'max-height':'90%'
		
		
	});
$mask.show();
	
	
});

$mask.click(function(){
	
	$mask.hide();
});


