/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
document.addEventListener('DOMContentLoaded', function() {
	var scroller = $('#primary');
  $('nav li').click(function() {
		var anchor = $(this).data("link");
		
		var aTag = $("#"+ anchor);
		var location = aTag.offset().top - 50;
		var off = $("#main").offset().top;
		
		location = location - off;

		if(location !== 0){
			scroller.animate({scrollTop: location},'slow');
		}		
	}); 
}, false);