/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const data = [
  {
    id: '1',
    title: 'sun',
    image: 'public/assets/summer-bg.jpg',
    sound: 'public/assets/sounds/summer.mp3',
    icon: 'public/assets/icons/sun.svg',
    active: false,
  },
  {
    id: '2',
    title: 'raining',
    image: 'public/assets/rainy-bg.jpg',
    sound: 'public/assets/sounds/rain.mp3',
    icon: 'public/assets/icons/cloud-rain.svg',
    active: false,
  },
  {
    id: '3',
    title: 'snowing',
    image: 'public/assets/winter-bg.jpg',
    sound: 'public/assets/sounds/winter.mp3',
    icon: 'public/assets/icons/cloud-snow.svg',
    active: false,
  },
]
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./data.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./style.css");



const root = document.querySelector('#app')

_data__WEBPACK_IMPORTED_MODULE_0__["default"].forEach((item) => {
  const li = document.createElement('li')
  const button = document.createElement('button')
  const audio = document.createElement('audio')
  const divSvg = document.createElement('div')
  const divPause = document.createElement('div')
  divSvg.style.background = `url(${item.icon})0 0 / cover no-repeat`
  divSvg.className = 'content__boxBtn-svg'
  divPause.className = 'content__boxBtn-pause--show'
  li.className = 'content__boxBtn-item'
  li.setAttribute('onclick', 'render(event);')
  button.className = 'content__boxBtn-link'
  button.id = item.id
  button.style.background = `url(${item.image})0 0 / cover no-repeat`
  audio.src = item.sound
  audio.className = item.title
  button.append(divSvg)
  button.append(divPause)
  button.append(audio)
  li.append(button)
  root.append(li)
})

