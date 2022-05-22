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

const nextRight = () =>{
      //currentImgIndex = currentImgIndex+1;
      currentImgIndex++;
      popupImg.src = thumb[currentImgIndex].src;
      hiddenArrow();
};
const nextLeft = () =>{
    //currentImgIndex = currentImgIndex-1;
  currentImgIndex--;
  popupImg.src = thumb[currentImgIndex].src;
  //console.log(currentImgIndex);
  hiddenArrow();
};

let currentImgIndex;

//console.log (popup);

//console.log (thumb);
// to jest "tablica" a raczej nodelist

thumb.forEach((el, index) => {
  el.addEventListener("click", (e) => {
    popup.classList.remove("hidden");
    arrowLeft.classList.remove("hidden");
    arrowRight.classList.remove("hidden");

    popupImg.src = e.target.src;
    //console.log(e.target.src);
    currentImgIndex = index;
    if (currentImgIndex == 0) {
      arrowLeft.classList.add("hidden");
    }
    if (currentImgIndex == thumb.length - 1) {
      arrowRight.classList.add("hidden");
    }
  });
});

popupClose.addEventListener("click", () => {
  popup.classList.add("hidden");
});

arrowRight.addEventListener("click", () => {
    nextRight();

});
arrowLeft.addEventListener("click", () => {
    nextLeft();
});

document.addEventListener("keydown", (e) => {
    if(e.code==="ArrowRight" || e.keyCode === 39) {
        nextRight();
        console.log ("w prawo");
    };
    if(e.code==="ArrowLeft" || e.keyCode === 37) {
        nextLeft();
        console.log ("w lewo");
    }
    
});
