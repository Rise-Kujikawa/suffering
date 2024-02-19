
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text', { delay: 200, origin: 'top' });
sr.reveal('.hero-img', { delay: 450, origin: 'top' });
sr.reveal('.icons', { delay: 500, origin: 'left' });
sr.reveal('.scroll-down', { delay: 500, origin: 'right' });
sr.reveal('.cv-right-block', { delay: 400, origin: 'right' });
sr.reveal('.cv-img', { delay: 250, origin: 'top' });

document.addEventListener('DOMContentLoaded', function () {
    let nextLink = document.querySelector('.next');
    let h5Element = document.querySelector('.hero-text h5');
    let h4Element = document.querySelector('.hero-text h4');
    let h1Element = document.querySelector('.hero-text h1');
    let cvImg = document.querySelector('.cv-img-1');
    let bgclass = document.querySelector('.hero');

    let originalSrc = cvImg.src;
    let originalHref = document.querySelector('.cv-img-ref').href;
    let originalH5Text = h5Element.textContent;
    let originalH4Text = h4Element.textContent;
    let originalH1Text = h1Element.textContent;

    nextLink.addEventListener('click', function (event) {
        event.preventDefault();
        if (cvImg.src !== originalSrc) {
            cvImg.src = originalSrc;
            let cvImgRef = document.querySelector('.cv-img-ref');
            cvImgRef.href = originalHref;
        } else {
            cvImg.src = './img/Essex.jpg';
            let cvImgRef = document.querySelector('.cv-img-ref');
            cvImgRef.href = '/api_project/Essex/Essex.html';
        }
        if (h5Element.textContent !== originalH5Text) {
            h5Element.textContent = originalH5Text;
            h4Element.textContent = originalH4Text;
            h1Element.textContent = originalH1Text;
        } else {
            h5Element.textContent = '#1 Trending';
            h4Element.textContent = 'New Support CV with Tactical Squadrons';
            h1Element.textContent = 'ESSEX';
        }
        bgChange();
    });
let gameplay;
gameplay = document.getElementById('gameplay-btn');
function bgChange() {
    if (h1Element.textContent === 'ESSEX') {
        bgclass.style.background = 'linear-gradient(245.59deg, #feca83 0%, #d79e8b 28.53%, #829dbf 75.52%)';
        gameplay.href = ('https://www.youtube.com/watch?v=PzG5kiPQ3v4');
    } else if (h1Element.textContent === 'MALTA') {
        bgclass.style.background = 'linear-gradient(245.59deg, #776168 0%, #3a4062 28.53%, #152149 75.52%)';
        gameplay.href = ('https://www.youtube.com/watch?v=u50gkJ2mtaE');
    }
}
    bgChange(); 
});

