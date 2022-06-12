/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

eval("(function () {\n  var _this = this;\n\n  var backToTopButton = document.getElementById('backToTop-js');\n\n  var throttleFunction = function throttleFunction(func, delay) {\n    var prev = 0;\n    return function () {\n      var now = new Date().getTime();\n\n      if (now - prev > delay) {\n        prev = now;\n        return func.apply(void 0, arguments);\n      }\n    };\n  };\n\n  var showScrollButton = function showScrollButton() {\n    if (_this.pageYOffset >= 200 && !backToTopButton.classList.contains('is-visible')) {\n      backToTopButton.classList.add('is-visible');\n    } else if (_this.pageYOffset < 200 && backToTopButton.classList.contains('is-visible')) {\n      backToTopButton.classList.remove('is-visible');\n    }\n  };\n\n  var throttledScroll = throttleFunction(showScrollButton, 50);\n  window.addEventListener('scroll', throttledScroll);\n  backToTopButton.addEventListener('click', function (e) {\n    e.preventDefault();\n    window.scrollTo(0, 0);\n  });\n})();\n\n(function () {\n  var navList = document.querySelectorAll('.scroll-link');\n  navList.forEach(function (element) {\n    var targetId = element.getAttribute('href').replace('#', '');\n    var target = document.getElementById(targetId);\n    var offset = 80;\n    element.addEventListener('click', function (e) {\n      e.preventDefault();\n      var targetDistance = target.offsetTop;\n      window.scrollTo(0, targetDistance - offset);\n    });\n  });\n})();\n\n//# sourceURL=webpack://logans_project/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;