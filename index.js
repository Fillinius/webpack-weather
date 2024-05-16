const root = document.querySelector('#app')

root.innerHTML = data.map((item) => {
  return `
   <li class="content__boxBtn-item">
<a class="content__boxBtn-link " href="#">
 <audio src=${item.sound}></audio>
</a>
</li>
  `
})
