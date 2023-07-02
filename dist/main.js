/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _popUpClose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popUpClose */ \"./src/popUpClose.js\");\n/* harmony import */ var _popUpOpen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popUpOpen */ \"./src/popUpOpen.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider */ \"./src/slider.js\");\n\n\n\n\n(0,_slider__WEBPACK_IMPORTED_MODULE_2__.mySlider)()\n;(0,_popUpOpen__WEBPACK_IMPORTED_MODULE_1__.popUpOpen)()\n;(0,_popUpClose__WEBPACK_IMPORTED_MODULE_0__.popUpClose)()\n\n//# sourceURL=webpack://purejs/./src/index.js?");

/***/ }),

/***/ "./src/popUpClose.js":
/*!***************************!*\
  !*** ./src/popUpClose.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"popUpClose\": () => (/* binding */ popUpClose)\n/* harmony export */ });\nconst popUpClose = () => {\n    const popUpClose = document.querySelector('.main__info__pop-up__close');\n    const popUpBackground = document.querySelector('.main__info__pop-up-background');\n    \n    popUpClose.addEventListener('click', () => {\n        popUpBackground.classList.remove('main__info__pop-up-background-active')\n    })\n}\n\n\n//# sourceURL=webpack://purejs/./src/popUpClose.js?");

/***/ }),

/***/ "./src/popUpOpen.js":
/*!**************************!*\
  !*** ./src/popUpOpen.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"popUpOpen\": () => (/* binding */ popUpOpen)\n/* harmony export */ });\nconst popUpOpen = () => {\n    const popUpBtn = document.querySelector('.main__info__pop-up-button');\n    const popUpBackground = document.querySelector('.main__info__pop-up-background');\n    \n    popUpBtn.addEventListener('click', () => {\n        popUpBackground.classList.add('main__info__pop-up-background-active')\n    })\n}\n\n\n\n//# sourceURL=webpack://purejs/./src/popUpOpen.js?");

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mySlider\": () => (/* binding */ mySlider)\n/* harmony export */ });\nfunction mySlider(){\n\n    const sliderImages = document.querySelectorAll('.main__slider__image');\n    const sliderDots = document.querySelectorAll('.main__slider__dot');\n    \n    let currentSlide = 0;\n    let currentDot = 0;\n    \n    \n    function automaticSlider(){\n      sliderImages[currentSlide].classList.remove('main__slider__image--active');\n      currentSlide = (currentSlide + 1) % sliderImages.length;\n      sliderImages[currentSlide].classList.add('main__slider__image--active');\n      \n      sliderDots[currentDot].classList.remove('main__slider__dot--active');\n      currentDot = (currentDot + 1) % sliderDots.length;\n      sliderDots[currentDot].classList.add('main__slider__dot--active');\n    }\n    \n    \n    sliderDots.forEach((dot, index) => {\n      dot.style.cursor = \"pointer\";\n      dot.addEventListener('click', () => {\n        \n        sliderImages.forEach((slide) => {\n          slide.classList.remove('main__slider__image--active');\n          \n        })\n        sliderDots.forEach((dot) => {\n          dot.classList.remove('main__slider__dot--active');\n          \n        })\n    \n        sliderImages[index].classList.add('main__slider__image--active');\n        sliderDots[index].classList.add('main__slider__dot--active');\n    \n        currentSlide = index;\n        currentDot = index;\n    \n      })\n    })\n    }\n    \n    \n\n//# sourceURL=webpack://purejs/./src/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;