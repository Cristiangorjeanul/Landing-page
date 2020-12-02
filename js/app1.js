
document.addEventListener('DOMContentLoaded', function () {

  //Loader
  setTimeout(function () {
    var element = document.querySelector("body");
    element.classList.add("loaded");
  }, 3500);

  //Greetings
  var date = new Date();
  var hour = date.getHours();
  var initialGreeting;
  var finalGreeting;

  if (hour < 10) {
    initialGreeting = "Good morning!";
    finalGreeting = "Have a nice day!!";
  }
  else if (hour < 17) {
    initialGreeting = 'Good afternoon!';
    finalGreeting = "Have a nice day!";
  }
  else if (hour < 20) {
    initialGreeting = 'Good afternoon!';
    finalGreeting = "All the best!";
  }
  else if (hour < 24) {
    initialGreeting = "Good evening!";
    finalGreeting = "All the best!";
  }
  else {
    initialGreeting = "Hello!";
    finalGreeting = "All the best!";
  }
  document.querySelector(".loader").innerHTML = "<br>" + initialGreeting + "<br>Welcome to:<br>Cristian`s<br>Landing Page";
  document.querySelector("#final-greeting").innerHTML = "GOODBYE!<br>" + finalGreeting + "<br>";

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
  var button = document.querySelector('#button');
  var counter = 1;
  button.addEventListener('click', function () {
    document.querySelector('#button span').innerText = counter;
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