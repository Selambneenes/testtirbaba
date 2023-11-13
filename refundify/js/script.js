function hoverCraftOne() {
  setTimeout(function () {
    $(".count").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 2000,
            easing: "swing",
            step: function (now) {
              now = Number(Math.ceil(now)).toLocaleString("en");
              $(this).text(now);
            },
          }
        );
    });
  });
}

var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

AOS.init({
  once: true,
});

const sticky = document.querySelector(".sticky");
const pagination = document.querySelector(".custom-pagination");

var swiper1 = new Swiper(".swiper-text-and-pagination", {
  direction: "vertical",
  effect: "fade",
  speed: 600,
  fadeEffect: {
    crossFade: true,
  },
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,

    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        ' swiper-paginations">' +
        (index + 1) +
        "</span>"
      );
    },
  },
});

// İkinci Swiper
var swiper2 = new Swiper(".swiper-img", {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,

    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        ' swiper-paginations">' +
        (index + 1) +
        "</span>"
      );
    },
  },
});
swiper1.controller.control = this.swiper2;
//
var quoteSwiper = new Swiper(".quote-slider", {
  direction: "vertical",
  effect: "slide",
  //autoHeight: true,
  loop: false, // Not recommended to enable!!!
  allowTouchMove: false,
});

var $Speed = 1000;

var imageSwiper = new Swiper(".image-slider", {
  mousewheel: true,
  speed: $Speed,
  loop: false, // Not recommended to enable!!!
  longSwipesRatio: 0.01,
  followFinger: false,
  grabCursor: true,
  watchSlidesProgress: true,
  parallax: true,
  lazy: {
    loadPrevNext: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

imageSwiper.controller.control = this.quoteSwiper;

$(document).ready(function () {
  setTimeout(function () {
    $(".dashed-border-wrapper").addClass("h-80");
  }, 150);
  setTimeout(function () {
    $(".circle2").addClass("circle-2");
  }, 700);
  setTimeout(function () {
    $(".anim-1").addClass("animation-none");
  }, 1000);
  setTimeout(function () {
    $(".anim-2").addClass("animation-none");
  }, 1300);
  setTimeout(function () {
    $(".anim-3").addClass("animation-none");
  }, 1500);
  setTimeout(function () {
    $(".anim-4").addClass("animation-none");
  }, 1800);
  setTimeout(function () {
    $(".anim-5").addClass("animation-none");
  }, 2000);
  setTimeout(function () {
    $(".header-img").addClass("animation-none");
    $(".header-bg-img").addClass("animation-none-for-paper");
    $(".header-img-value").addClass("animation-none");
  }, 1800);
  setTimeout(function () {
    $(".orange-background-image").addClass("animation-none");
  }, 2000);
  setTimeout(function () {
    $(".header-buttonr").addClass("animation-none");
  }, 2100);
});

/* LDFJDSŞKGSDFFFFFJGGJJJJJJJJJJJJJJJJJ */

const divs = document.querySelectorAll(".company-slides");
const companyLogos = document.querySelectorAll(".company-logo-wrapper");
const scrollForSwiper = document.querySelector(".scroll-for-swiper");
let elements = 0;

function toggleActive(clickedIndex) {
  elements = 0;
  const realClickedIndex = clickedIndex - 1;
  // Tüm divlerden "active" sınıfını kaldır
  divs.forEach((div, index) => {
    if (index === realClickedIndex) {
      // Tıklanan div için "active" sınıfını ekle
      div.classList.add("active");
    } else {
      // Diğer divlerden "active" sınıfını kaldır
      div.classList.remove("active");
    }

    if (realClickedIndex > index) {
      div.classList.add("done");
    } else {
      div.classList.remove("done");
    }
  });

  companyLogos.forEach((div, index) => {
    if (index === realClickedIndex) {
      div.classList.add("active-blur");
    } else {
      div.classList.remove("active-blur");
    }
  });

  companyLogos.forEach((logo) => {
    elements += 1;
  });

  let leftValue = 100 / elements;

  if(window.innerWidth < 992) {
    switch (clickedIndex) {
      case 1:
        scrollForSwiper.style.top = `${leftValue * 0}%`;
        break;
      case 2:
        scrollForSwiper.style.top = `${leftValue * 1}%`;
        break;
      case 3:
        scrollForSwiper.style.top = `${leftValue * 2}%`;
        break;
      case 4:
        scrollForSwiper.style.top = `${leftValue * 3}%`;
        break;
      case 5:
        scrollForSwiper.style.top = `${leftValue * 4}%`;
        break;
  
      default:
        break;
    }
  } else {
    switch (clickedIndex) {
      case 1:
        scrollForSwiper.style.left = `${leftValue * 0}%`;
        break;
      case 2:
        scrollForSwiper.style.left = `${leftValue * 1}%`;
        break;
      case 3:
        scrollForSwiper.style.left = `${leftValue * 2}%`;
        break;
      case 4:
        scrollForSwiper.style.left = `${leftValue * 3}%`;
        break;
      case 5:
        scrollForSwiper.style.left = `${leftValue * 4}%`;
        break;
  
      default:
        break;
    }
  }

  
}

window.onload = () => {
  divs[0].classList.add("active");
  companyLogos[0].classList.add("active-blur");
};

const hamMenuBtn = document.querySelector(".ham-menu-button");
const hamMenu = document.querySelector(".ham-menu");
const hamMenuBtnIcon = document.getElementsByClassName("ham-menu-button-icon");
const line = document.getElementsByClassName("line");

hamMenuBtn.addEventListener("click", () => {
  hamMenu.classList.toggle("ham-menu-visibilty");
  document.body.classList.toggle("overflow-h");
  line[0].classList.toggle("line-1")
  line[1].classList.toggle("line-2")
  line[2].classList.toggle("line-3")

});

hamMenuClosesBtn.addEventListener("click", () => {
  document.body.classList.remove("overflow-h");
  hamMenu.classList.remove("ham-menu-visibilty");
})
