// Text blink effect including redirection to an specific URL
// https://github.com/Webservice-Digital/404-Error-Landingpage/tree/main
// Jan Gebser (IT-Consultant)
// github@brainhub24.com
// https://webservice.digital
		

const blinkElement = document.querySelector(".blink");
if (blinkElement) {
  setInterval(() => {
    blinkElement.classList.toggle("hide");
  }, 600);
}

// Redirect to the homepage when a key is pressed
function redirectToHomepage() {
  // Redirect to NC
  if (window.location.replace) {
    window.location.replace("https://netcore.digital/");
  }
}

window.onkeypress = redirectToHomepage;