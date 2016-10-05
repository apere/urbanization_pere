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
	var imgs = ["OfU1.png", "OfU2.png", "OfU3.png", "OfU4.png", "OfU5.png", "OfU6.png", "OfU7.png", "OfU8.png", "OfU9.png", "OfU10.png", "OfU11.png", "OfU12.png", "OfU13.png", "OfU14.png" ];
	
	var ua = navigator.userAgent.toLowerCase(); 
	var msie = ua.indexOf("MSIE ");
	
	if (ua.indexOf('safari') != -1) { 
		if (ua.indexOf('chrome') > -1) {
			
		} else {
			$('html').addClass('using-safari');
		}
	}
	
	if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
	{
			$('html').addClass('using-ie');
	}
	
	navBar.animate({
					opacity: "1"
				},10, function() {	});
	
	var entryHeader = $('.entry-header');
	var windowWidth = window.innerWidth;
	
	// check for class & set background color if it has the appropriate class
	if(windowWidth > 800) { // desktop
		if(entryHeader.hasClass("bright-blue-background")) {
			$('html').css('background','#5fa7e5' );
		} else if(entryHeader.hasClass("light-blue-background")) {
			$('html').css('background','#dae5f4' );
		} else if(entryHeader.hasClass("beige-background")) {
			$('html').css('background','#dedad6' );
		} else if(entryHeader.hasClass("dark-brown-background")) {
			$('html').css('background','#d0cbc7' );
		} 
		
		if(anchorIndex >= 0) {
			var anchorText = url.substring(anchorIndex + 1);
			var anchorNavTab = $('nav').find('[data-link="' + anchorText +'"]' );
			anchorNavTab.addClass('active');
			firstClick = false;
		}
	}	else { // mobile
		if(entryHeader.hasClass("bright-blue-background")) {
			$('#primary').css('background','#5fa7e5' );
		} else if(entryHeader.hasClass("light-blue-background")) {
			$('#primary').css('background','#dae5f4' );
		} else if(entryHeader.hasClass("beige-background")) {
			$('#primary').css('background','#dedad6' );
		} else if(entryHeader.hasClass("dark-brown-background")) {
			$('#primary').css('background','#d0cbc7' );
		} 
	}
	
	var inPostLength = inPost.get().length;
	
	// mobile/non-mobile
	if(windowWidth <= 800 && inPostLength > 0) {
		$('.nav-wrapper, #nav-mobile-logo').css("display", "none");
		$('#primary').css('display','block');
	}
	
	// make sure premises is lined up if not in post
	if(inPostLength <= 0 && anchorIndex < 0){	
		secBack.scrollTop($('#premises').offset().top - 50);
	} 
	
	
	// in a post without an anchor?
	if(inPostLength <= 0 && anchorIndex < 0){
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
	
	// scroll & highlight nav
	var sections = document.body.querySelectorAll('section[id]:not(.nav-section-content)');
	var numSections = sections.length;
	
	scroller.scroll(function() {
		console.log("*****");
		if(windowWidth > 800 && !firstClick) {
			var current = $(sections[0]);
			for(var i = 0; i <numSections; i++){
				var temp = $(sections[i]);
				if(temp.offset().top <=70) {
					current = temp;
				}
			}
			var currNav = $('nav').find("[data-link='" + current.attr('id') + "']");
			if(!currNav.hasClass('active')) {
				$('nav .link.active').removeClass('active');
				currNav.addClass('active');
			}
		}		
	});
	
	
		$('body').scroll(function() {
			console.log("*");
		});
	
	
	
	// clicking office logo returns to the 'landing page'
	$('#office-logo, #office-logo-mobile, #mobile-post-head img').click(function(){
		var currURL = document.URL;
		currURL = currURL.substr(0,currURL.split("/", 3).join("/").length + 1);
		window.location.href = currURL;
	})
	
	
	// nav bar actions
  $('nav li div.link').click(function() {
		if(windowWidth > 800) {
			var anchor = $(this).data("link");		
			var aTag = $("#"+ anchor);

			if(inPost.get().length <= 0){ // we are on the main page
				var location = aTag.offset().top ;
				var off = $("#main").offset().top;
				location = location - off;
				if(firstClick) {
					if(location !== 0){
						scroller.animate({scrollTop: location},'200', 'easeOutCirc', function() {});
						$(this).addClass('active');
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
					scroller.animate({scrollTop: location},'1000', 'easeOutCirc', function() {});
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
	

//	// landing page slideshow -- unused
//	var last = -1;
//	function slideshow() {
//		var rand = Math.floor(Math.random()*imgs.length);
//		if(rand === last) {
//			rand = Math.floor(Math.random()*imgs.length);
//		}
//		console.log(rand);
//		console.log(imURL + imgs[rand])
//		
//		initBack.animate({
//			opacity: "-.1"
//		},800, function(){
//			initBack.css("background-image","url("+ imURL + imgs[rand] + ")");
//			last = rand;
//			initBack.animate({
//			opacity: "1"
//		},1300, function(){});
//		} );
//	}
//	
	
	
	
	$( "html" ).on( "swiperight", function() {
		if(inPost.get().length > 0 && windowWidth < 800) {
			var prev = $('body').find('a[rel=prev]');
			var url = prev.attr("href");
			if(url !== undefined) {
				window.location.href = url;
			}
			
			console.log(url);
		}
	} );
	
	$( "html" ).on( "swipeleft", function() {
		if(inPost.get().length > 0 && windowWidth < 800) {
			var next = $('body').find('a[rel=next]');
			var url = next.attr("href");
			if(url !== undefined) {
				window.location.href = url;
			}
			console.log(url);
		}
	} );
	
	$('#gsd-logo').on("click", function() {
		window.location.href = "http://www.gsd.harvard.edu";
	});
	
}, false);




