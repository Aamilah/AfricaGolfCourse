AOS.init({
  duration: 1200,  
  offset: 100,     
  easing: 'ease-in-out', 
});
const counters = document.querySelectorAll('.counter');
  
const options = {
  threshold: 0.5,
};
  
const counterObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          const counter = entry.target;
          const target = +counter.getAttribute('data-target');
          const symbol = counter.getAttribute('data-symbol') || '';  
          const symbolPosition = counter.getAttribute('data-symbol-position') || 'after'; 
          const speed = 500; 

          const updateCount = () => {
              const current = +counter.innerText;
              const increment = Math.ceil(target / speed);
  
              if (current < target) {
                  counter.innerText = current + increment;
                  setTimeout(updateCount, 20);
              } else {
                  if (symbolPosition === 'before') {
                      counter.innerText = symbol + target;  
                  } else {
                      counter.innerText = target + symbol;  
                  }
              }
          };
  
          updateCount();
          observer.unobserve(counter); 
      }
  });
}, options);

counters.forEach(counter => {
  counterObserver.observe(counter);
});

  const video = document.getElementById("golfVideo");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const muteBtn = document.getElementById("muteBtn");

  playPauseBtn.addEventListener("click", function () {
    if (video.paused) {
      video.play();
      playPauseBtn.innerHTML = "&#10074;&#10074;"; // Pause symbol
      playPauseBtn.title = "Pause";
    } else {
      video.pause();
      playPauseBtn.innerHTML = "▶"; // Play symbol
      playPauseBtn.title = "Play";
    }
  });

  muteBtn.addEventListener("click", function () {
    video.muted = !video.muted;
    muteBtn.innerHTML = video.muted ? "&#128264;" : "&#128266;"; // Speaker icons
    muteBtn.title = video.muted ? "Unmute" : "Mute";
  });
