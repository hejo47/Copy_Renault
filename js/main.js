window.onload = () => {
  // Car Slide
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
