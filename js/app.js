(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _burgerMenu = _interopRequireDefault(require("./components/burger-menu"));

var _swiperMain = _interopRequireDefault(require("./components/sliders/swiperMain"));

var _swiperCase = _interopRequireDefault(require("./components/sliders/swiperCase"));

var _swiperOffer = _interopRequireDefault(require("./components/sliders/swiperOffer"));

var _swiperFeedBack = _interopRequireDefault(require("./components/sliders/swiperFeedBack"));

var _tabs = _interopRequireDefault(require("./components/tabs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.
//import Accordion from './components/accordion';
// import bntOFFER from './components/btnOffer';
(function ($) {
  // When DOM is ready
  $(function () {
    //const accordions = new Accordion();
    _burgerMenu["default"].init();

    _swiperMain["default"].init();

    _swiperOffer["default"].init();

    _swiperCase["default"].init();

    _swiperFeedBack["default"].init();

    _tabs["default"].init();
  });
})(jQuery);

},{"./components/burger-menu":2,"./components/sliders/swiperCase":3,"./components/sliders/swiperFeedBack":4,"./components/sliders/swiperMain":5,"./components/sliders/swiperOffer":6,"./components/tabs":7}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var BURGEROPEN = document.querySelector('.js-burger-open');
var BURGER = document.querySelector('.burger');
var NAV = document.querySelector('.js-burger');
var NAVWRAPPER = document.querySelector('.header__wrapper');
var BODY = document.querySelector('body');
var CLASS_OVERFLOW = 'overflow';
var CLASS_ACTIVE = 'active';

var menuBurger = function () {
  var menuBurgers = function menuBurger() {
    BURGER.addEventListener('click', function (e) {
      e.preventDefault();
      NAV.classList.toggle(CLASS_ACTIVE);
      BODY.classList.toggle(CLASS_OVERFLOW);
      BURGER.classList.toggle(CLASS_ACTIVE);
    });
  };

  var init = function init() {
    menuBurgers();
  };

  return {
    init: init
  };
}();

var _default = menuBurger;
exports["default"] = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var swiperCase = function () {
  var accountantInit = new Swiper('.swiper-case', {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 800,
    autoplay: {
      delay: 1000500,
      disableOnInteraction: false
    },
    centerInsufficientSlides: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    },
    breakpoints: {
      768: {
        spaceBetween: 40,
        slidesPerView: 1
      }
    }
  });

  var init = function init() {};

  return {
    init: init
  };
}();

var _default = swiperCase;
exports["default"] = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var swiperFeedBack = function () {
  var accountantInit = new Swiper('.swiper-feedBack', {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 800,
    autoplay: {
      delay: 1000500,
      disableOnInteraction: false
    },
    centerInsufficientSlides: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    },
    breakpoints: {
      768: {
        spaceBetween: 40,
        slidesPerView: 1
      }
    }
  });

  var init = function init() {};

  return {
    init: init
  };
}();

var _default = swiperFeedBack;
exports["default"] = _default;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var swiperMain = function () {
  var accountantInit = new Swiper('.swiper-main', {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 800,
    autoplay: {
      delay: 1000500,
      disableOnInteraction: false
    },
    centerInsufficientSlides: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    },
    breakpoints: {
      768: {
        spaceBetween: 40,
        slidesPerView: 1
      }
    }
  });

  var init = function init() {};

  return {
    init: init
  };
}();

var _default = swiperMain;
exports["default"] = _default;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var swiperOffer = function () {
  var accountantInit = new Swiper('.swiper-offer', {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 800,
    loop: true,
    preloadImages: false,
    lazy: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false
    },
    centerInsufficientSlides: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    },
    breakpoints: {
      768: {
        spaceBetween: 40,
        slidesPerView: 1
      }
    }
  });

  var init = function init() {};

  return {
    init: init
  };
}();

var _default = swiperOffer;
exports["default"] = _default;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var CLASS_ACTIVE = 'active';
var wrapList = document.querySelectorAll('.js-tabs');

var tabs = function () {
  var tabsInit = function tabsInit() {
    if (!wrapList.length) return;
    wrapList.forEach(function (wrap) {
      return attachEvents(wrap);
    });

    function attachEvents(parent) {
      var tabList = parent.querySelectorAll('[data-tab]'),
          contentList = parent.querySelectorAll('[data-content]');
      if (!tabList.length) return;
      tabList.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          tabList.forEach(function (btn) {
            return btn.classList.remove(CLASS_ACTIVE);
          });
          e.currentTarget.classList.add(CLASS_ACTIVE);
          var idContent = e.currentTarget.dataset.tab;

          if (idContent === 'all') {
            contentList.forEach(function (content) {
              return content.classList.add(CLASS_ACTIVE);
            });
          } else {
            var currentContentList = document.querySelectorAll("[data-content=\"".concat(idContent, "\"]"));
            contentList.forEach(function (content) {
              return content.classList.remove(CLASS_ACTIVE);
            });
            currentContentList.forEach(function (content) {
              return content.classList.add(CLASS_ACTIVE);
            });
          }
        });
      });
    }
  };

  var init = function init() {
    tabsInit();
  };

  return {
    init: init
  };
}();

var _default = tabs;
exports["default"] = _default;

},{}]},{},[1]);
