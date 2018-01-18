/**
 * Created by Nicolas on 17/01/2018.
 * add animation to menu_dropdown-content
 */
// When the user make event "mouseover", fire AnimationControl
window.addEventListener("mouseover",animationControl);
// Add the animated class  to the animated object
function animationControl() {
    // Get the animated object from html
    var animation = document.getElementById("animationStarter");
    animation.classList.add("zoomIn") //add animated class
}