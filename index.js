const root = document.querySelector('#app')

root.innerHTML = data.map((item) => {
  return `
   <li class="content__boxBtn-item">
   <button class="content__boxBtn-link">
   <audio src=${item.sound}></audio>
   </button>
</li>`
})
