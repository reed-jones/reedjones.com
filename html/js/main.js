function makeDivs(){var e=document.getElementById("title"),t=document.getElementById("subtitle"),d=document.getElementById("about-me"),l=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div"),a=document.createElement("div"),n=document.createElement("div"),s=document.createElement("div");l.classList.add("titleBorderRight"),i.classList.add("titleBorderTop"),o.classList.add("subtitleBorderTop"),a.classList.add("subtitleBorderLeft"),n.classList.add("aboutMeBorderTop"),s.classList.add("aboutMeBorderLeft"),e.appendChild(l),e.appendChild(i),t.appendChild(o),t.appendChild(a),d.appendChild(n),d.appendChild(s),setTimeout(function(){l.style.top="0",i.style.left="0",o.style.left="0",a.style.bottom="0",n.style.right="0",s.style.bottom="0"},10)}window.onload=makeDivs;