let icon = document.querySelector('.header__nav-icon');
let nav = document.querySelector('.header__nav-menu');
let closeButton = document.querySelector('.nav-menu__close');

icon.addEventListener('click', () => {
    if(icon.style.display = "block") {
        nav.style.animation = "animatedMenuForward 1.5s ease forwards";
        setTimeout(() => {
            icon.style.display = "none";
            nav.style.display = "flex";
        })
    }
})

closeButton.addEventListener('click', () => {
    if(nav.style.display = "flex") {
        nav.style.animation = "revertMenuBack 1.5s forwards";
        setTimeout(() => {
            icon.style.display = "block";
            nav.style.display = "none";
        }, 1000);
    }
})

/* hamburger.style.display = "block";
        navBar.style.display = "none"; */