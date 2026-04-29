$(document).ready(function () {
  // 1. Navbar toggle
  $("#menu-btn").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("active");
  });

  // 2. Closing menu on click
  $(".navbar a").click(function () {
    $("#menu-btn").removeClass("fa-times");
    $(".navbar").removeClass("active");
  });

  // 3. Fixed header
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 0) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
  });

  // 4. Reveal animation
  function reveal() {
    $(".reveal").each(function () {
      let windowHeight = $(window).height();
      let elementTop = $(this).offset().top;
      let revealPoint = 100;

      if (elementTop < $(window).scrollTop() + windowHeight - revealPoint) {
        $(this).addClass("active");
      }
    });
  }

  $(window).on("scroll", reveal);
  reveal();

  // 5. Portfolio Slider
  const container = $(".portfolio .box-container");
  const scrollAmount = 340;

  $("#next-btn").click(function () {
    container.animate(
      {
        scrollLeft: container.scrollLeft() + scrollAmount,
      },
      400,
    );
  });

  $("#prev-btn").click(function () {
    container.animate(
      {
        scrollLeft: container.scrollLeft() - scrollAmount,
      },
      400,
    );
  });

  // 6. Typing text
  let currentLang = $("html").attr("lang");
  let myStrings;

  if (currentLang === "uk") {
    myStrings = ["Веб-розробник", "Фрілансер", "", "Фронтенд-майстер"];
  } else {
    myStrings = ["Web Developer", "", "Freelancer", "", "Frontend Specialist"];
  }

  let typed = new Typed(".typing-text", {
    strings: myStrings,
    typeSpeed: 100,
    backSpeed: 30,
    smartBackspace: true,
    backDelay: 600,
    loop: true,
  });
});
