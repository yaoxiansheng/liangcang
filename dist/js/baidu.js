"use strict";var search=document.querySelector("#search_baidu"),listul=document.querySelector("#list"),timer=null;function searchinput(){if(null!==timer)return!1;timer=setInterval(function(){var e="https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=".concat(search.value,"&json=1&p=3&sid=1422_21089_28131_26350_28266&req=2&csor=2");jsonp(e,"cb").then(function(e){var t="";e.s.every(function(e,r){return t+="<li>".concat(e,"</li>"),r<4}),listul.innerHTML=t})},100),search.addEventListener("blur",searchblur)}function searchblur(){clearInterval(timer),timer=null}search.addEventListener("input",searchinput);