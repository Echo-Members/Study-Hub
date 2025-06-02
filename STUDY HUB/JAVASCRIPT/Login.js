// Toggle between Sign Up and Log In
document.getElementById("goRight").addEventListener("click", function () {
    document.getElementById("formSlider").style.marginLeft = "0";
});
document.getElementById("goLeft").addEventListener("click", function () {
    document.getElementById("formSlider").style.marginLeft = "-100%";
});