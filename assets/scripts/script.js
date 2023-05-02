//consts & variables
const burgerMenu = document.querySelector('#burger-menu');
const backdrop = document.getElementById('backdrop');
const headerUl = document.getElementById('header-ul');
const headerLi = document.querySelectorAll('.header-ul__li');


// functions
function toggleHeaderUl () {
    burgerMenu.classList.toggle('burger-active')
    backdrop.classList.toggle('display-block')
    headerUl.classList.toggle('display-flex')
    if(headerUl.classList.contains('display-flex')) {
        backdrop.scrollIntoView();
        document.body.style.overflow = 'hidden';
        console.log('hidden')
    } else {
        document.body.style.overflow = 'visible';
        console.log('visible')
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
    if (event.target.tagName != 'A') return;

    toggleHeaderUl();

    // updates Header UL visually
    headerLi.forEach(li => {
        if ( li  == event.target ) {
            li.classList.add('active-li');
        } else {
            li.classList.remove('active-li');
        }
    })
})