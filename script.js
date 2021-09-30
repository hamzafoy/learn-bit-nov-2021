let icon = document.querySelector('.header__nav-icon');
let nav = document.querySelector('.header__nav-menu');
let closeButton = document.querySelector('.nav-menu__close');



icon.addEventListener('click', () => {
    if(icon.style.display = "block") {
        icon.style.animation = "revertMenuBack 0.25s ease forwards"
        nav.style.animation = "animatedMenuForward 0.25s ease forwards";
        setTimeout(() => {
            icon.style.display = "none";
            nav.style.display = "flex";
        }, 500)
    }
});


closeButton.addEventListener('click', () => {
    if(nav.style.display = "flex") {
        nav.style.animation = "revertMenuBack 0.25s forwards";
        icon.style.animation = "animatedMenuForward 0.25s ease forwards";
        setTimeout(() => {
            icon.style.display = "block";
            nav.style.display = "none";
        }, 500);
    }
});