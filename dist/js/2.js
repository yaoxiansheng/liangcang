"use strict";var focus=document.querySelector(".focus"),big_wrap=document.querySelector(".wrap-big-magnifier"),small_wrap=document.querySelector(".wrap-small-magnifier"),big_bg=big_wrap.children[0],small_bg=small_wrap.children[0],choice_wrap=document.querySelector(".wrap-choice-magnifier"),choice_items=choice_wrap.children,prop=parseInt(getComputedStyle(big_wrap).width)/parseInt(getComputedStyle(focus).width);function toggle(e){var t=null;t="show"===e?"block":"none",focus.style.display=t,big_wrap.style.display=t}function eleMove(e){var t=e||window.event,o=t.offsetX,i=t.offsetY;o=(o-=focus.offsetWidth/2)<=0?0:o,i=(i-=focus.offsetHeight/2)<=0?0:i;var s=small_wrap.offsetWidth-focus.offsetWidth,a=small_wrap.offsetHeight-focus.offsetHeight;o=s<=o?s:o,i=a<=i?a:i,focus.style.left=o+"px",focus.style.top=i+"px",big_bg.style.left=-o*prop+"px",big_bg.style.top=-i*prop+"px"}function choice(e){choice_items.forEach(function(e){e.className=""}),e.className="active";var t=e.getAttribute("data-big"),o=e.getAttribute("data-small");small_bg.src=o,big_bg.src=t}big_bg.style.width=prop*small_wrap.offsetWidth+"px",big_bg.style.height=prop*small_wrap.offsetHeight+"px",small_wrap.addEventListener("mouseenter",toggle.bind(!1,"show")),small_wrap.addEventListener("mouseleave",toggle.bind(!1,"hide")),small_wrap.addEventListener("mousemove",eleMove),(choice_items=Array.from(choice_items)).forEach(function(e){e.addEventListener("click",choice.bind(!1,e))});