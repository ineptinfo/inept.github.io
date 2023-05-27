const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");
const classToRemove = 'active';
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const navLinks = document.querySelectorAll(".nav-bar a");
const sections = document.querySelectorAll('section');

hamburger.onclick = () => {
  navBar.classList.toggle(classToRemove);
  line1.classList.toggle(classToRemove);
  line2.classList.toggle(classToRemove);
  line3.classList.toggle(classToRemove);
};

document.addEventListener('click', function(event) {
  const isClickInsideHamburger = hamburger.contains(event.target);
  const isClickInsideNavBar = navBar.contains(event.target);
  if (!isClickInsideHamburger && !isClickInsideNavBar) {
    navBar.classList.remove(classToRemove);
    line1.classList.remove(classToRemove);
    line2.classList.remove(classToRemove);
    line3.classList.remove(classToRemove);
  }
});

navLinks.forEach((link, index) => {
  link.addEventListener('click', function() {
    navBar.classList.remove(classToRemove);
    line1.classList.remove(classToRemove);
    line2.classList.remove(classToRemove);
    line3.classList.remove(classToRemove);

    sections.forEach((section, sectionIndex) => {
      if (index === sectionIndex) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});




var isLiteCode=document.querySelectorAll(".tagembed-socialwall");isLiteCode.forEach(t=>{if(t&&t.getAttribute("view-url")){var e=e||function(t,e){var i={},a=null,l=null,r=!1,o=!0,s=function(t){var e;if("string"==typeof t.data)try{e=JSON.parse(t.data)}catch(r){(item={}).type="",e=item}else e=t.data;switch(e.type){case"getHeight":for(var s in i)if(i[s].id==e.data.iframe){var c=parseInt(i[s].getAttribute("data-fixed-height"));1==c&&(i[s].parentElement.parentElement.style.height=e.data.height+"px",i[s].style.height=e.data.height+"px",i[s].style.minHeight=e.data.height+"px")}null==a&&g(e.source),null==l&&(backlink=!1,(l=document.createElement("a")).href=e.data.refererlink,l.text=e.data.referer,l.target="_blank",l.style.display="none",document.body.appendChild(l));break;case"showPopUp":e.data.parentWidth=window.innerWidth,d(e.data,e.source);break;case"popupPost":n(e.data);break;case"closePopUp":h();break;case"playSlick":for(var s in i)i[s].id==e.data.iframe&&i[s].contentWindow.postMessage(e.data,i[s].src);break;case"loadComplete":o=e.loadstatus;break;case"scroll":for(var s in i){var c=parseInt(i[s].getAttribute("data-fixed-height"));if(parseInt(i[s].getAttribute("data-wall")),1==c){var m=document.documentElement.scrollTop;"top"==e.data.type?m-=120:m+=120,document.documentElement.scrollTop=m}}}},n=function(t){var e=document.getElementById("_tagembed_modal_frame");e&&a&&r&&e.contentWindow.postMessage(t,e.src)},d=function(t,e){var i=document.getElementById("_tagembed_modal_frame");i&&a?r&&(i.style.display="block",i.contentWindow.postMessage(t,i.src)):((a=document.createElement("iframe")).src="https://widget.tagembed.com/widget-modal/index.html",a.id="_tagembed_modal_frame",a.scrolling="no",a.frameborder=0,a.allowtransparency="true",a.style.display="block",a.style.position="fixed",a.style.left="0px",a.style.right="0px",a.style.top="0px",a.style.bottom="0px",a.style.width="100%",a.style.height="100%",a.style.border="none",a.style.zIndex="99999999",a.title="Tagembed widget")},g=function(t){document.getElementById("_tagembed_modal_frame")||((a=document.createElement("iframe")).src="https://widget.tagembed.com/widget-modal/index.html",a.id="_tagembed_modal_frame",a.scrolling="no",a.frameborder=0,a.allowtransparency="true",a.style.display="none",a.style.position="fixed",a.style.left="0px",a.style.right="0px",a.style.top="0px",a.style.bottom="0px",a.style.width="100%",a.style.height="100%",a.style.border="none",a.style.zIndex="999999999999",a.title="Tagembed widget",document.body.appendChild(a),a.onload=function(){r=!0})},h=function(){document.getElementById("_tagembed_modal_frame").style.display="none"};return{init:window.onload=function(){var t,e=0;for(var a in i)i.hasOwnProperty(a)&&++e;0==e&&window.addEventListener("message",s,!1);var l=document.getElementsByClassName("tagembed-container"),r="?viewURL",n="no";window.location!==window.parent.location&&(r="?wix",n="auto");var d=document.getElementsByClassName("tagembed-socialwall");document.querySelector(".tagembed-socialwall");for(var g=0;g<l.length;g++){var h=l[g].clientWidth;let c=l[g].firstElementChild.getAttribute("view-url");if(c){l[g].firstElementChild.setAttribute("style","height:0px;"),h>=window.innerWidth&&(l[g].style.width="100%"),l[g].style.lineHeight="initial",l[g].style.overflow="hidden";var m=document.createElement("style");l[g].appendChild(m)}}for(var g=0;g<d.length;g++){t=d[g].getElementsByTagName("iframe");let f=d[g].getAttribute("view-url");if(0==t.length&&f){var p=1,b=150,y=d[g].parentElement.style.height;(y=parseInt(y.replace(/[^\d.-]/g,"")))>100&&(p=0,b=y);var u=d[g].getAttribute("data-wall-id"),v=Math.random().toString(36).substring(7),$='<iframe src="https://widget.tagembed.com/'+u+r+'" data-fixed-height="'+p+'" data-height="'+b+'" data-wall="'+u+'" data-position="'+g+'" id="iframe'+v+'" style="visibility: hidden;position: absolute;margin:0;left: -999em;display: inline-block;border: none;width:100%;height:100%;" scrolling="'+n+'" frameborder="0" allowtransparency="true" title="Tagembed widget"></iframe>';d[g].innerHTML=$,d[g].style.webkitOverflowScrolling="touch";try{d[g].parentElement.style.webkitOverflowScrolling="touch"}catch(w){}$=d[g].firstChild,i[g]=$,document.getElementById("iframe"+v).addEventListener("load",function(){var t=this.getAttribute("data-position"),e=this.getAttribute("id"),i=this.getAttribute("data-fixed-height"),a=this.getAttribute("data-height");this.style.visibility="visible",this.style.position="static";var r=l[t].offsetHeight;this.style.minHeight=r+"px";var s=window.location.href.toString();s.indexOf("?")>0&&(s=s.substring(0,s.indexOf("?")));var n={type:"startEmbed",url:s,id:e,fixedHeight:i,iframeHeight:a,theme:d[t].getAttribute("data-wall-theme")};this.contentWindow.postMessage(n,this.src);for(var g=document.querySelectorAll("p:empty"),h=g.length-1;h>-1;h--)g[h].parentNode.removeChild(g[h]);setTimeout(function(){var e=d[t].offsetHeight;l[t].clientHeight<e&&l[t].onscroll?l[t].onscroll=function(){if(l[t].scrollTop+l[t].offsetHeight>=parseInt(e)-parseInt(300)&&o){o=!1;var i={type:"loadMore"};d[t].firstChild.contentWindow.postMessage(i,d[t].firstChild.src)}}:window.onscroll=function(){var t=document.body,e=document.documentElement,i=Math.max(t.scrollHeight,t.offsetHeight,e.clientHeight,e.scrollHeight,e.offsetHeight);if(window.innerHeight+window.pageYOffset>=parseInt(i)-parseInt(50)&&o){o=!1;for(var a={type:"loadMore"},l=0;l<d.length;l++){let r=d[l].getAttribute("view-url");r&&d[l].firstChild.contentWindow.postMessage(a,d[l].firstChild.src)}}}},5e3)})}}}}}(window,void 0);e.init()}else if(t&&!t.getAttribute("view-url")){var i=i||function(t,e){function i(t){for(var e="",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=i.length,l=0;l<t;l++)e+=i.charAt(Math.floor(Math.random()*a));return e}return{init:function(){for(var t=document.getElementsByClassName("tagembed-socialwall"),e=0;e<t.length;e++)if(!t[e].getAttribute("view-url")&&(void 0==t[e].getAttribute("data-is-load")||"1"==t[e].getAttribute("data-is-load")||null==t[e].getAttribute("data-is-load"))){let a=`root_${i(5)}`;t[e].setAttribute("data-render-id",a),t[e].setAttribute("data-is-load",0),t[e].setAttribute("id",`co_${a}`);let l=document.createElement("div");l.setAttribute("id",a);for(var e=0;e<l.childNodes.length;e++)if("div"==l.childNodes[e].tagName){l.removeChild(l.childNodes[e]);break}document.getElementById(`co_${a}`).appendChild(l);let r=document.createElement("link");r.setAttribute("type","text/css"),r.setAttribute("rel","stylesheet"),r.setAttribute("href","https://widget.tagembed.com/widget/static/css/react-build.css"),document.head.appendChild(r);let o=document.createElement("script");o.setAttribute("src","https://widget.tagembed.com/widget/static/js/react-build.js"),document.body.appendChild(o)}}}}(window,void 0);i.init()}});