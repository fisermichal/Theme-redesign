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

    links.forEach( link => {
        link.classList.toggle('fade');
    });

    e.preventDefault();

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


const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('img');

    images.forEach( image => {
        image.addEventListener('click', e => {
            lightbox.classList.add('active');
            const img = document.createElement('img');
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