
document.addEventListener('DOMContentLoaded', function () {

  //Loader
  setTimeout(function () {
    var element = document.querySelector("body");
    element.classList.add("loaded");
  }, 3500);

  //Greeting
  var date = new Date();
  var hour = date.getHours();
  var greeting;

  if (hour < 10) {
    greeting = "Good morning";
  }
  else if (hour < 20) {
    greeting = 'Good afternoon';
  }
  else if (hour < 24) {
    greeting = "Good evening";
  }
  else {
    greeting = "Hello";
  }
  document.querySelector(".loader").innerHTML = "<br>" + greeting + "!<br>Welcome to:<br>Cristian`s<br>Landing Page";

  //Header Slide show
  const photos = document.querySelectorAll(".photo");
  let currentSlide = 0;
  const slideTimer = 2500;

  const changeSlides = () => {
    photos.forEach((photo) => photo.style.opacity = 0)

    if (currentSlide !== photos.length - 1) {
      currentSlide++;
    } else {
      currentSlide = 0;
    }
    photos[currentSlide].style.opacity = 1;
  };
  setInterval(changeSlides, slideTimer);

  //Button
  var button = document.querySelector('#button-2');
  var counter = 1;
  button.addEventListener('click', function () {
    document.querySelector('#button-2 span').innerText = counter;
    counter++;
  });

  //Experience timeline section
  const items = document.querySelectorAll('#timeline li');

  const isInViewport = el => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const run = () =>
    items.forEach(item => {
      if (isInViewport(item)) {
        item.classList.add('show');
      }
    });

  // Events
  window.addEventListener('load', run);
  window.addEventListener('resize', run);
  window.addEventListener('scroll', run);

 // Time bottom line
 var today = new Date();
document.getElementById('time').innerHTML=today;



}); 