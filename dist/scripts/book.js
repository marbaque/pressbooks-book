!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}({0:function(e,t,n){n("gzOk"),e.exports=n("hNuw")},gzOk:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return""+e.charAt(0).toLowerCase()+e.replace(/[\W_]/g,"|").split("|").map(function(e){return""+e.charAt(0).toUpperCase()+e.slice(1)}).join("").slice(1)},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.routes=t}return r(e,[{key:"fire",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"init",n=arguments[2],o=""!==e&&this.routes[e]&&"function"==typeof this.routes[e][t];o&&this.routes[e][t](n)}},{key:"loadEvents",value:function(){var e=this;this.fire("common"),document.body.className.toLowerCase().replace(/-/g,"_").split(/\s+/).map(o).forEach(function(t){e.fire(t),e.fire(t,"finalize")}),this.fire("common","finalize")}}]),e}(),a=n("lbHh"),c=new i({common:{init:function(){var e;jQuery(function(e){e("body").removeClass("no-js").addClass("js"),e(document).ready(function(){"1"===a.get("a11y-larger-fontsize")&&(e("html").addClass("fontsize"),e("#is_normal_fontsize").attr("id","is_large_fontsize").attr("aria-checked",!0).addClass("active").text(PB_A11y.decrease_label).attr("title",PB_A11y.decrease_label)),e(".toggle-fontsize").on("click",function(){return"is_normal_fontsize"===e(this).attr("id")?(e("html").addClass("fontsize"),e(this).attr("id","is_large_fontsize").attr("aria-checked",!0).addClass("active").text(PB_A11y.decrease_label).attr("title",PB_A11y.decrease_label),a.set("a11y-larger-fontsize","1",{expires:365,path:""}),!1):(e("html").removeClass("fontsize"),e(this).attr("id","is_normal_fontsize").removeAttr("aria-checked").removeClass("active").text(PB_A11y.increase_label).attr("title",PB_A11y.increase_label),a.set("a11y-larger-fontsize","0",{expires:365,path:""}),!1)});for(var t=document.getElementsByTagName("section"),n=0,o=t.length;n<o;n++)t[n].setAttribute("tabindex",-1),t[n].className+=" focusable";if(document.location.hash&&"#"!==document.location.hash){var r=document.location.hash;setTimeout(function(){e(r).scrollTo({duration:1500}),e(r).focus()},100)}}),e(".js-header-nav-toggle").click(function(t){t.preventDefault(),e(".header__nav").toggleClass("header__nav--active")})}),e=document.querySelectorAll(".dropdown h3, .dropdown p"),Array.prototype.forEach.call(e,function(e){e.innerHTML='\n\t\t\t\t<button type="button" aria-expanded="false">\n\t\t\t\t\t'+e.innerHTML+'\n\t\t\t\t\t<svg class="arrow" width="13" height="8" viewBox="0 0 13 8" xmlns="http://www.w3.org/2000/svg"><path d="M6.255 8L0 0h12.51z" fill="currentColor" fill-rule="evenodd"></path></svg>\n\t\t\t\t</button>\n\t\t\t  ';var t=e.nextElementSibling;t.hidden=!0;var n=e.querySelector("button");n.onclick=function(){var e="true"===n.getAttribute("aria-expanded")||!1;n.setAttribute("aria-expanded",!e),t.hidden=e}})},finalize:function(){}},home:{init:function(){jQuery(function(e){e(document.body).on("click",".js-toggle-block",function(t){var n=e(this);n.parents(".js-block").toggleClass("block-toggle--visible"),n.toggleClass("--visible")})})},finalize:function(){}},single:{init:function(){jQuery(function(e){e(document).ready(function(){e(window).scroll(function(){e(this).scrollTop()>250?e(".nav-reading__up").animate({opacity:1},300):e(".nav-reading__up").animate({opacity:0},300)}),e(".nav-reading__up").click(function(t){return t.preventDefault(),e(".nav-reading__up").blur().animate({opacity:0},300),e("html, body").animate({scrollTop:0},300),!1})})})},finalize:function(){}}});jQuery(document).ready(function(){return c.loadEvents()})},hNuw:function(e,t){},lbHh:function(e,t,n){var o,r;!function(i){if(void 0===(r="function"==typeof(o=i)?o.call(t,n,t,e):o)||(e.exports=r),!0,e.exports=i(),!!0){var a=window.Cookies,c=window.Cookies=i();c.noConflict=function(){return window.Cookies=a,c}}}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var o in n)t[o]=n[o]}return t}return function t(n){function o(t,r,i){var a;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(i=e({path:"/"},o.defaults,i)).expires){var c=new Date;c.setMilliseconds(c.getMilliseconds()+864e5*i.expires),i.expires=c}i.expires=i.expires?i.expires.toUTCString():"";try{a=JSON.stringify(r),/^[\{\[]/.test(a)&&(r=a)}catch(e){}r=n.write?n.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=(t=(t=encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var s="";for(var l in i)i[l]&&(s+="; "+l,!0!==i[l]&&(s+="="+i[l]));return document.cookie=t+"="+r+s}t||(a={});for(var u=document.cookie?document.cookie.split("; "):[],f=/(%[0-9A-Z]{2})+/g,d=0;d<u.length;d++){var p=u[d].split("="),h=p.slice(1).join("=");this.json||'"'!==h.charAt(0)||(h=h.slice(1,-1));try{var v=p[0].replace(f,decodeURIComponent);if(h=n.read?n.read(h,v):n(h,v)||h.replace(f,decodeURIComponent),this.json)try{h=JSON.parse(h)}catch(e){}if(t===v){a=h;break}t||(a[v]=h)}catch(e){}}return a}}return o.set=o,o.get=function(e){return o.call(o,e)},o.getJSON=function(){return o.apply({json:!0},[].slice.call(arguments))},o.defaults={},o.remove=function(t,n){o(t,"",e(n,{expires:-1}))},o.withConverter=t,o}(function(){})})}});