const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        }
        else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+.5}s`;
        }
    });
        burger.classList.toggle('toggle');
    });
}

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    } 
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
   } 
});

navSlide();

const counters = document.querySelectorAll('.counter');
const speed = 200;
counters.forEach(item => {
    const updateCount = () => {
        const target = +item.getAttribute('data-target');
        const count = +item.innerText;

        const inc = target / speed;

        if (count < target) {
            item.innerText = count + inc;
            setTimeout(updateCount, 1);
        }
        else {
            count.innerText = target;
        }

    }
    updateCount();
});

const list1 = document.querySelector('#list .r8c1');
const list2 = document.querySelector('#list .r8c2');
const list3 = document.querySelector('#list .r8c3');
const list4 = document.querySelector('#list .r9c1');
const list5 = document.querySelector('#list .r9c2');
const list6 = document.querySelector('#list .r9c3');

const fundamentals = document.querySelector('#fundamentals');
fundamentals.addEventListener('change', function (e) {
    if (fundamentals.checked) {
        list1.style.display = "grid";
        list2.style.display = "grid";
    }
    else {
        list1.style.display = 'none';
        list2.style.display = 'none';

    }
})

const intermidiate = document.querySelector('#intermidiate');
intermidiate.addEventListener('change', function (e) {
    if (intermidiate.checked) {
        list3.style.display = "grid";
        list4.style.display = "grid";
    }
    else {
        list3.style.display = "none";
        list4.style.display = "none";
        
    }
})

const masters = document.querySelector('#masters');
masters.addEventListener('change', function (e) {
    if (masters.checked) {
        list5.style.display = "grid";
        list6.style.display = "grid";
    }
    else {
        list5.style.display = "none";
        list6.style.display = "none";
    }
    
    
})

