document.addEventListener("DOMContentLoaded",function(){var a=!0,e=$("#primary"),t=$(".post"),n=$("#initial-background"),i=$("#primary"),o=$("nav"),s=document.URL,c=s.indexOf("#"),l,r=templateUrl+"/assets/imgs/",d=["test.png","test2.png"],g=navigator.userAgent.toLowerCase();g.indexOf("safari")!=-1&&(g.indexOf("chrome")>-1||$("html").addClass("using-safari")),o.animate({opacity:"1"},10,function(){});var f=$(".entry-header"),h=window.innerWidth;h>800?f.hasClass("bright-blue-background")?$("html").css("background","#5fa7e5"):f.hasClass("light-blue-background")?$("html").css("background","#dae5f4"):f.hasClass("beige-background")?$("html").css("background","#dedad6"):f.hasClass("dark-brown-background")&&$("html").css("background","#d0cbc7"):f.hasClass("bright-blue-background")?$("#primary").css("background","#5fa7e5"):f.hasClass("light-blue-background")?$("#primary").css("background","#dae5f4"):f.hasClass("beige-background")?$("#primary").css("background","#dedad6"):f.hasClass("dark-brown-background")&&$("#primary").css("background","#d0cbc7");var u=t.get().length;if(h<=800&&u>0&&($(".nav-wrapper, #nav-mobile-logo").css("display","none"),$("#primary").css("display","block")),u<=0&&c<0&&i.scrollTop($("#premises").offset().top-50),u<=0&&c<0){n.animate({opacity:"1"},2e3,function(){});var m=Math.floor(Math.random()*d.length);n.css("background-image","url("+r+d[m]+")")}else n.css("display","none"),i.animate({opacity:"1"},1e3,function(){});var v=document.body.querySelectorAll("section[id]:not(.nav-section-content)"),b=v.length;e.scroll(function(){if(h>800&&!a){for(var e=$(v[0]),t=0;t<b;t++){var n=$(v[t]);n.offset().top<=70&&(e=n)}var i=$("nav").find("[data-link='"+e.attr("id")+"']");i.hasClass("active")||($("nav .link.active").removeClass("active"),i.addClass("active"))}}),$("#office-logo, #office-logo-mobile, #mobile-post-head img").click(function(){var a=document.URL;a=a.substr(0,a.split("/",3).join("/").length+1),window.location.href=a}),$("nav li div.link").click(function(){if(h>800){var i=$(this).data("link"),o=$("#"+i);if(t.get().length<=0){var s=o.offset().top-50,c=$("#main").offset().top;s-=c,a?(0!==s&&(e.animate({scrollTop:s},"200","easeOutCirc",function(){}),$(this).addClass("active")),n.animate({opacity:"0"},700,function(){n.css("display","none"),window.clearTimeout(),a=!1}),e.animate({opacity:"1"},700,function(){}),window.clearTimeout(l)):0!==s&&e.animate({scrollTop:s},"1000","easeOutCirc",function(){})}else{var r=document.URL;r=r.substr(0,r.split("/",3).join("/").length+1)+"#"+i,window.location.href=r}}else{var i=$(this).data("link"),o=$("#"+i+"-nav");if(console.log(i),t.get().length<=0)o.hasClass("active")?o.animate({height:"toggle"},300,function(){o.removeClass("active")}):($(".active").animate({height:"toggle"},200,function(){$(".active").hide(),$(".active").removeClass("active"),o.addClass("active"),o.animate({height:"toggle"},500,function(){})}),setTimeout(function(){o.hasClass("active")||(o.addClass("active"),o.animate({height:"toggle"},500,function(){}))},300));else{var r=document.URL;r=r.substr(0,r.split("/",3).join("/").length+1)+"#"+i,window.location.href=r}}}),$("html").on("swipeleft",function(){if(t.get().length>0&&h<800){var a=$("body").find("a[rel=prev]"),e=a.attr("href");void 0!==e&&(window.location.href=e),console.log(e)}}),$("html").on("swiperight",function(){if(t.get().length>0&&h<800){var a=$("body").find("a[rel=next]"),e=a.attr("href");void 0!==e&&(window.location.href=e),console.log(e)}})},!1);