function render(event) {
  event.preventDefault()
  const idButton = event.target.id
  const bgWrap = document.querySelector('.wrapper')
  const iconWeather = document.querySelector('.content__boxBtn-svg')
  const iconPause = document.querySelector('content__boxBtn-pause--show')

  _data__WEBPACK_IMPORTED_MODULE_0__["default"].forEach((x) => {
    const sound = document.querySelector(`.${x.title}`)
    const range = document.querySelector('#range')

    if (x.id === idButton) {
      // логика переключения изображения
      bgWrap.style.background = `url(${x.image})0 0 / cover no-repeat`

      // логика включения звука
      sound.play()

      // логика изменения громкости

      range.addEventListener('change', function () {
        sound.volume = this.value
      })

      // логика переключения иконки
      iconWeather.classList.toggle('content__boxBtn-svg--show')
      iconPause.classList.toggle('content__boxBtn-pause')
    } else {
      sound.pause()
    }
  })
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mY2QyZWUzY2VlNGU5ZTY5NzMyNi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7OztVQzFCbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOeUI7QUFDTDtBQUNwQjtBQUNBO0FBQ0E7QUFDQSw2Q0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsVUFBVTtBQUM3QztBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBLG1DQUFtQyxXQUFXO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDZDQUFJO0FBQ04sNkNBQTZDLFFBQVE7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsUUFBUTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZS5jc3M/YjI1OSIsIndlYnBhY2s6Ly8vLi9kYXRhLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6ICcxJyxcclxuICAgIHRpdGxlOiAnc3VuJyxcclxuICAgIGltYWdlOiAncHVibGljL2Fzc2V0cy9zdW1tZXItYmcuanBnJyxcclxuICAgIHNvdW5kOiAncHVibGljL2Fzc2V0cy9zb3VuZHMvc3VtbWVyLm1wMycsXHJcbiAgICBpY29uOiAncHVibGljL2Fzc2V0cy9pY29ucy9zdW4uc3ZnJyxcclxuICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzInLFxyXG4gICAgdGl0bGU6ICdyYWluaW5nJyxcclxuICAgIGltYWdlOiAncHVibGljL2Fzc2V0cy9yYWlueS1iZy5qcGcnLFxyXG4gICAgc291bmQ6ICdwdWJsaWMvYXNzZXRzL3NvdW5kcy9yYWluLm1wMycsXHJcbiAgICBpY29uOiAncHVibGljL2Fzc2V0cy9pY29ucy9jbG91ZC1yYWluLnN2ZycsXHJcbiAgICBhY3RpdmU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICczJyxcclxuICAgIHRpdGxlOiAnc25vd2luZycsXHJcbiAgICBpbWFnZTogJ3B1YmxpYy9hc3NldHMvd2ludGVyLWJnLmpwZycsXHJcbiAgICBzb3VuZDogJ3B1YmxpYy9hc3NldHMvc291bmRzL3dpbnRlci5tcDMnLFxyXG4gICAgaWNvbjogJ3B1YmxpYy9hc3NldHMvaWNvbnMvY2xvdWQtc25vdy5zdmcnLFxyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICB9LFxyXG5dXHJcbmV4cG9ydCBkZWZhdWx0IGRhdGFcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZGF0YSBmcm9tICcuL2RhdGEnXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnXHJcblxyXG5jb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpXHJcblxyXG5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcclxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKVxyXG4gIGNvbnN0IGRpdlN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgY29uc3QgZGl2UGF1c2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIGRpdlN2Zy5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke2l0ZW0uaWNvbn0pMCAwIC8gY292ZXIgbm8tcmVwZWF0YFxyXG4gIGRpdlN2Zy5jbGFzc05hbWUgPSAnY29udGVudF9fYm94QnRuLXN2ZydcclxuICBkaXZQYXVzZS5jbGFzc05hbWUgPSAnY29udGVudF9fYm94QnRuLXBhdXNlLS1zaG93J1xyXG4gIGxpLmNsYXNzTmFtZSA9ICdjb250ZW50X19ib3hCdG4taXRlbSdcclxuICBsaS5zZXRBdHRyaWJ1dGUoJ29uY2xpY2snLCAncmVuZGVyKGV2ZW50KTsnKVxyXG4gIGJ1dHRvbi5jbGFzc05hbWUgPSAnY29udGVudF9fYm94QnRuLWxpbmsnXHJcbiAgYnV0dG9uLmlkID0gaXRlbS5pZFxyXG4gIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke2l0ZW0uaW1hZ2V9KTAgMCAvIGNvdmVyIG5vLXJlcGVhdGBcclxuICBhdWRpby5zcmMgPSBpdGVtLnNvdW5kXHJcbiAgYXVkaW8uY2xhc3NOYW1lID0gaXRlbS50aXRsZVxyXG4gIGJ1dHRvbi5hcHBlbmQoZGl2U3ZnKVxyXG4gIGJ1dHRvbi5hcHBlbmQoZGl2UGF1c2UpXHJcbiAgYnV0dG9uLmFwcGVuZChhdWRpbylcclxuICBsaS5hcHBlbmQoYnV0dG9uKVxyXG4gIHJvb3QuYXBwZW5kKGxpKVxyXG59KVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyKGV2ZW50KSB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gIGNvbnN0IGlkQnV0dG9uID0gZXZlbnQudGFyZ2V0LmlkXHJcbiAgY29uc3QgYmdXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKVxyXG4gIGNvbnN0IGljb25XZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRfX2JveEJ0bi1zdmcnKVxyXG4gIGNvbnN0IGljb25QYXVzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NvbnRlbnRfX2JveEJ0bi1wYXVzZS0tc2hvdycpXHJcblxyXG4gIGRhdGEuZm9yRWFjaCgoeCkgPT4ge1xyXG4gICAgY29uc3Qgc291bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt4LnRpdGxlfWApXHJcbiAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyYW5nZScpXHJcblxyXG4gICAgaWYgKHguaWQgPT09IGlkQnV0dG9uKSB7XHJcbiAgICAgIC8vINC70L7Qs9C40LrQsCDQv9C10YDQtdC60LvRjtGH0LXQvdC40Y8g0LjQt9C+0LHRgNCw0LbQtdC90LjRj1xyXG4gICAgICBiZ1dyYXAuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHt4LmltYWdlfSkwIDAgLyBjb3ZlciBuby1yZXBlYXRgXHJcblxyXG4gICAgICAvLyDQu9C+0LPQuNC60LAg0LLQutC70Y7Rh9C10L3QuNGPINC30LLRg9C60LBcclxuICAgICAgc291bmQucGxheSgpXHJcblxyXG4gICAgICAvLyDQu9C+0LPQuNC60LAg0LjQt9C80LXQvdC10L3QuNGPINCz0YDQvtC80LrQvtGB0YLQuFxyXG5cclxuICAgICAgcmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNvdW5kLnZvbHVtZSA9IHRoaXMudmFsdWVcclxuICAgICAgfSlcclxuXHJcbiAgICAgIC8vINC70L7Qs9C40LrQsCDQv9C10YDQtdC60LvRjtGH0LXQvdC40Y8g0LjQutC+0L3QutC4XHJcbiAgICAgIGljb25XZWF0aGVyLmNsYXNzTGlzdC50b2dnbGUoJ2NvbnRlbnRfX2JveEJ0bi1zdmctLXNob3cnKVxyXG4gICAgICBpY29uUGF1c2UuY2xhc3NMaXN0LnRvZ2dsZSgnY29udGVudF9fYm94QnRuLXBhdXNlJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNvdW5kLnBhdXNlKClcclxuICAgIH1cclxuICB9KVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==