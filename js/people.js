/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */

jQuery(function($){
	var open = false;
	var lastURL = "";
	var lastClicked = "";
	var lastClickedElement;
	var lastClickedObject = null;
	var currClickedElement;
	var currentUrl = "  ";
	var content = "";
	var pContent = $('.person-content');
	var winWidth = $( window ).width();
	
	$('.person-list-object').fadeOut(); // make sure all person objects are hidden
	
	if(winWidth < 800){
		$('html').addClass('mobile-html'); // add mobile class for easy css targeting
	}
	
	$('.close-me').click(function(e){ // close button
		var currUrl = $(this).data('close-posturl');
		var parent = $("#people-person-content-list li[data-posturl='" + currUrl +"']");
		var parentList = $("#people-list li[data-posturl='" + currUrl +"']");
		
		parentList.removeClass('current-clicked'); // un-bold person link
		parent.fadeOut(600).removeClass('current-person'); // close person object
	});
		
	// a person's name has been clicked
	$('#people-list li span').click(function(e){

		e.preventDefault();
		currentUrl = $(this).parent().data('posturl');
		currentUrl = currentUrl.split(" ").join("-");
		currClickedElement = $(this).parent();
		
		//console.log("clicked url: " + currentUrl.toString());
		
		if(currentUrl !== lastURL && winWidth >= 800) { // Desktop
			if(!currClickedElement.hasClass('no-content')) {		// have content

				$('.current-clicked').removeClass('current-clicked'); // remove any old clicked elements
				$('.current-person').fadeOut(600).removeClass('current-person'); // removed any old displayed people objects

				currClickedElement.addClass('current-clicked');
				pContent.removeClass('closed');

				content = $(".person-list-object[data-posturl='" + currentUrl.toString() + "']");  // get the corresponding lift object
				content.addClass('current-person');
				content.fadeIn(1200);
			}
		} else { // mobile
			content = currClickedElement.find('.nav-person-content');
			content.toggleClass('current-person');
			content.slideToggle(500);
		}
			
		lastClickedElement = currClickedElement;
		lastClickedObject = content;
		lastURL = currentUrl;
	});	
});