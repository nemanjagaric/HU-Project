// scroll aperaing functionality

var header = document.getElementById("header");

var myFunc = function () {
    let y = window.scrollY;
    y>=1 ? header.className = "header flyingHeader" : header.className = "header";
    
}

window.addEventListener("scroll", myFunc);

var p = document.querySelectorAll(".p");
var hero = document.getElementById("heroSection");
var heroHeight = hero.clientHeight;

for (let i = 0; i < p.length; i++) {
    var pFunc = () => {
    let x = window.scrollY;
    x> heroHeight - 350 ? p[i].className = "flying" : p[i].className = "p";
}


window.addEventListener("scroll", pFunc);
}

//mobile open/close btn functionality

var mobButton = document.getElementById("mobileIcon");
var mobCloseButton = document.getElementById("closeMobIcon");
var mobileNav = document.getElementById("mobileNav");

var mobFunc = function () {
    mobButton.style.transform = "rotate(180deg)";
    mobileNav.style.right = "0";
    mobileNav.style.transition = "1s ease";
    mobButton.style.transition = "1s ease";
    mobButton.style.opacity = "0";
    mobCloseButton.style.display = "block";
    mobCloseButton.style.opacity = "1";
    mobCloseButton.style.transition = "1s ease";
    
}
mobButton.addEventListener("click", mobFunc);

var closeFunc = function () {
    mobileNav.style.right = "-100%";
    mobileNav.style.transition = "1s ease";
    mobCloseButton.style.display = "none";
    mobButton.style.transform = "rotate(360deg)"
    mobButton.style.opacity = "1";
}

mobCloseButton.addEventListener("click", closeFunc);

var mobileListItem = document.querySelectorAll(".mobile-list-item");

for (let i = 0; i < mobileListItem.length; i++) {
    
    let hideMobNav = function () {
        mobileNav.style.right = "-100%";
        mobileNav.style.transition = "1s ease";
        mobCloseButton.style.display = "none";
        mobButton.style.transform = "rotate(360deg)"
        mobButton.style.opacity = "1";
    }

    mobileListItem[i].addEventListener("click", hideMobNav);
    
}


//dynamic year in footer

let copyrightText = document.getElementById("copyright");


copyrightText.innerHTML += new Date().getFullYear();

/////////////////////////

