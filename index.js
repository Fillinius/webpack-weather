const root = document.querySelector('#app')

data.forEach((item) => {
  console.log(item)
  const li = document.createElement('li')
  const button = document.createElement('button')
  const audio = document.createElement('audio')
  const divSvg = document.createElement('div')
  divSvg.style.background = `url(${item.icon})0 0 / cover no-repeat`
  divSvg.className = 'content__boxBtn-svg'
  li.className = 'content__boxBtn-item'
  button.className = 'content__boxBtn-link'
  button.style.background = `url(${item.image})0 0 / cover no-repeat`
  audio.src = item.sound
  button.append(divSvg)
  button.append(audio)
  li.append(button)

  document.querySelector('#app').append(li)
})
