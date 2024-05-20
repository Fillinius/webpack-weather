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
  li.setAttribute('onclick', 'return render(event)')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zZjgwMDVlMTVkNTI4YWE4YzRhOS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7OztVQzFCbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOeUI7QUFDTDtBQUNwQjtBQUNBO0FBQ0E7QUFDQSw2Q0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsVUFBVTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsV0FBVztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw2Q0FBSTtBQUNOLDZDQUE2QyxRQUFRO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFFBQVE7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3R5bGUuY3NzP2IyNTkiLCJ3ZWJwYWNrOi8vLy4vZGF0YS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAnMScsXHJcbiAgICB0aXRsZTogJ3N1bicsXHJcbiAgICBpbWFnZTogJ3B1YmxpYy9hc3NldHMvc3VtbWVyLWJnLmpwZycsXHJcbiAgICBzb3VuZDogJ3B1YmxpYy9hc3NldHMvc291bmRzL3N1bW1lci5tcDMnLFxyXG4gICAgaWNvbjogJ3B1YmxpYy9hc3NldHMvaWNvbnMvc3VuLnN2ZycsXHJcbiAgICBhY3RpdmU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICcyJyxcclxuICAgIHRpdGxlOiAncmFpbmluZycsXHJcbiAgICBpbWFnZTogJ3B1YmxpYy9hc3NldHMvcmFpbnktYmcuanBnJyxcclxuICAgIHNvdW5kOiAncHVibGljL2Fzc2V0cy9zb3VuZHMvcmFpbi5tcDMnLFxyXG4gICAgaWNvbjogJ3B1YmxpYy9hc3NldHMvaWNvbnMvY2xvdWQtcmFpbi5zdmcnLFxyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnMycsXHJcbiAgICB0aXRsZTogJ3Nub3dpbmcnLFxyXG4gICAgaW1hZ2U6ICdwdWJsaWMvYXNzZXRzL3dpbnRlci1iZy5qcGcnLFxyXG4gICAgc291bmQ6ICdwdWJsaWMvYXNzZXRzL3NvdW5kcy93aW50ZXIubXAzJyxcclxuICAgIGljb246ICdwdWJsaWMvYXNzZXRzL2ljb25zL2Nsb3VkLXNub3cuc3ZnJyxcclxuICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgfSxcclxuXVxyXG5leHBvcnQgZGVmYXVsdCBkYXRhXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGRhdGEgZnJvbSAnLi9kYXRhJ1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG5cclxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKVxyXG5cclxuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXHJcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJylcclxuICBjb25zdCBkaXZTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIGNvbnN0IGRpdlBhdXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBkaXZTdmcuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtpdGVtLmljb259KTAgMCAvIGNvdmVyIG5vLXJlcGVhdGBcclxuICBkaXZTdmcuY2xhc3NOYW1lID0gJ2NvbnRlbnRfX2JveEJ0bi1zdmcnXHJcbiAgZGl2UGF1c2UuY2xhc3NOYW1lID0gJ2NvbnRlbnRfX2JveEJ0bi1wYXVzZS0tc2hvdydcclxuICBsaS5jbGFzc05hbWUgPSAnY29udGVudF9fYm94QnRuLWl0ZW0nXHJcbiAgbGkuc2V0QXR0cmlidXRlKCdvbmNsaWNrJywgJ3JldHVybiByZW5kZXIoZXZlbnQpJylcclxuICBidXR0b24uY2xhc3NOYW1lID0gJ2NvbnRlbnRfX2JveEJ0bi1saW5rJ1xyXG4gIGJ1dHRvbi5pZCA9IGl0ZW0uaWRcclxuICBidXR0b24uc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtpdGVtLmltYWdlfSkwIDAgLyBjb3ZlciBuby1yZXBlYXRgXHJcbiAgYXVkaW8uc3JjID0gaXRlbS5zb3VuZFxyXG4gIGF1ZGlvLmNsYXNzTmFtZSA9IGl0ZW0udGl0bGVcclxuICBidXR0b24uYXBwZW5kKGRpdlN2ZylcclxuICBidXR0b24uYXBwZW5kKGRpdlBhdXNlKVxyXG4gIGJ1dHRvbi5hcHBlbmQoYXVkaW8pXHJcbiAgbGkuYXBwZW5kKGJ1dHRvbilcclxuICByb290LmFwcGVuZChsaSlcclxufSlcclxuXHJcbmZ1bmN0aW9uIHJlbmRlcihldmVudCkge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICBjb25zdCBpZEJ1dHRvbiA9IGV2ZW50LnRhcmdldC5pZFxyXG4gIGNvbnN0IGJnV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJylcclxuICBjb25zdCBpY29uV2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50X19ib3hCdG4tc3ZnJylcclxuICBjb25zdCBpY29uUGF1c2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjb250ZW50X19ib3hCdG4tcGF1c2UtLXNob3cnKVxyXG5cclxuICBkYXRhLmZvckVhY2goKHgpID0+IHtcclxuICAgIGNvbnN0IHNvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7eC50aXRsZX1gKVxyXG4gICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmFuZ2UnKVxyXG5cclxuICAgIGlmICh4LmlkID09PSBpZEJ1dHRvbikge1xyXG4gICAgICAvLyDQu9C+0LPQuNC60LAg0L/QtdGA0LXQutC70Y7Rh9C10L3QuNGPINC40LfQvtCx0YDQsNC20LXQvdC40Y9cclxuICAgICAgYmdXcmFwLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7eC5pbWFnZX0pMCAwIC8gY292ZXIgbm8tcmVwZWF0YFxyXG5cclxuICAgICAgLy8g0LvQvtCz0LjQutCwINCy0LrQu9GO0YfQtdC90LjRjyDQt9Cy0YPQutCwXHJcbiAgICAgIHNvdW5kLnBsYXkoKVxyXG5cclxuICAgICAgLy8g0LvQvtCz0LjQutCwINC40LfQvNC10L3QtdC90LjRjyDQs9GA0L7QvNC60L7RgdGC0LhcclxuXHJcbiAgICAgIHJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzb3VuZC52b2x1bWUgPSB0aGlzLnZhbHVlXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAvLyDQu9C+0LPQuNC60LAg0L/QtdGA0LXQutC70Y7Rh9C10L3QuNGPINC40LrQvtC90LrQuFxyXG4gICAgICBpY29uV2VhdGhlci5jbGFzc0xpc3QudG9nZ2xlKCdjb250ZW50X19ib3hCdG4tc3ZnLS1zaG93JylcclxuICAgICAgaWNvblBhdXNlLmNsYXNzTGlzdC50b2dnbGUoJ2NvbnRlbnRfX2JveEJ0bi1wYXVzZScpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzb3VuZC5wYXVzZSgpXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=