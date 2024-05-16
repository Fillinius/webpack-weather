const { root } = require('.')

root.innerHTML = ` <div class="wrapper">
<div class="weather"></div>
<div class="content">
  <div>
  <h1 class="content-title">Weather sounds</h1>
  </div>
  <div class="content__boxBtn">
    <ul class="content__boxBtn-list">
      <li class="content__boxBtn-item">
        <a class="content__boxBtn-link " href="#">
         <audio src="./assets/sounds/summer.mp3" controls></audio>
        </a>
      </li>
      <li class="content__boxBtn-item">
        <a class="content__boxBtn-link " href="#">
         <audio src="./assets/sounds/summer.mp3" controls></audio>
        </a>
      </li>
      <li class="content__boxBtn-item">
        <a class="content__boxBtn-link " href="#">
         <audio src="./assets/sounds/summer.mp3" controls></audio>
        </a>
      </li>
    </ul>
  </div>
  <div class="range">
  <form>
  <input type="range">
  </form>
  </div>
</div>
</div>`
