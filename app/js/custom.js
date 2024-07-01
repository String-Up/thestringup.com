/**
 * Fuzio || Sports Club  HTML Template
 *
 * @author themeVillage (https://www.theme-village.com/)
 * @version 1.0.0
 **/

'use strict';

/**
 *  Sticky Menu
 */
let header = document.querySelector('header.header .navbar');
let win = window;

win.addEventListener('scroll', function () {
  let scroll = win.scrollY || win.pageYOffset;
  if (scroll < 1) {
    header.classList.remove('scroll-on');
  } else {
    header.classList.add('scroll-on');
  }
});
/**
 * Preloader
 */

document.body.onload = function () {
  setTimeout(function () {
    const preloader = document.getElementById('preloader');
    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done');
    }
  }, 1000);
};

/**
 * Scroll to Top
 */
const backTotop = (function () {
  let scrollpos = window.scrollY;
  let backBtn = document.querySelector('.back-top');
  if (backBtn) {
    let add_class_on_scroll = () => backBtn.classList.add('back-top-show');
    let remove_class_on_scroll = () =>
      backBtn.classList.remove('back-top-show');

    window.addEventListener('scroll', function () {
      scrollpos = window.scrollY;
      if (scrollpos >= 800) {
        add_class_on_scroll();
      } else {
        remove_class_on_scroll();
      }
    });

    backBtn.addEventListener('click', () =>
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    );
  }
})();
/**
 * Counter Up
 */
new PureCounter({
  selector: '.purecounter',
  delay: 200,
});
/**
 * Jarallax Parallax
 */
jarallax(document.querySelectorAll('.jarallax'), {
  speed: 0.2,
  imgPosition: '50% -30%',
  imgSize: 'cover',
});
/**
 * Tooltip
 */
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
/**
 * Testimonial Slider
 */

const testimonial = new Swiper('.testimonial-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
/**
 * Brand Slider Home (Cricket)
 */
const brand = new Swiper('.brand-slider', {
  spaceBetween: 20,
  autoplay: {
    delay: 1500,
  },
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 5,
    },
  },
});
/**
 * Match Schdule Carousel (Cricket)
 */
const matchCarousel = new Swiper('.match-carousel', {
  spaceBetween: 30,
  autoplay: {
    delay: 1500,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 3,
    },
  },
});

/**
 * Gallery Image Change
 */

document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.item');
  const dataPanel = document.getElementById('dataPanel');

  items.forEach((item) => {
    item.addEventListener('mouseover', function () {
      // Add a class to trigger the transition
      dataPanel.classList.add('fadeOut');

      // Wait for the transition to complete
      setTimeout(() => {
        // Change the background image path for each item
        dataPanel.style.backgroundImage = `url('images/${item.id}.jpg')`;

        // Remove the 'fadeOut' class and trigger the fadeIn transition
        dataPanel.classList.remove('fadeOut');
        dataPanel.classList.add('fadeIn');
      }, 500); // Adjust the timeout value to match the transition duration

      dataPanel.style.display = 'block';
      item.classList.add('active');
    });

    item.addEventListener('mouseout', function () {
      item.classList.remove('active');
    });
  });
});

/**
 * VenoBox Init
 */

let cricketBG = new VenoBox({
  selector: '.cover-video',
  autoplay: true,
  maxWidth: '1000px',
});
let cricketGallery = new VenoBox({
  selector: '.my-image-links',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'rotating-plane',
});

/**
 * Nice Select 2
 */
let niceSelector = document.getElementById('select');
if (niceSelector) {
  NiceSelect.bind(niceSelector, {
    placeholder: 'Language',
  });
}

let formSelect = document.getElementById('select-options');
if (formSelect) {
  NiceSelect.bind(formSelect);
}

// Result Select (Shop)
let resultSelect = document.getElementById('result-select');
if (resultSelect) {
  NiceSelect.bind(resultSelect, {
    placeholder: '1',
  });
}
// Result Select (Shop)
let resultSort = document.getElementById('result-sort');
if (resultSort) {
  NiceSelect.bind(resultSort, {
    placeholder: 'Sort by Latest',
  });
}

