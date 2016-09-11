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
	
	$('#people-list li').click(function(e){
			e.preventDefault();
			var currentUrl = $(this).data('posturl');
			var pContent = $('.person-content');
			currClickedElement = $(this);
		
			if(lastClickedElement && !currClickedElement.hasClass('current')) {
				lastClickedElement.removeClass('current');
			}
			currClickedElement.addClass('current');
		
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
									opacity: "toggle"
							}, 500, function() {
								
								
								pContent.html(outputs);
								pContent.animate({
									opacity: "toggle"
								}, 600, function() {
									
								});
							});
						}
						
						lastClickedElement = currClickedElement;
						lastClicked = currentUrl;
						open = true;
					}
			});
	});
	
});