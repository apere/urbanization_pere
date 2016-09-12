/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
document.addEventListener('DOMContentLoaded', function() {
	var firstClick = true;
	var scroller = $('#primary');
	
	var initBack = $('#initial-background');
	var secBack = $('#primary');
	
	//secBack.css("opacity", "0");
	initBack.css("background-image", "url(" + templateUrl + "/assets/imgs/background-test.jpg)")
	
  $('nav li').click(function() {
		
		
		var anchor = $(this).data("link");
		
		var aTag = $("#"+ anchor);
		var location = aTag.offset().top - 50;
		var off = $("#main").offset().top;
		
		location = location - off;
		
		if(firstClick) {
			if(location != 0){
				scroller.scrollTop(location);
			}
			initBack.animate({
				opacity: "0"
			},700, function() {
				initBack.css('display', 'none');
				firstClick = false;
			})
		} else {
			if(location !== 0){
				scroller.animate({scrollTop: location},'1000');
			}		
		}
		
		
	}); 
}, false);