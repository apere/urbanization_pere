/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */

jQuery(function($){
	
	$('#people-list li').click(function(e){
			e.preventDefault();
			var currentUrl = $(this).data('posturl');
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
						console.log(data.indexOf("article"));
						outputs = outputs.substring(0, i);
						
						// Place the content
						$('.person-content').html(outputs);
						
						console.log(outputs);
						
							
					}
			});
	});
	
});