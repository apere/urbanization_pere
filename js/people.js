/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */

jQuery(function($){
	var open = false;
	var lastClicked = "";
	var lastClickedElement;
	var currClickedElement;
	var pContent = $('.person-content');
	var windowWidth = window.innerWidth;
	var lastClickedObject = null;
	var content = "";
	
	var lastURL = "";
	var currentUrl = "  ";
	
	$('.close-me').click(function(e){
		var currUrl = $(this).data('close-posturl');
		var parent = $("#people-person-content-list li[data-posturl='" + currUrl +"']");
		var parentList = $("#people-list li[data-posturl='" + currUrl +"']");
		
		parentList.removeClass('current-clicked');
		parent.fadeOut(600).removeClass('current-person');
		
		
	});
	
	$('.person-list-object').fadeOut();
	
	
	// a person's name has been clicked
	$('#people-list li').click(function(e){
		e.preventDefault();
		currentUrl = $(this).data('posturl');
		currentUrl = currentUrl.split(" ").join("-");
		currClickedElement = $(this);
		
		console.log('^^^^');
		console.log("clicked url: " + currentUrl.toString());
		
		//if(pContent.hasClass('closed')) {
			//pContent.slideToggle(500);
			//pContent.removeClass('closed');
		//}		
		
		if(currentUrl !== lastURL) {
			if(windowWidth >= 800) { // Desktop
				if(!currClickedElement.hasClass('no-content')) {		// have content

					$('.current-clicked').removeClass('current-clicked'); // remove any old clicked elements
					$('.current-person').fadeOut(600).removeClass('current-person'); // removed any old displayed people objects


					currClickedElement.addClass('current-clicked');
					pContent.removeClass('closed');

					content = $(".person-list-object[data-posturl='" + currentUrl.toString() + "']");
					console.log("content");
					console.log(content);
					content.addClass('current-person');
					content.fadeIn(1200);
				}
			} else { // mobile
				content = $(this).find('.nav-person-content');
				content.fadeIn(1200);
			}
			
			}
		
		lastClickedElement = currClickedElement;
		lastClickedObject = content;
		lastURL = currentUrl;
	});
	
	
});