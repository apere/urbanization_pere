jQuery(function($){var e=!1,n="",t,s,o=$(".person-content"),i=window.innerWidth;$("#people-list li").click(function(a){a.preventDefault();var l=$(this).data("posturl");if(l=l.split(" ").join("-"),s=$(this),i>=800)s.hasClass("no-content")||(t&&!s.hasClass("current")&&t.removeClass("current"),s.addClass("current"),o.removeClass("closed"),$.ajax({type:"post",url:l,data:{action:"peopleAjaxHandler",post_url:l},success:function(i){var a=String(i.substring(i.indexOf('<div class="entry-content">'))),c=a.indexOf("<!-- .entry-content -->");a=a.substring(0,c),a+="<div class = 'close-me'>^</div>",e?n!==l&&o.animate({opacity:"0"},500,function(){o.html(a),o.animate({opacity:"1"},600,function(){})}):(o.html(a),o.css("opacity","1"),o.css("display","none"),$("#people-list").animate({"margin-bottom":"4em"},100,function(){o.slideToggle(500),e=!0})),$(".person-content .close-me").click(function(n){o.addClass("closed"),t.removeClass("current"),o.slideToggle(500),e=!1}),t=s,n=l,e=!0}}));else{var c=$(this).find(".nav-person-content");console.log(c),c.slideToggle(500)}})});