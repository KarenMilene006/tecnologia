const menu = document.querySelector("header");
function toggleHeaderClass() {
  if (window.scrollY > 0) {
    menu.classList.add("active");
  } else {
    menu.classList.remove("active");
  }
}

function animateHeaderTransition() {
  requestAnimationFrame(toggleHeaderClass);
}
window.addEventListener("scroll", animateHeaderTransition);

toggleHeaderClass();
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
});







const carousel = document.getElementById('carousel');
const imgContainers = carousel.querySelectorAll('.img-carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentImageIndex = 0;

prevBtn.addEventListener('click', () => {
  if (currentImageIndex === 0) {
    currentImageIndex = imgContainers.length - 1;
  } else {
    currentImageIndex--;
  }

  showImage(currentImageIndex);
});

nextBtn.addEventListener('click', () => {
  if (currentImageIndex === imgContainers.length - 1) {
    currentImageIndex = 0;
  } else {
    currentImageIndex++;
  }

  showImage(currentImageIndex);
});

function showImage(index) {
  for (let i = 0; i < imgContainers.length; i++) {
    imgContainers[i].style.display = 'none';
  }

  imgContainers[index].style.display = 'flex';
}




const menuItems = document.querySelector('nav ul');

document.querySelector('.menu-link').addEventListener('click', () => {
  menuItems.classList.toggle('active');
});

window.addEventListener('resize', () => {
  const width = window.innerWidth;

  if (width <= 767) {
    menuItems.classList.add('column');
  } else {
    menuItems.classList.remove('column');
  }
});
