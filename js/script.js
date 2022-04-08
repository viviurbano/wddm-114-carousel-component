'use strict';

const img = document.getElementById('main-image');
const leftBtn = document.getElementsByClassName('btn--left');
const rightBtn = document.getElementsByClassName('btn--right');
const dot = document.getElementsByClassName('dot'); //???

const testimonialTtx = document.getElementsByClassName('testimonial-text');
const testimAuthorTtx = document.getElementsByClassName('testimonial-author');

const imgArray = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg'];
const txtTestimonial = [
  'Lorem ipsum elit. Deleniti amet, suscipit aut perferendis omnis magnam voluptatum sed nobis vero reprehenderit ex incidunt suscipit aut',
  'Lorem ipsum dolor sit amet consectetur consectetur adipisicing elit. Modi tempora similique et sequi saepe dolorum molestias ad magnam magnam?',
  'Lorem ipsum ipsum consectetur adipisicing elit. Natus vero, esse adipisci omnis magnam quos. Perspiciatis adipisci adipisci omnis!',
  'Lorem ipsum sit amet consectetur. Tempora consectetur similique omnis magnam quibusdam eius. Natus vero, numquam adipisci porro esse',
];
const author = [
  'Olivia Orange',
  'Naomi Silver',
  'Elena Kinsley',
  'Bella Autumn',
];

img.src = imgArray[0];
let position = 0;

const moveLeft = () => {
  if (position < 1) {
    position = imgArray.length - 1;
    img.setAttribute('src', imgArray[position]);
  }
  img.setAttribute('src', imgArray[position - 1]);
  dot[position].classList.toggle('dot--fill');
  testimonialTtx[0].innerText = txtTestimonial[position];
  testimAuthorTtx[0].innerText = author[position];
  position--;
};

const moveRight = () => {
  if (position >= imgArray.length - 1) {
    position = 0;
    img.setAttribute('src', imgArray[position]);
  }
  img.setAttribute('src', imgArray[position + 1]);
  dot[position].classList.toggle('dot--fill');
  testimonialTtx[0].innerText = txtTestimonial[position];
  testimAuthorTtx[0].innerText = author[position];
  position++;
};

setInterval(moveRight, 2000);

console.log(testimAuthorTtx);
