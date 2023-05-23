const HEADER = document.querySelector("header")
const BURGER = document.querySelector(".burger")
const NAV = document.querySelector(".header__nav")
const BUTTON = document.querySelector(".fa-solid")

BURGER.addEventListener("click", function(){
    if (BUTTON.classList.contains("fa-bars")) {
        BUTTON.classList.add("fa-xmark")
        BUTTON.classList.remove("fa-bars")
        NAV.style.display = "flex";
    } else if (BUTTON.classList.contains("fa-xmark")) {
        BUTTON.classList.add("fa-bars")
        BUTTON.classList.remove("fa-xmark")
        NAV.style.display = "none";
    }
})