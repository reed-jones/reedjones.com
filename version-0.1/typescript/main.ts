window.onload = makeDivs;

function makeDivs(){
	var title = document.getElementById("title"),
		subtitle = document.getElementById("subtitle"),
		aboutMe = document.getElementById("about-me"),
		contactMe = document.getElementById("contact-me"),

		title_r = document.createElement("div"),
		title_t = document.createElement("div"),
		subtitle_t = document.createElement("div"),
		subtitle_l = document.createElement("div"),
		aboutMe_t = document.createElement("div"),
		aboutMe_l = document.createElement("div"),
		contactMe_t = document.createElement("div");

	title_r.classList.add("titleBorderRight");
	title_t.classList.add("titleBorderTop");
	subtitle_t.classList.add("subtitleBorderTop");
	subtitle_l.classList.add("subtitleBorderLeft");
	aboutMe_t.classList.add("aboutMeBorderTop");
	aboutMe_l.classList.add("aboutMeBorderLeft");
	contactMe_t.classList.add("contactMeBorderTop");

	title.appendChild(title_r);
	title.appendChild(title_t);
	subtitle.appendChild(subtitle_t);
	subtitle.appendChild(subtitle_l);
	aboutMe.appendChild(aboutMe_t);
	aboutMe.appendChild(aboutMe_l);
	contactMe.appendChild(contactMe_t);

	setTimeout(() => {
		title_r.style.bottom =  "-100%";
 		title_t.style.right =  "0";

 		// subtitle_t.style.left = "0";
 		// subtitle_l.style.bottom = "0";

 		aboutMe_t.style.left = "66%";
 		aboutMe_l.style.bottom = "0";

 		 contactMe_t.style.left = "0";
 		// contactMe_t.style.right = "0";
 		contactMe_t.style.width = "100%";
	}, 10);
}
