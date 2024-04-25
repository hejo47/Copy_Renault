// Loop Slide
const sliderList = document.querySelectorAll(".loop__slider");

sliderList.forEach(function(elem, idx) {
  // elem.
  LoopSliderWidth(elem);
  ButtonEventListener(elem);
});

function LoopSliderWidth(elem) {
  const wrapper = elem.querySelector(".loop__wrapper");
  const itemList = wrapper.querySelectorAll(".loop__item");
  let totalImgWidth = null;
  let ImgWidth = null;

  itemList.forEach(function(item, idx) {
    const img = item.querySelector("img");
    totalImgWidth += img.clientWidth;
    wrapper.style.setProperty("--LoopSliderLength", idx + 1);
    ImgWidth = img.clientWidth;
  });

  wrapper.style.width = totalImgWidth + "px";
}

function ButtonEventListener(elem) {
  const prev = elem.querySelector(".slide__btn.prev");
  const next = elem.querySelector(".slide__btn.next");
  prev.addEventListener("click", PrevMove);
  next.addEventListener("click", NextMove);
}

function PrevMove() {
  console.log("PrevMove");
  console.log(this);
  const wrapper = this.closest(".loop__wrapper");
  console.log(wrapper);
  wrapper.style.transform = `translateX(-${ImgWidth})`;
}

function NextMove() {
  console.log("NextMove");
  console.log(this);
  const wrapper = this.closest(".loop__wrapper");
  console.log(wrapper);

  wrapper.style.transform = `translateX(${ImgWidth})`;
}
