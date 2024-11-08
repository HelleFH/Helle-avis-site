const slides = document.querySelectorAll(".slide");
const caption = document.querySelector(".caption");

const prev = document.querySelector("#back");
const next = document.querySelector("#next");

let current = 0;

captionText = slides[current].getAttribute("alt");
caption.textContent = captionText;

function skiftSlide() {
  slides[current].classList.remove("slide--active");
  if (this === next) {
    current++;
    if (current > slides.length - 1) {
      current = 0;
    }
  } else {
    current--;
    if (current < 0) {
      current = slides.length - 1;
    }
  }
  slides[current].classList.add("slide--active");
  captionText = slides[current].getAttribute("alt");
  caption.textContent = captionText;
}

prev.addEventListener("click", skiftSlide);
next.addEventListener("click", skiftSlide);

document.addEventListener("keydown", function (event) {
  if (event.code === "ArrowLeft") {
    current--;
    if (current < 0) {
      current = slides.length - 1;
    }
  } else if (event.code === "ArrowRight") {
    current++;
    if (current > slides.length - 1) {
      current = 0;
    }
  } else {
    return;
  }
  slides.forEach(function (slide) {
    slide.classList.remove("slide--active");
  });
  slides[current].classList.add("slide--active");
  captionText = slides[current].getAttribute("alt");
  caption.textContent = captionText;
});

let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(e) {
  touchStartX = e.touches[0].clientX;
}

function handleTouchMove(e) {
  touchEndX = e.touches[0].clientX;
}

function handleTouchEnd() {
  if (touchStartX - touchEndX > 50) {
    current++;
    if (current > slides.length - 1) {
      current = 0;
    }
  } else if (touchEndX - touchStartX > 50) {
    current--;
    if (current < 0) {
      current = slides.length - 1;
    }
  } else {
    return;
  }
  slides.forEach(function (slide) {
    slide.classList.remove("slide--active");
  });
  slides[current].classList.add("slide--active");
  captionText = slides[current].getAttribute("alt");
  caption.textContent = captionText;
}

document.addEventListener("touchstart", handleTouchStart);
document.addEventListener("touchmove", handleTouchMove);
document.addEventListener("touchend", handleTouchEnd);
