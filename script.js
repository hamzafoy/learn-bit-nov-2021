let icon = document.querySelector('.header__nav-icon');
let nav = document.querySelector('.header__nav-menu');
let closeButton = document.querySelector('.nav-menu__close');



icon.addEventListener('click', () => {
    if(icon.style.display = "block") {
        icon.style.animation = "revertMenuBack 1.5s ease forwards"
        nav.style.animation = "animatedMenuForward 1.5s ease forwards";
        setTimeout(() => {
            icon.style.display = "none";
            nav.style.display = "flex";
        }, 1000)
    }
});


closeButton.addEventListener('click', () => {
    if(nav.style.display = "flex") {
        nav.style.animation = "revertMenuBack 1.5s forwards";
        icon.style.animation = "animatedMenuForward 1.5s ease forwards";
        setTimeout(() => {
            icon.style.display = "block";
            nav.style.display = "none";
        }, 1000);
    }
});