import data from './data'
import './style.css'

const root = document.querySelector('#app')

data.forEach((item) => {
  const li = document.createElement('li')
  const button = document.createElement('button')
  const audio = document.createElement('audio')
  const divSvg = document.createElement('div')
  const divPause = document.createElement('div')
  divSvg.style.background = `url(${item.icon})0 0 / cover no-repeat`
  divSvg.className = `content__boxBtn-svg svg-${item.title}`
  divPause.className = 'content__boxBtn-pause--show'
  li.className = 'content__boxBtn-item'
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

const liEl = document.querySelectorAll('.content__boxBtn-item')
liEl.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault()
    const idButton = event.target.id
    const bgWrap = document.querySelector('.wrapper')
    const iconWeather = document.querySelector('.content__boxBtn-svg')
    const iconPause = document.querySelector('.content__boxBtn-pause--show')

    data.forEach((x) => {
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
  })
})
