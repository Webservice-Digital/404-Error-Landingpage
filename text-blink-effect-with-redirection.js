// Text blink effect including redirection to an specific URL
// https://github.com/Webservice-Digital/404-Error-Landingpage/tree/main
// Jan Gebser (IT-Consultant)
// github@brainhub24.com
// https://webservice.digital (DEMO)
		

// Get the "404 not found" heading element from the index file
const heading = document.querySelector("h1");

// Define the glitch effect function
function glitchText() {
  // Generate a random offset for each letter
  const offsets = Array.from(heading.textContent).map(() => `${Math.floor(Math.random() * 10)}px`);

  // Apply the offsets to each letter
  heading.style.textShadow = `
    -1px -1px 0 #fff,
    ${offsets[0]} ${offsets[1]} 0 #ff0,
    ${offsets[2]} ${offsets[3]} 0 #0f0,
    ${offsets[4]} ${offsets[5]} 0 #00f,
    ${offsets[6]} ${offsets[7]} 0 #f00,
    ${offsets[8]} ${offsets[9]} 0 #0ff
  `;
}

// Call the glitch effect function every 500ms
setInterval(glitchText, 500);

// Get the HTML element with the class "blink"
const blinkElement = document.querySelector(".blink");

if (blinkElement) {
  // Set an interval to toggle the "hide" class on the element every 600 milliseconds
  setInterval(() => {
    blinkElement.classList.toggle("hide");
  }, 600);
}

// Redirect to the homepage when a key is pressed
function redirectToHomepage() {
  // Redirect to the specified URL
  if (window.location.replace) {
    window.location.replace("https://netcore.digital/");
  }
}

// Set the event handler for the keypress event to call the redirectToHomepage() function
window.onkeypress = redirectToHomepage;
