let icon = document.getElementsByClassName('header__nav-icon');
let nav = document.getElementsByClassName('header__nav-menu');
let hamburger = icon[0];
let navBar = nav[0];

hamburger.addEventListener('click', () => {
    if(hamburger.style.display != "none") {
        hamburger.style.display = "none";
        navBar.style.display = "flex";
    }
})