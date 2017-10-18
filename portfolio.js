/* hide | show navigation by scrolling up and down */
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#navi').outerHeight();
$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('#navi').css('top','-60px');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('#navi').css('top','0');
        }
    }
    
    lastScrollTop = st;
}
/* move to special tag */
var moveToTag = function(ele){
	var moveLoc = $("#"+ele).offset().top;
	$(window).scrollTop(moveLoc-60);
}
/* transform info-box size to mobile */
$(document).ready(function(){
	var width = $(window).width();
	if(width < 718){
		$(".info-box .info-text").css('width','95%');
	}else{
		$(".info-box .info-text").css('width','50%');
	}
});
$(window).resize(function(){
	var width = $(window).width();
	if(width < 718){
		$(".info-box .info-text").css('width','95%');
	}else{
		$(".info-box .info-text").css('width','50%');
	}
});
