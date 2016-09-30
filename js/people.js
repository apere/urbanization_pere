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
	
	
	// a person's name has been clicked
	$('#people-list li').click(function(e){
		e.preventDefault();
		var currentUrl = $(this).data('posturl');
		currentUrl = currentUrl.split(" ").join("-");
		currClickedElement = $(this);
		
		if(windowWidth >= 800) {
			if(!currClickedElement.hasClass('no-content')) {		
				if(lastClickedElement && !currClickedElement.hasClass('current')) {
					lastClickedElement.removeClass('current');
				}
				currClickedElement.addClass('current');
				pContent.removeClass('closed');

				$.ajax({
						type : 'post',
						url : currentUrl,  
						data: {
								action: 'peopleAjaxHandler',  
								post_url: currentUrl  
						},
						success: function(data){

							// trim out the content
							var outputs = String(data.substring(data.indexOf('<div class="entry-content">')));
							var i = outputs.indexOf("<!-- .entry-content -->");
							outputs = outputs.substring(0, i);
							outputs = outputs + "<div class = 'close-me'>^</div>";

							if(!open) { // first click
								pContent.html(outputs);
								pContent.css("opacity", "1");
								pContent.css("display", "none");
								$('#people-list').animate({"margin-bottom": "4em"}, 100, function() {
									pContent.slideToggle(500);
									open = true;
								});

							}
							else if(lastClicked !== currentUrl) { // did we click the same one twice?
								pContent.animate({
										opacity: "0"
								}, 500, function() {


									pContent.html(outputs);
									pContent.animate({
										opacity: "1"
									}, 600, function() {

									});
								});
							}

							$('.person-content .close-me').click(function(e){
								pContent.addClass('closed');
								lastClickedElement.removeClass('current');

								pContent.slideToggle(500);
								open = false;
								console.log('++');
							}); 

							lastClickedElement = currClickedElement;
							lastClicked = currentUrl;
							open = true;
						}
				});
			}
		} else {
			var content = $(this).find('.nav-person-content');
			console.log(content);
			content.slideToggle(500);
		}
	});
	
	
});