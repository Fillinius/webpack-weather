/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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


document.addEventListener('DOMContentLoaded', start)
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

function start() {
  render()
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41OTVlYmE1NDI5MDBlZGZhNDgzMS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7O1VDMUJuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFVBQVU7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQSxtQ0FBbUMsV0FBVztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw2Q0FBSTtBQUNOLDZDQUE2QyxRQUFRO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFFBQVE7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6ICcxJyxcclxuICAgIHRpdGxlOiAnc3VuJyxcclxuICAgIGltYWdlOiAncHVibGljL2Fzc2V0cy9zdW1tZXItYmcuanBnJyxcclxuICAgIHNvdW5kOiAncHVibGljL2Fzc2V0cy9zb3VuZHMvc3VtbWVyLm1wMycsXHJcbiAgICBpY29uOiAncHVibGljL2Fzc2V0cy9pY29ucy9zdW4uc3ZnJyxcclxuICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzInLFxyXG4gICAgdGl0bGU6ICdyYWluaW5nJyxcclxuICAgIGltYWdlOiAncHVibGljL2Fzc2V0cy9yYWlueS1iZy5qcGcnLFxyXG4gICAgc291bmQ6ICdwdWJsaWMvYXNzZXRzL3NvdW5kcy9yYWluLm1wMycsXHJcbiAgICBpY29uOiAncHVibGljL2Fzc2V0cy9pY29ucy9jbG91ZC1yYWluLnN2ZycsXHJcbiAgICBhY3RpdmU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICczJyxcclxuICAgIHRpdGxlOiAnc25vd2luZycsXHJcbiAgICBpbWFnZTogJ3B1YmxpYy9hc3NldHMvd2ludGVyLWJnLmpwZycsXHJcbiAgICBzb3VuZDogJ3B1YmxpYy9hc3NldHMvc291bmRzL3dpbnRlci5tcDMnLFxyXG4gICAgaWNvbjogJ3B1YmxpYy9hc3NldHMvaWNvbnMvY2xvdWQtc25vdy5zdmcnLFxyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICB9LFxyXG5dXHJcbmV4cG9ydCBkZWZhdWx0IGRhdGFcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZGF0YSBmcm9tICcuL2RhdGEnXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgc3RhcnQpXHJcbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJylcclxuXHJcbmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpXHJcbiAgY29uc3QgZGl2U3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBjb25zdCBkaXZQYXVzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgZGl2U3ZnLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7aXRlbS5pY29ufSkwIDAgLyBjb3ZlciBuby1yZXBlYXRgXHJcbiAgZGl2U3ZnLmNsYXNzTmFtZSA9ICdjb250ZW50X19ib3hCdG4tc3ZnJ1xyXG4gIGRpdlBhdXNlLmNsYXNzTmFtZSA9ICdjb250ZW50X19ib3hCdG4tcGF1c2UtLXNob3cnXHJcbiAgbGkuY2xhc3NOYW1lID0gJ2NvbnRlbnRfX2JveEJ0bi1pdGVtJ1xyXG4gIGxpLnNldEF0dHJpYnV0ZSgnb25jbGljaycsICdyZW5kZXIoZXZlbnQpOycpXHJcbiAgYnV0dG9uLmNsYXNzTmFtZSA9ICdjb250ZW50X19ib3hCdG4tbGluaydcclxuICBidXR0b24uaWQgPSBpdGVtLmlkXHJcbiAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7aXRlbS5pbWFnZX0pMCAwIC8gY292ZXIgbm8tcmVwZWF0YFxyXG4gIGF1ZGlvLnNyYyA9IGl0ZW0uc291bmRcclxuICBhdWRpby5jbGFzc05hbWUgPSBpdGVtLnRpdGxlXHJcbiAgYnV0dG9uLmFwcGVuZChkaXZTdmcpXHJcbiAgYnV0dG9uLmFwcGVuZChkaXZQYXVzZSlcclxuICBidXR0b24uYXBwZW5kKGF1ZGlvKVxyXG4gIGxpLmFwcGVuZChidXR0b24pXHJcbiAgcm9vdC5hcHBlbmQobGkpXHJcbn0pXHJcblxyXG5mdW5jdGlvbiByZW5kZXIoZXZlbnQpIHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgY29uc3QgaWRCdXR0b24gPSBldmVudC50YXJnZXQuaWRcclxuICBjb25zdCBiZ1dyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpXHJcbiAgY29uc3QgaWNvbldlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudF9fYm94QnRuLXN2ZycpXHJcbiAgY29uc3QgaWNvblBhdXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY29udGVudF9fYm94QnRuLXBhdXNlLS1zaG93JylcclxuXHJcbiAgZGF0YS5mb3JFYWNoKCh4KSA9PiB7XHJcbiAgICBjb25zdCBzb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3gudGl0bGV9YClcclxuICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JhbmdlJylcclxuXHJcbiAgICBpZiAoeC5pZCA9PT0gaWRCdXR0b24pIHtcclxuICAgICAgLy8g0LvQvtCz0LjQutCwINC/0LXRgNC10LrQu9GO0YfQtdC90LjRjyDQuNC30L7QsdGA0LDQttC10L3QuNGPXHJcbiAgICAgIGJnV3JhcC5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke3guaW1hZ2V9KTAgMCAvIGNvdmVyIG5vLXJlcGVhdGBcclxuXHJcbiAgICAgIC8vINC70L7Qs9C40LrQsCDQstC60LvRjtGH0LXQvdC40Y8g0LfQstGD0LrQsFxyXG4gICAgICBzb3VuZC5wbGF5KClcclxuXHJcbiAgICAgIC8vINC70L7Qs9C40LrQsCDQuNC30LzQtdC90LXQvdC40Y8g0LPRgNC+0LzQutC+0YHRgtC4XHJcblxyXG4gICAgICByYW5nZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc291bmQudm9sdW1lID0gdGhpcy52YWx1ZVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgLy8g0LvQvtCz0LjQutCwINC/0LXRgNC10LrQu9GO0YfQtdC90LjRjyDQuNC60L7QvdC60LhcclxuICAgICAgaWNvbldlYXRoZXIuY2xhc3NMaXN0LnRvZ2dsZSgnY29udGVudF9fYm94QnRuLXN2Zy0tc2hvdycpXHJcbiAgICAgIGljb25QYXVzZS5jbGFzc0xpc3QudG9nZ2xlKCdjb250ZW50X19ib3hCdG4tcGF1c2UnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc291bmQucGF1c2UoKVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0KCkge1xyXG4gIHJlbmRlcigpXHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9