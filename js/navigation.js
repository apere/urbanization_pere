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
	
	var theSlideshow;
	var imURL = templateUrl + "/assets/imgs/";
	var imgs = ["test.png", "test2.png" ];
	
	navBar.animate({
					opacity: "1"
				},10, function() {	});
	
	var entryHeader = $('.entry-header');
	
	if(window.innerWidth > 800) {
		if(entryHeader.hasClass("bright-blue-background")) {
			$('html').css('background','#5fa7e5' );
		} else if(entryHeader.hasClass("light-blue-background")) {
			$('html').css('background','#dae5f4' );
		} else if(entryHeader.hasClass("beige-background")) {
			$('html').css('background','#dedad6' );
		}
	}	
	
	if(window.innerWidth <= 800 && inPost.get().length > 0) {
		$('.nav-wrapper, #nav-mobile-logo').css("display", "none");
		$('#primary').css('display','block');
	}
	
	if(inPost.get().length <= 0 && anchorIndex < 0){	// make sure premises is lined up 
		secBack.scrollTop($('#premises').offset().top - 50);
	} 
	
	if(inPost.get().length <= 0 && anchorIndex < 0){ // in a post without an anchor?
		initBack.animate({
					opacity: "1"
				},2000, function() {	});
		var rand = Math.floor(Math.random()*imgs.length);
		initBack.css("background-image","url("+ imURL + imgs[rand] + ")");
	} else {
		initBack.css("display", "none");
		secBack.animate({
				opacity: "1"
			},1000, function() {	});	
	}
	
	
	
	$('#office-logo, #office-logo-mobile, #mobile-post-head img').click(function(){
		var currURL = document.URL;
		currURL = currURL.substr(0,currURL.split("/", 3).join("/").length + 1);
		window.location.href = currURL;
	})
	
  $('nav li div.link').click(function() {
		console.log(window.innerWidth);
		if(window.innerWidth > 800) {
			var anchor = $(this).data("link");		
			var aTag = $("#"+ anchor);
			console.log(anchor);

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
						window.clearTimeout();
						firstClick = false;
					});
					scroller.animate({
						opacity: "1"
					},700, function() {	});
					
					window.clearTimeout(theSlideshow);
			} else {
				if(location !== 0){
					scroller.animate({scrollTop: location},'1000', 'easeOutCirc', function() {
					});
				}		
			}
			} else { // we're on a project page
				var currURL = document.URL;

				// get the 3rd '/' to parse out the projection part of the URL
				currURL = currURL.substr(0,currURL.split("/", 3).join("/").length + 1) + "#" + anchor;
				window.location.href = currURL;
			}
		} else { // **** MOBILE
			
			var anchor = $(this).data("link");		
			var aTag = $("#"+ anchor + "-nav");
			console.log(anchor);

			if(inPost.get().length <= 0){ // we are on the main page
				if(aTag.hasClass('active')) {
					aTag.animate({
							height: "toggle"
						}, 300, function(){
						aTag.removeClass("active");
					});
				} else {
					$('.active').animate({
							height: "toggle"
						}, 200, function() {
							$('.active').hide();
							$('.active').removeClass("active");
							aTag.addClass("active");
							aTag.animate({
									height: "toggle"
								}, 500, function() {	});
						});

					setTimeout(function() {
						if(!aTag.hasClass('active')) {
							aTag.addClass("active");
							aTag.animate({
									height: "toggle"
								}, 500, function() {	});
						}
					}, 300);
				}
				
			} else { // we're on a project page
				var currURL = document.URL;

				// get the 3rd '/' to parse out the projection part of the URL
				currURL = currURL.substr(0,currURL.split("/", 3).join("/").length + 1) + "#" + anchor;
				window.location.href = currURL;
			}
			
		}
		
	}); 
	

	var last = -1;
	function slideshow() {
		console.log(imgs);
		var rand = Math.floor(Math.random()*imgs.length);
		if(rand === last) {
			rand = Math.floor(Math.random()*imgs.length);
		}
		console.log(rand);
		console.log(imURL + imgs[rand])
		
		initBack.animate({
			opacity: "-.1"
		},800, function(){
			initBack.css("background-image","url("+ imURL + imgs[rand] + ")");
			last = rand;
			initBack.animate({
			opacity: "1"
		},1300, function(){});
		} );
	}
	
}, false);

