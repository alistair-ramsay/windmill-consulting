$.easing.easeOutCubic=function(u,n,e,s,t){return n==t?e+s:s*(1-Math.pow(2,-12*n/t))+e},$(document).ready(function(){function u(){var u=n.width();console.log(u),u>680&&$(".sub-menu-button, .sub-menu").hover(function(){$(".sub-menu").addClass("sub-menu-hover"),$(".sub-menu-container").css("height","400px")},function(){$(".sub-menu").removeClass("sub-menu-hover"),$(".sub-menu-container").css("height","0")}),u<=680&&($(".sub-menu-button, .sub-menu").click(function(){$(".sub-menu").toggleClass("sub-menu-hover"),$(".sub-menu-container").toggleClass("mobile-submenu-on")}),$(".sub-menu-button, .sub-menu").hover(function(){$(".sub-menu-container").css("height","auto")},function(){$(".sub-menu-container").css("height","0")}))}var n=$(window);u(),$(window).resize(u),$(".back-to-top").click(function(){$("html, body").animate({scrollTop:$("header").offset().top},800,"easeOutCubic")}),$(".sub-menu-button").click(function(){$(".sub-menu").toggleClass("sub-menu-clicked"),$(this).toggleClass("sub-menu-button-clicked")}),$(".menu-button").click(function(){$("menu").toggleClass("mobile-hide"),$(this).toggleClass("sub-menu-button-clicked")})});