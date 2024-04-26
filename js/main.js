window.onload = () => {
  const itemArray = [
    [
      15.43,
      1345,
      153,
      33.7
    ],
    [
      17.2,
      1532,
      187,
      28.34
    ],
    [
      18.27,
      1634,
      176,
      46.71
    ],
  ]

  const options = {
    decimal: '.',
    useEasing: true
  };

  let counter = null;
  
  const itemList = document.querySelectorAll(".car__desc-item");
  let i = 0;
  let limit = null;

  itemListStartHandler(i);
  // if(carSwiper.swipeDirection == "prev") {
  //   i++;
  //   itemListHandler(i);
  //   counter.start();
  // } else if(carSwiper.swipeDirection == "prev") {
  //   i--;
  //   itemListHandler(i);
  //   counter.start();
  // } 

  carSwiper.on('slideNextTransitionStart', function () {
    i++;
    itemListUpdateHandler(i);
  });

  carSwiper.on('slidePrevTransitionStart', function () {
    i--;
    itemListUpdateHandler(i);
  });

  function itemListStartHandler (index) {
    itemList.forEach(function(item, idx){
      limit = itemArray[index][idx];
      counter = new CountUp(`section${idx + 1}`, 0, limit, 0.55, options);
      counter.start();
    });
  }

  function itemListUpdateHandler (index) {
    itemList.forEach(function(item, idx){
      limit = itemArray[index][idx];
      counter = new CountUp(`section${idx + 1}`, 0, limit, 0.55, options);
      counter.update(limit);
    });
  }
}


// let setCount = setInterval(function(){
//   if ((Math.floor(counter * 10) / 10) >= limit) {
//     clearInterval(setCount);
//   } else {
//     counter += .1;
//   }
//   item.querySelector(`.val.section${idx2 + 1} span`).innerText = (Math.floor(counter * 10) / 10);
// }, 0);

// itemList.forEach(function(item, idx){
//   let counter = null;
//   item.querySelector(".val span").style.setProperty("--info-count", 200);

//   counter = item.querySelector(".val span").style.getPropertyValue("--info-count");

//   item.querySelector(".val span").innerText = counter;
// });