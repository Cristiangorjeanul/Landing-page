
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

  //Slide show
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

  //ButtonS
  var button = document.querySelector('.button1');
  var counter = 1;

  button.addEventListener('click', function () {
    document.querySelector('.button1 span').innerText = counter;
    counter++;
  });

  var button = document.querySelector('.button2');
  var counter = 1;

  button.addEventListener('click', function () {
    document.querySelector('.button2 span').innerText = counter;
    counter++;
  });

  var button = document.querySelector('.button3');
  var counter = 1;
  button.addEventListener('click', function () {
    document.querySelector('.button3 span').innerText = counter;
    counter++;
  });

  var button = document.querySelector('.button4');
  var counter = 1;
  button.addEventListener('click', function () {
    document.querySelector('.button4 span').innerText = counter;
    counter++;
  });

}); 