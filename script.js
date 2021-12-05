window.addEventListener("load", (event) => {
  const slides = document.querySelector(".slides");
  const imgs = document.querySelectorAll(".slides img");
  const length = imgs.length;

  const prevBtn = document.querySelector("#prev");
  const nextBtn = document.querySelector("#next");

  //counter to move the slides left and right

  let counter = 1;

  const width = imgs[0].clientWidth;

  slides.style.transform = `translateX(${(-width * counter)}px)`;

  nextBtn.addEventListener("click", () => {
    if (counter >= length - 1) return;
    slides.style.transition = `transform 0.4s ease-in-out`;
    counter++;
    slides.style.transform = `translateX(${(-width * counter)}px)`;
  });

  prevBtn.addEventListener("click", () => {
    if (counter <= 0) return;
    slides.style.transition = `transform 0.4s ease-in-out`;
    counter--;
    slides.style.transform = `translateX(${(-width * counter)}px)`;
  });

  slides.addEventListener("transitionend", () => {
    if (imgs[counter].id === "firstClone") {
      slides.style.transition = "none";
      counter = length - counter;
      slides.style.transform = `translateX(${(-width * counter)}px)`;
    }
    if (imgs[counter].id === "lastClone") {
      slides.style.transition = "none";
      counter = length - 2;
      slides.style.transform = `translateX(${(-width * counter)}px)`;
    }
  });
});
