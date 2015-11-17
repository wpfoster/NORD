
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
	alert($(window).scrollTop());
	
	
	var position = $(window).scrollTop()
	
	$("#mask").css({
		'top':position,
		'height':'100%'
		
		
		
	});
	$("#maskimg").css({
		'margin':'4rem auto 0rem auto',
		'width':'90%',
		'max-width':'650px',
		'max-height':'90%'
		
		
	});
$mask.show();
	
	
});

$mask.click(function(){
	
	$mask.hide();
});


