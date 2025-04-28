const thumbnails = document.querySelectorAll('.thumbnail');
const picCopyright = document.querySelector('.image-copyright');
  const mainImg = document.getElementById('mainImg');
  let current = 0;

  function showImage(index) {
    thumbnails.forEach(t => t.classList.remove('active'));
    thumbnails[index].classList.add('active');
    mainImg.src = thumbnails[index].querySelector('img').src;
    current = index;
  
    // Update copyright info
    const allThumbnailItems = document.querySelectorAll('.thumbnail-item');
    const selectedCopyright = allThumbnailItems[index].querySelector('.image-copyright');
    const mainCopyright = document.querySelector('.main-image-container .image-copyright');
    
    mainCopyright.innerHTML = selectedCopyright.innerHTML;
  }
  

  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => showImage(index));
  });

  setInterval(() => {
    const next = (current + 1) % thumbnails.length;
    showImage(next);
  }, 5000);

  
const progressBar = document.getElementById('courseProgressBar');
let progress = 0;
let interval;

const updateProgressBar = () => {
  progress = 0;
  progressBar.style.width = '0%';

  interval = setInterval(() => {
    progress += 1;
    if (progress <= 100) {
      progressBar.style.width = `${progress}%`;
    } else {
      clearInterval(interval);
    }
  }, 25); 
};

const slider = tns({
  container: '#course-info-carousel',
  items: 1.7,
  slideBy: 1,
  swipeAngle: true,
  autoplay: true,
  autoplayButtonOutput: false,
  controls: false,
  nav: false,
  mouseDrag: true,
  gutter: 10,
  autoplayTimeout: 2500,
  autoplayHoverPause: true,
  onInit: updateProgressBar
});

slider.events.on('indexChanged', updateProgressBar);

  document.querySelectorAll('.star-rating').forEach(ratingContainer => {
    const ratingValue = parseFloat(ratingContainer.dataset.rating);
    const stars = ratingContainer.querySelectorAll('.star');

    stars.forEach((star, index) => {
      const starIndex = index + 1;
      if (ratingValue >= starIndex) {
        star.classList.add('filled');
      } else if (ratingValue > index && ratingValue < starIndex) {
        star.classList.add('half');
      } else {
        star.classList.remove('filled', 'half');
      }
    });
  });