$(document).ready(function () {

  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $(window).scroll(function () {
    $(".slideanim").each(function () {
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });

  // Blink - apps number
  function blink(selector) {
    $(selector).fadeOut(100, function () {
      $(this).fadeIn(1000, function () {
        blink(this);
      });
    });
  }
  $(function () {
    blink('#appNumber');
  });

  // Animated texts
  //h2 occupations
  var skills = ['FRONTEND PROJECTS', 'WEB DESIGN',
    'TEACHING & LEARNING', 'INSTRUCTIONAL DESIGN', 'TRAINING & COACHING',],
    part,
    i = 0,
    offset = 0,
    len = skills.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 135,
    speed = 15;
  var wordsSkills = function () {
    setInterval(function () {
      if (forwards) {
        if (offset >= skills[i].length) {
          ++skip_count;
          if (skip_count == skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      }
      else {
        if (offset == 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= len) {
            i = 0;
          }
        }
      }
      part = skills[i].substr(0, offset);
      if (skip_count == 0) {
        if (forwards) {
          offset++;
        }
        else {
          offset--;
        }
      }
      $('.skills').text(part);
    }, speed);
  };

  $(document).ready(function () {
    wordsSkills();
  });

  


})