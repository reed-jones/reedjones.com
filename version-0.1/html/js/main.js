function makeDivs(){var e=document.getElementById("title"),t=document.getElementById("subtitle"),d=document.getElementById("about-me"),l=document.getElementById("contact-me"),a=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div"),i=document.createElement("div"),s=document.createElement("div"),c=document.createElement("div"),m=document.createElement("div");a.classList.add("titleBorderRight"),n.classList.add("titleBorderTop"),o.classList.add("subtitleBorderTop"),i.classList.add("subtitleBorderLeft"),s.classList.add("aboutMeBorderTop"),c.classList.add("aboutMeBorderLeft"),m.classList.add("contactMeBorderTop"),e.appendChild(a),e.appendChild(n),t.appendChild(o),t.appendChild(i),d.appendChild(s),d.appendChild(c),l.appendChild(m),setTimeout(function(){a.style.bottom="-100%",n.style.right="0",s.style.left="66%",c.style.bottom="0",m.style.left="0",m.style.width="100%"},10)}window.onload=makeDivs;