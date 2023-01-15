let specialDisplay = document.getElementById("sp-disp");
let specialDisplayText = window.getComputedStyle(specialDisplay, "::after");
let sections = document.getElementsByClassName("section");
let animElements = document.querySelectorAll(".enter-anim");

// FUNCTION TO CHANGE THE SPECIAL DISPLAY IMAGE
let showAnImage = (imgUrl) => {
    specialDisplay.src = imgUrl;
    specialDisplay.style.backgroundImage = `url(` + imgUrl + `)`;

}


// SECTION ANIMATIONS
var triggerHeroSection = new IntersectionObserver(function(entries) {
	if(entries[0].intersectionRatio > 0) {
        specialDisplay.style.backgroundImage = "url('../images/one.jpg')"
    } 
		
}, { threshold: [0] });

var triggerAboutSection = new IntersectionObserver(function(entries) {
	if(entries[0].intersectionRatio > 0) {
        specialDisplay.style.backgroundImage = "url('../images/two.jpg')"
    } 
		
}, { threshold: [0] });

var triggerExpSection = new IntersectionObserver(function(entries) {
	if(entries[0].intersectionRatio > 0) {
        specialDisplay.style.backgroundImage = "url('../images/three.jpg')"
    } 
		
}, { threshold: [0] });

// FADE-IN ENTER ANIMATION

enterAnimation = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = 'enter-anim .5s .1s forwards ease-out';
        }
    })
})


// ANIMATION TRIGGERS VIA INTERSECTION API
animElements.forEach(el => {
    enterAnimation.observe(el);
})
triggerHeroSection.observe(document.querySelector("#herosection"));
triggerAboutSection.observe(document.querySelector("#aboutsection"));
triggerExpSection.observe(document.querySelector("#expsection"));





// SWITCH THEME FUNCTION

let switchTheme = () => {
    document.body.classList.toggle("dark-theme");
}