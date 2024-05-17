const root = document.querySelector('#app')

data.forEach((item) => {
  const li = document.createElement('li')
  const button = document.createElement('button')
  const audio = document.createElement('audio')
  const divSvg = document.createElement('div')
  divSvg.style.background = `url(${item.icon})0 0 / cover no-repeat`
  divSvg.className = 'content__boxBtn-svg'
  li.className = 'content__boxBtn-item'
  li.setAttribute('onclick', 'render(event);')
  button.className = 'content__boxBtn-link'
  button.id = item.id
  button.style.background = `url(${item.image})0 0 / cover no-repeat`
  audio.src = item.sound
  audio.className = item.title
  button.append(divSvg)
  button.append(audio)
  li.append(button)
  document.querySelector('#app').append(li)
})

function render(event) {
  event.preventDefault()
  const idButton = event.target.id
  const bgWrap = document.querySelector('.wrapper')
  // const liActive = document.querySelector('.content__boxBtn-item')
  const svgPause = document.querySelector('.content__boxBtn-svg')

  data.forEach((x) => {
    const sound = document.querySelector(`.${x.title}`)

    // логика переключения изображения
    if (x.id === idButton) {
      bgWrap.style.background = `url(${x.image})0 0 / cover no-repeat`

      // логика включения звука
      sound.play()

      // логика изменения громкости
      const range = document.querySelector('#range')
      range.addEventListener('change', function () {
        sound.volume = this.value
      })
    } else {
      sound.pause()
    }
  })
}
