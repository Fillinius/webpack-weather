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

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst data = [\r\n  {\r\n    id: '1',\r\n    title: 'sun',\r\n    image: 'public/assets/summer-bg.jpg',\r\n    sound: 'public/assets/sounds/summer.mp3',\r\n    icon: 'public/assets/icons/sun.svg',\r\n    active: false,\r\n  },\r\n  {\r\n    id: '2',\r\n    title: 'raining',\r\n    image: 'public/assets/rainy-bg.jpg',\r\n    sound: 'public/assets/sounds/rain.mp3',\r\n    icon: 'public/assets/icons/cloud-rain.svg',\r\n    active: false,\r\n  },\r\n  {\r\n    id: '3',\r\n    title: 'snowing',\r\n    image: 'public/assets/winter-bg.jpg',\r\n    sound: 'public/assets/sounds/winter.mp3',\r\n    icon: 'public/assets/icons/cloud-snow.svg',\r\n    active: false,\r\n  },\r\n]\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);\r\n\n\n//# sourceURL=webpack:///./data.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./data.js\");\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', start)\r\nconst root = document.querySelector('#app')\r\n\r\n_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((item) => {\r\n  const li = document.createElement('li')\r\n  const button = document.createElement('button')\r\n  const audio = document.createElement('audio')\r\n  const divSvg = document.createElement('div')\r\n  const divPause = document.createElement('div')\r\n  divSvg.style.background = `url(${item.icon})0 0 / cover no-repeat`\r\n  divSvg.className = 'content__boxBtn-svg'\r\n  divPause.className = 'content__boxBtn-pause--show'\r\n  li.className = 'content__boxBtn-item'\r\n  li.setAttribute('onclick', 'render(event);')\r\n  button.className = 'content__boxBtn-link'\r\n  button.id = item.id\r\n  button.style.background = `url(${item.image})0 0 / cover no-repeat`\r\n  audio.src = item.sound\r\n  audio.className = item.title\r\n  button.append(divSvg)\r\n  button.append(divPause)\r\n  button.append(audio)\r\n  li.append(button)\r\n  root.append(li)\r\n})\r\n\r\nfunction render(event) {\r\n  event.preventDefault()\r\n  const idButton = event.target.id\r\n  const bgWrap = document.querySelector('.wrapper')\r\n  const iconWeather = document.querySelector('.content__boxBtn-svg')\r\n  const iconPause = document.querySelector('content__boxBtn-pause--show')\r\n\r\n  _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((x) => {\r\n    const sound = document.querySelector(`.${x.title}`)\r\n    const range = document.querySelector('#range')\r\n\r\n    if (x.id === idButton) {\r\n      // логика переключения изображения\r\n      bgWrap.style.background = `url(${x.image})0 0 / cover no-repeat`\r\n\r\n      // логика включения звука\r\n      sound.play()\r\n\r\n      // логика изменения громкости\r\n\r\n      range.addEventListener('change', function () {\r\n        sound.volume = this.value\r\n      })\r\n\r\n      // логика переключения иконки\r\n      iconWeather.classList.toggle('content__boxBtn-svg--show')\r\n      iconPause.classList.toggle('content__boxBtn-pause')\r\n    } else {\r\n      sound.pause()\r\n    }\r\n  })\r\n}\r\n\r\nfunction start() {\r\n  render()\r\n}\r\n\n\n//# sourceURL=webpack:///./index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;