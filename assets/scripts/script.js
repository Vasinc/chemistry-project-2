//consts & variables
const burgerMenu = document.querySelector('#burger-menu');
const backdrop = document.getElementById('backdrop');
const headerUl = document.getElementById('header-ul');
const headerLi = document.querySelectorAll('.header-ul__li');
const minuniUl = document.getElementById('minuni-ul');
const minuniLi = document.querySelectorAll('.li_minuni');

let previousPage = 'acasă'
let previousMinuniPage = 'piramidele-din-giza';

// functions
function toggleHeaderUl () {
    burgerMenu.classList.toggle('burger-active')
    backdrop.classList.toggle('display-block')
    headerUl.classList.toggle('display-flex')
    if(headerUl.classList.contains('display-flex')) {
        backdrop.scrollIntoView();
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'visible';
    }
    setTimeout(() => {
        headerUl.classList.toggle('width-70')
    }, 1);

    setTimeout(() => {
        headerLi.forEach(li => {
            li.classList.toggle('opacity-1')
        })
    }, 200);
}

// event listeners

burgerMenu.addEventListener('click', toggleHeaderUl)

backdrop.addEventListener('click', toggleHeaderUl)

headerUl.addEventListener('click', event => {
    if (event.target.tagName != 'LI') return;

    toggleHeaderUl();

    // changes sections and changes previousPage
    const liValue = event.target.dataset.value;
    const previousSection = document.getElementById(`${previousPage}`);
    previousSection.classList.remove('display-block');
    const currentSection = document.getElementById(`${liValue}`);
    currentSection.classList.add('display-block');
    previousPage = liValue;

    // updates Header UL visually
    headerLi.forEach(li => {
        if ( li  == event.target ) {
            li.classList.add('active-li');
        } else {
            li.classList.remove('active-li');
        }
    })
})

minuniUl.addEventListener('click', event => {
    if (event.target.tagName != 'LI') return;

    const liTarget = event.target

    minuniLi.forEach(li => {
        if (li == liTarget) {
            li.classList.add('active-li__minuni')
            const minuneValue = liTarget.dataset.value;
            const previousMinuniSection = document.getElementById(`${previousMinuniPage}`);
            previousMinuniSection.classList.remove('display-block');
            const currentMinuniSection = document.getElementById(`${minuneValue}`)
            currentMinuniSection.classList.add('display-block');
            previousMinuniPage = minuneValue;

        } else {
            li.classList.remove('active-li__minuni')
        }
    })
})