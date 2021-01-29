//
//  DROPDOWN NAVBAR MENU ANIMATIONS
//


const hamburger = document.querySelector('.hamburger');
const dropdown = document.querySelector('.dropdown-menu');
const links = document.querySelectorAll('.dropdown-menu li');
const aElement = document.querySelector('.hamburger a');

hamburger.addEventListener('click', (e) => {

    dropdown.classList.toggle('open');
    aElement.classList.toggle('open');

    e.preventDefault();

});

links.forEach( link => {

    link.addEventListener('click', () => {

        dropdown.classList.toggle('open');
        aElement.classList.toggle('open');

    });    

});


//
//  ON SCROLL STICKY NAVBAR
//


const header = document.querySelector('header');
const headerOffset = header.offsetTop;

    window.addEventListener('scroll', () => {

        if ( pageYOffset > headerOffset ) {
            header.classList.add('fromTheTop')
        }        
        else if ( pageYOffset === headerOffset ) {
            header.classList.remove('fromTheTop')
        }

    });


//
//  BACK TO TOP ARROW
//


const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {

    if ( pageYOffset >= 100 ) {
        backToTop.classList.add('show')
    }
    else {
        backToTop.classList.remove('show')
    }

});


//
//  LIGHTBOX
//

const images = document.querySelectorAll('img');
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

images.forEach( image => {

    image.addEventListener('click', e => {

        const img = document.createElement('img');
        lightbox.classList.add('active');        
        img.src = image.src;

        while (lightbox.firstChild) {

            lightbox.removeChild(lightbox.firstChild);
        }

        lightbox.appendChild(img);
        
    });

});

lightbox.addEventListener('click', e => {

    if ( e.target !== e.currentTarget ) return;

    lightbox.classList.remove('active');

});