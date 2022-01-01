/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');


/*===== MENU SHOW =====*/
/* Validate if constant exists */

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));


/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close';
        const proudContent = document.getElementsByClassName('proud__list');
        for (let item of proudContent) {
            item.classList.remove('top-animation-fast');
        }

        const skillContent = document.getElementsByClassName('skills__list');
        for (let item of skillContent) {
            item.classList.remove('top-animation-fast');
        }
    }

    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
        const proudContent = document.getElementsByClassName('proud__list');
        for (let item of proudContent) {
            item.classList.add('top-animation-fast');
        }

        const skillContent = document.getElementsByClassName('skills__list');
        for (let item of skillContent) {
            item.classList.add('top-animation-fast');
        }
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
})

/*==================== QUALIFICATION TABS ====================*/

const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active');
        })

        target.classList.add('qualification__active');

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active');
        })

        tab.classList.add('qualification__active');
    })
})


/*==================== CHANGE BACKGROUND HEADER ====================*/

function scrollHeader() {
    history.replaceState(null, null, ' ');
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

window.addEventListener('click', function(e) {
    navMenu.classList.remove('show-menu');
}, true)

document.getElementById('scroll-up').click();

history.scrollRestoration = 'manual';

window.addEventListener("hashchange", function() {
    var mobileDevice = window.matchMedia("(max-width: 770px)");
    if (!mobileDevice.matches) {
        window.scrollTo(window.scrollX, window.scrollY - 50);
    }
});

  setTimeout(function() {
    console.clear();
}, 4000);


/*==================== SHOW SCROLL UP ====================*/

function scrollUp() {
    const scrollup = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollup.classList.add('show-scroll');
    else scrollup.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

history.replaceState(null, null, ' ');