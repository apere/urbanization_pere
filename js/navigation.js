/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
document.addEventListener('DOMContentLoaded', function() {
	var firstClick = true;
	var scroller = $('#primary');
	var inPost = $('.post');
	var initBack = $('#initial-background');
	var secBack = $('#primary');
	var navBar = $('nav');
	
	var url = document.URL;
	var anchorIndex = url.indexOf("#");
	
	navBar.animate({
					opacity: "1"
				},10, function() {	});
	
	
	if(inPost.get().length <= 0 && anchorIndex < 0){	// make sure premises is lined up 
		secBack.scrollTop($('#premises').offset().top - 50 - $("#main").offset().top);
	} 
	
	if(inPost.get().length <= 0 && anchorIndex < 0){ // in a post without an anchor?
		initBack.animate({
					opacity: "1"
				},2000, function() {	});
		initBack.css("background-image", "url(" + templateUrl + "/assets/imgs/background-test.jpg)");
	} else {
		initBack.css("display", "none");
		secBack.animate({
				opacity: "1"
			},1000, function() {	});	
	}
	
	
	
	$('#office-logo').click(function(){
		var currURL = document.URL;
		currURL = currURL.substr(0,currURL.split("/", 3).join("/").length + 1);
		window.location.href = currURL;
	})
	
  $('nav li').click(function() {
		var anchor = $(this).data("link");		
		var aTag = $("#"+ anchor);
		
		if(inPost.get().length <= 0){ // we are on the main page
			var location = aTag.offset().top - 50;
			var off = $("#main").offset().top;
			location = location - off;

			if(firstClick) {
			if(location !== 0){
				scroller.scrollTop(location);
			}
			initBack.animate({
				opacity: "0"
			},700, function() {
				initBack.css('display', 'none');
				firstClick = false;
			});
			secBack.animate({
				opacity: "1"
			},700, function() {	});

		} else {
			if(location !== 0){
				scroller.animate({scrollTop: location},'1000');
			}		
		}
		} else { // we're on a project page
			var currURL = document.URL;
			 
			// get the 3rd '/' to parse out the projection part of the URL
			currURL = currURL.substr(0,currURL.split("/", 3).join("/").length + 1) + "#" + anchor;
			window.location.href = currURL;
		}
	}); 
}, false);