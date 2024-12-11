let currentIndex = 0;

function showImage(index) {
   const images = document.querySelectorAll('.carousel img');
   images.forEach((img, i) => {
       img.classList.remove('active');
       if (i === index) {
           img.classList.add('active');
       }
   });
}

function nextImage() {
   const images = document.querySelectorAll('.carousel img');
   currentIndex = (currentIndex + 1) % images.length; // Ciclo al inicio
   showImage(currentIndex);
}

function prevImage() {
   const images = document.querySelectorAll('.carousel img');
   currentIndex = (currentIndex - 1 + images.length) % images.length; // Ciclo al final
   showImage(currentIndex);
}