// Slenderbox 1.1, https://github.com/mpetroff/slenderbox
(function(u,h){function p(j){l.style.opacity=0;m.style.display="inline";a=new Image;a.onload=function(){var b=a.height,j=a.width;a.height>f.clientHeight-55-80&&(a.height=f.clientHeight-55-80,a.width=a.width*a.height/b);a.width>f.clientWidth-20-80&&(a.width=f.clientWidth-20-80,a.height=b*a.width/j);l.style.height=a.height+"px";l.style.width=a.width+"px";c.style.height=a.height+55+"px";c.style.width=a.width+20+"px";c.style.left=f.clientWidth/2-(a.width+20)/2+"px";c.style.top=f.clientHeight/2-(a.height+
20)/2+"px";m.style.left=a.width/2-15+10+"px";m.style.top=a.height/2-15+10+"px";g.style.height=a.height+20+"px";g.style.width=a.width/2+"px";r.style.top=a.height/2+10-23.5+"px";n.style.height=g.style.height;n.style.width=g.style.width;v.style.top=r.style.top;m.style.display="none";setTimeout(function(){l.style.backgroundImage="url("+a.src+")";l.style.opacity=1},300);e<d.length-1&&((new Image).src=d.item(e+1))};d=h.querySelectorAll('[data-sbox="'+j.getAttribute("data-sbox")+'"]');for(var b=0;b<d.length;b++)d.item(b)==
j&&(e=b,b=d.length);q=""!=j.getAttribute("data-sbox")?!0:!1;a.src=j;w.innerHTML=j.title;1<d.length&&q&&(x.innerHTML="Image "+(e+1)+" of "+d.length,n.style.display=0<e?"inline":"none",g.style.display=e<d.length-1?"inline":"none")}function y(){p(d.item(e+1))}function z(){p(d.item(e-1))}function s(){k.style.opacity=0;setTimeout(function(){try{k.parentNode.removeChild(k)}catch(a){}},300);h.removeEventListener("keydown",A,!1);u.removeEventListener("resize",B,!1)}function A(a){a.preventDefault();a=a.keyCode;
39==a?e<d.length-1&&q&&y():37==a?0<e&&q&&z():27==a&&s()}function B(){p(d.item(e))}function b(a,b){var c=h.createElement("div");c.id=a;b.appendChild(c);return c}var k,f,c,t,m,l,C,w,x,g,r,n,v,a,d,e,q;h.addEventListener("DOMContentLoaded",function(){[].forEach.call(h.querySelectorAll("[data-sbox]"),function(a){a.addEventListener("click",function(d){d.preventDefault();k=b("sboxWrapper",h.body);f=b("sboxOverlay",k);c=b("slenderbox",k);t=b("sboxImgH",c);m=b("sboxLoad",t);sboxLoading=b("sboxLoading",m);
l=b("sboxImg",t);C=b("sboxX",c);w=b("sboxTitle",c);x=b("sboxNum",c);g=b("sboxNext",c);n=b("sboxPrev",c);r=b("sboxNextA",g);v=b("sboxPrevA",n);c.style.left=f.clientWidth/2-160+"px";c.style.top=f.clientHeight/2-160+"px";c.className="sboxTransitions";k.style.opacity=1;C.addEventListener("click",s,!1);f.addEventListener("click",s,!1);g.addEventListener("click",y,!1);n.addEventListener("click",z,!1);h.addEventListener("keydown",A,!1);u.addEventListener("resize",B,!1);p(a)},!1)})},!1)})(window,document);
