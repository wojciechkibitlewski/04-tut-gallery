/* 
// działanie na pojedyńczym, w tym prypadku pierwszym znaleionym elemencie

const thumb = document.querySelector(".thumb img");

// na znalezionym elemencie wywołujemy metodę  addEventListener
// która jako pierwszy argument przyjmuje nazwę eventu (click)
// a następnie to co ma się stać
thumb.addEventListener("click", () => {
    console.log ("test");
})

na marginesie

const myFunction = () => {} // definicja funkcji
myFunction(); // wywołanie funkcji

*/
/* 
jeśli chcemy obsłużyć wszystkie lementy .thumb>img
 */
const thumb = document.querySelectorAll(".thumb img");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");
const popupImg = document.querySelector(".popup__img");
const arrowLeft = document.querySelector(".popup__arrow--left");
const arrowRight = document.querySelector(".popup__arrow--right");

const hiddenArrow = () => {
  if (currentImgIndex == 0) {
    arrowLeft.classList.add("hidden");
  } else if (currentImgIndex == thumb.length - 1) {
    arrowRight.classList.add("hidden");
  } else {
    arrowLeft.classList.remove("hidden");
    arrowRight.classList.remove("hidden");
  }
};

const showNextRight = () => {
  //currentImgIndex = currentImgIndex+1;
  currentImgIndex++;
  popupImg.src = thumb[currentImgIndex].src;
  hiddenArrow();
};
const showNextLeft = () => {
  //currentImgIndex = currentImgIndex-1;

  currentImgIndex--;
  popupImg.src = thumb[currentImgIndex].src;
  //console.log(currentImgIndex);
  hiddenArrow();
};
const closePopup = () => {
  popup.classList.add("fade-out");
  setTimeout(() => {
    popup.classList.add("hidden");
    popup.classList.remove("fade-out");
    thumb.forEach((element) => {
      element.setAttribute("tabindex", 1);
    });
  }, 300);
};

let currentImgIndex;

thumb.forEach((el, index) => {
  const showPopup = (e) => {
    popup.classList.remove("hidden");
    arrowLeft.classList.remove("hidden");
    arrowRight.classList.remove("hidden");

    popupImg.src = e.target.src;
    currentImgIndex = index;

    thumb.forEach((element) => {
      element.setAttribute("tabindex", -1);
    });

    if (currentImgIndex == 0) {
      arrowLeft.classList.add("hidden");
    }
    if (currentImgIndex == thumb.length - 1) {
      arrowRight.classList.add("hidden");
    }
  };

  el.addEventListener("click", showPopup);
  el.addEventListener("keydown", (e) => {
    if (e.code === "Enter" || e.keyCode === 13) {
      showPopup(e);
    }
  });
});

popupClose.addEventListener("click", closePopup);
arrowRight.addEventListener("click", showNextRight);
arrowLeft.addEventListener("click", showNextLeft);

document.addEventListener("keydown", (e) => {
  if (!popup.classList.contains("hidden")) {
    if (e.code === "ArrowRight" || e.keyCode === 39) {
      showNextRight();
    }
    if (e.code === "ArrowLeft" || e.keyCode === 37) {
      showNextLeft();
    }
    if (e.code === "Esc" || e.keyCode === 27) {
      closePopup();
    }
  }
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    closePopup();
  }
  //console.log(e.target);
});


// na przyszłość -> event delegation