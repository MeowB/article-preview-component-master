let shareButtonOff = document.querySelector("div.container-bubble > button");
let shareButtonOn = document.querySelector("div.share > button")

shareButtonOff.addEventListener("click", toggleShare);
shareButtonOn.addEventListener("click", toggleShare);

function toggleShare() {
	let shareDivMobile = document.querySelector("div.share");
	let shareDivDesktop = document.querySelector("div.share-desktop")
	let profileDiv = document.querySelector("div.profile");
	let buttonDesktop = document.querySelector("div.container-bubble > button");
	let svgbuttonDesktop = document.querySelector("div.container-bubble > button > svg > path");




	// if the screen is small and the shareDivMobile is inactive, turn it active and display it and turn the profile off
	if (visualViewport.width < 800 && shareDivMobile.classList.contains("active") === false){
		profileDiv.style.display = "none";
		shareDivMobile.style.display = "flex";
		shareDivMobile.classList.toggle("active");
		
	} // if the screen is small and the shareDivMobile is acte, turn it invisible and make the profile div reappear
	else if (visualViewport.width < 800 && shareDivMobile.classList.contains("active") === true) {
		console.log("been there")
		profileDiv.style.display = "flex";
		shareDivMobile.style.display = "none";
		shareDivMobile.classList.toggle("active");
	}

	// if the screen is big and the shareDivdesktop is inactive, turn it on.
	if (visualViewport.width > 800 && shareDivDesktop.classList.contains("active") === false){
		shareDivDesktop.style.display = "flex";
		shareDivDesktop.classList.toggle("active");

		// and toggle the button colors
		svgbuttonDesktop.style.fill = "white";
		buttonDesktop.style.backgroundColor = "hsl(217, 19%, 35%)";


	} // if the screen is big and the shareDivDesktop is active, turn it off 
	else if (visualViewport.width > 800 && shareDivDesktop.classList.contains("active") === true){
		shareDivDesktop.style.display = "none";
		shareDivDesktop.classList.toggle("active");
		
		// and toggle the button colors
		svgbuttonDesktop.style.fill = "hsl(217, 19%, 35%)";
		buttonDesktop.style.backgroundColor = "hsl(210, 46%, 95%)";
	}

	// remove the share divs if the screen reach the threshold between big and small screen
	visualViewport.addEventListener("resize", () => {
		if (visualViewport.width >= 799) {
			shareDivMobile.style.display = "none";
			profileDiv.style.display = "flex";
			shareDivMobile.classList.remove("active");
		} else if(visualViewport.width < 800) {
			shareDivDesktop.style.display = "none";
			shareDivDesktop.classList.remove("active");
		}
	})
}