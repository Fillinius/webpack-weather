import data from './data'
import './style.css'

const root = document.querySelector('#app') as HTMLElement
interface Item {
  id: string
  title: string
  image: string
  sound: string
  icon: string
  active: boolean
}

data.forEach((item: Item) => {
  const li = document.createElement('li')
  const button = document.createElement('button')
  const audio = document.createElement('audio')
  const divSvg = document.createElement('div')
  divSvg.style.background = `url(${item.icon})0 0 / cover no-repeat`
  divSvg.className = `content__boxBtn-svg svg-${item.title}`
  li.className = 'content__boxBtn-item'
  button.className = 'content__boxBtn-link'
  button.id = item.id
  button.style.background = `url(${item.image})0 0 / cover no-repeat`
  audio.src = item.sound
  audio.className = item.title
  button.append(divSvg)
  button.append(audio)
  li.append(button)
  root.append(li)
})

data.forEach((x: Item) => {
  const liEl = document.querySelectorAll('.content__boxBtn-item')
  liEl.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault()
      const idButton = (event.target as HTMLInputElement).id
      const bgWrap = document.querySelector('.wrapper') as HTMLDivElement
      const sound = document.querySelector(`.${x.title}`) as HTMLAudioElement
      const range = document.querySelector('#range') as HTMLInputElement
      const iconWeather = document.querySelector(
        `.svg-${x.title}`
      ) as HTMLDivElement
      if (x.id === idButton) {
        // логика переключения изображения
        bgWrap.style.background = `url(${x.image})0 0 / cover no-repeat`

        // логика включения звука
        sound.play()

        // логика изменения громкости
        range.addEventListener('change', function () {
          sound.volume = parseFloat(this.value)
        })

        // логика переключения иконки
        iconWeather.style.background = `url('public/assets/icons/pause.svg')0 0 / cover no-repeat`
      } else {
        sound.pause()
        iconWeather.style.background = `url(${x.icon})0 0 / cover no-repeat`
      }
    })
  })
})
