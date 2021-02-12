document.addEventListener('DOMContentLoaded', function () {

  //Loader
  setTimeout(function () {
    var element = document.querySelector("body");
    element.classList.add("loaded");
  }, 3500);

  //Menu toggle burger button
  let menuButton = document.getElementById('burger-menu');

  menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('fa-bars');
    menuButton.classList.toggle('fa-times');
  });

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
  else if (hour < 19) {
    initialGreeting = 'Good afternoon!';
    finalGreeting = "Have a nice evening!";
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
  const photos = document.querySelectorAll(".my-website-screen-shoot");
  let currentSlide = 0;
  const slideTimer = 2535;

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
  var button = document.querySelector('#buttonLike');
  var counter = 1;
  button.addEventListener('click', function () {
    document.querySelector('#buttonLike span').innerText = counter;
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
  document.getElementById('time').innerHTML = today;

  //Clock 
  function showTime() {

    'use strict';

    var now = new Date(),

      hours = now.getHours(),

      minutes = now.getMinutes(),

      seconds = now.getSeconds();

    if (hours < 10) {
      hours = "0" + hours;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    document.getElementById('clock').textContent = hours + ":" + minutes + ":" + seconds;

  }

  window.onload = function () {

    'use strict';

    setInterval(showTime, 500);

  };

  //Mouse cursor circles
  document.addEventListener('mousemove', e => {

    let circles = document.createElement('circles');
    var x = e.pageX;
    var y = e.pageY;
    circles.style.left = x + "px";
    circles.style.top = y + "px";
    var circleSize = Math.random() * 100;
    circles.style.width = 5 + circleSize + "px";
    circles.style.height = 5 + circleSize + "px";

    document.body.appendChild(circles);
    setTimeout(function () {
      circles.remove();
    }, 500);
  });

  //Colored balloons
  function coloredBalloons() {
    var balloon = document.createElement('div');
    var balloonColors = ["silver", "gold", "magenta", "cyan", "lime", "violet", "red", "orange"];
    balloon.className = "balloon";
    balloon.style.left = Math.floor(Math.random() * window.innerWidth * .93) + "px";
    balloon.style.animationDelay = Math.floor(Math.random() * 25) + "s";
    balloon.style.width = Math.floor(Math.random() * 71) + "px";
    balloon.style.height = balloon.style.width;
    balloon.style.backgroundColor = balloonColors[Math.floor(Math.random() * balloonColors.length)];
    balloon.onmouseover = function () {
      balloon.style.animation = 'none';
      setTimeout(function () {
        balloon.style.animation = 'balloon-movement 35s linear infinite'
      }, 35);
    }


    if (parseInt(balloon.style.width) < 35) {
      balloon.style.zIndex = "-1";
      balloon.style.filter = "blur(1px)";
    }
    if (parseInt(balloon.style.width) > 71) {
      balloon.style.zIndex = "-1";
      balloon.style.filter = "blur(1px)";
    }
    document.body.appendChild(balloon);

    if (document.getElementsByClassName('balloon').length > 35) {
      clearInterval(balloonsAnimation);
    }
  };

  var balloonsAnimation = setInterval(coloredBalloons, 1);
}); 