/**
 * Select Choosen Color (Product Details)
 */
const allColor = document.querySelectorAll('.color');
const selectedColorElement = document.getElementById('selectedColor');
// Add click event listener to each color element
allColor.forEach(function (element) {
  element.addEventListener('click', function () {
    toggleActive(this, 'active');
    displaySelectedColor(this.textContent);
  });
});

function toggleActive(element, className) {
  allColor.forEach(function (el) {
    el.classList.remove(className);
  });
  element.classList.add(className);
}

function displaySelectedColor(colorName) {
  selectedColorElement.textContent = 'Color: ' + colorName;
}

/*====================================
    Product Quantity (cart)
======================================*/

const productQuantity = (selector) => {
  const quantity = document.querySelectorAll(selector);

  quantity.forEach((element) => {
    const quantityIncrease = element.querySelector('.qty-plus');
    const quantityDecrease = element.querySelector('.qty-minus');
    const quantityInput = element.querySelector('.qty-count');

    let count = 1;

    quantityIncrease.addEventListener('click', () => {
      count++;
      count = count < 10 ? '0' + count : count;
      quantityInput.value = count;
    });
    quantityDecrease.addEventListener('click', () => {
      if (count > 1) {
        count--;
        count = count < 10 ? '0' + count : count;
        quantityInput.value = count;
      }
    });
  });
};

productQuantity('.cart-number, .cart-quanty');
/* =================================  
Remove Cart Item
==================================== */

let removeBtns = document.querySelectorAll('.remove');
removeBtns.forEach(function (removeBtn) {
  removeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    this.closest('.cart_item').remove();
  });
});

const checkoutShipping = (selector) => {
  const checkoutVisible = document.querySelector(selector);
  const shipping = document.querySelectorAll('#billform-dirrentswitch');

  if (checkoutVisible) {
    shipping.forEach((element) => {
      element.addEventListener('click', (e) => {
        toggleSlide(checkoutVisible);
      });
    });
  }
};

checkoutShipping('#checkoutCouponform1');

/**===================================
 *  Venobox Lightbox
 */
let imagePopup = new VenoBox({
  selector: '.venobox',
  autoplay: true,
  maxWidth: '1000px',
});

/* ====================================
 Venobox Popup
*/
let videoPoup = new VenoBox({
  selector: '.my-video-links,.video-popup',
  autoplay: true,
  maxWidth: '1000px',
});

/**
 * Nav Toggler Mobile
 */
const toggleNav = document.querySelector('.toggle-wrap');
toggleNav.addEventListener('click', function () {
  this.classList.toggle('active');
});

/**
 * Review Slider
 */

let reviewSlider = new Swiper('.review-slider', {
  direction: 'vertical',
  freeMode: true,
  loop: true,
  spaceBetween: 240,
  slidesPerView: 2,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
/**
 * Services Slider
 */
const serviceSlider = new Swiper('.services-slide', {
  spaceBetween: 30,
  loop: false,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

/**
 * Price Filter
 */
var slider = document.getElementById('priceRange');
if (slider) {
  const priceRange = noUiSlider.create(slider, {
    connect: true,
    start: [10, 150],
    range: {
      min: 10,
      max: 250,
    },
  });

  var priceValue = document.getElementById('priceRange-value');
  slider.noUiSlider.on('update', function (e) {
    priceValue.innerHTML = e.join(' - ');
  });
}
/**
 * Product Thumb Gallery
 */
var productThumb = new Swiper('.product-thumb', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 640px
    320: {
      direction: 'horizontal',
      slidesPerView: 3,
    },
    576: {
      direction: 'vertical',
      slidesPerView: 4,
    },
  },
});
/**
 * Product Cover Gallery
 */
var swiper2 = new Swiper('.coverItem', {
  spaceBetween: 10,
  thumbs: {
    swiper: productThumb,
  },
});

/**
 * Portfolio Isotope
 */
var portfolio = document.querySelector('.gallery-masionary');
if (portfolio) {
  var iso = new Isotope('.grid', {
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: '.grid-sizer',
    },
  });
}

