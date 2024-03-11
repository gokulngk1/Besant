const imgs = document.querySelectorAll(".header-slider ul img");
const prev_but = document.querySelector(".control_prev");
const next_but = document.querySelector(".control_next");

let n = 1;

function changeSlide() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  imgs[n].style.display = "block";
}
changeSlide();

prev_but.addEventListener("click", (e) => {
  if (n > 0) {
    n--;
  } else {
    n = imgs.length - 1;
  }
  changeSlide();
});
next_but.addEventListener("click", (e) => {
  if (n < imgs.length - 1) {
    n++;
  } else {
    n = 0;
  }
  changeSlide();
});
