import pauseIcon from '../../public/assets/icons/pause.svg'

export class MusicBox {
  constructor({data, wrapper}) {
    this.data = data
    this.wrapper = wrapper
    this.soundsNode = null
    this.input = null
    this.isPlay = false
    this.currentSoundId = 0
    this.slideId = null
    this.value = 0
    this.step = 0
  }

  range(e) {
    let value = e.target.value

    this.soundsNode.forEach((sound, i) => {
      if (this.currentSoundId === i) {
        if (this.findAudio(sound)) {
          const a = this.findAudio(sound).duration / 100
          this.value = Number(value)
          this.findAudio(sound).currentTime = value * a
        }
      }
    })
  }

  play(audio, index) {
    this.setBg(index)

    if (!(this.currentSoundId === index)) {
      this.switchTrack(index)
    }
    
    if (!this.isPlay) {
      audio.play()
      this.isPlay = true

      this.soundsNode.forEach((sound, i) => {
        this.findIcon(sound).src = this.data[i].icon
      })

      this.step = 100 / audio.duration
      this.slideId = setInterval(() => {
        this.input.value = this.value
        this.value = this.value + this.step
        if (this.value > 100) {
          clearInterval(this.slideId)
          this.reset()
        }
      }, 1000)
    } else {
      this.stop(audio, index)
    }
  }

  stop(audio, index) {
    audio.pause()
    this.isPlay = false
    clearInterval(this.slideId)
    this.soundsNode.forEach((sound, i) => {
      if (index === i) {
        this.findIcon(sound).src = pauseIcon
      }
    })
  }

  findIcon(sound) {
    return [...sound.childNodes].find(item => item.closest('.icon'))
  }

  findAudio(sound) {
    return [...sound.childNodes].find(item => item.tagName === 'AUDIO')
  }

  switchTrack(index) {
    this.reset()
    this.soundsNode.forEach((sound, i) => {
      this.findAudio(sound).pause();
      this.findAudio(sound).currentTime = 0;
      this.findIcon(sound).src = this.data[i].icon
    })
    clearInterval(this.slideId)
    this.currentSoundId = index
  }

  reset() {
    this.isPlay = false
    this.value = 0
    this.input.value = 0
  }

  setBg(index) {
    this.data.forEach((item, i) => {
      if (index === i) {
        document.body.style.backgroundImage = `url(${item.image})`
        this.soundsNode[i].classList.add('current')
      } else {
        this.soundsNode[i].classList.remove('current')
      }
    })
  }

  init() {
    this.data.forEach((item, i) => {
      const div = document.createElement('div')
      div.classList.add('sound-item')
      div.style.cssText = `
        background-image: url(${item.image});
      `
      const icon = document.createElement('img')
      icon.classList.add('icon')
      icon.src = item.icon

      div.appendChild(icon)

      if (i === this.currentSoundId) {
        document.body.style.backgroundImage = `url(${item.image})`
        div.classList.add('current')
      }

      const audio = document.createElement('audio')
      audio.src = item.sound

      div.appendChild(audio)
      this.wrapper.appendChild(div)
    
      div.addEventListener('click', () => {
        this.play(audio, i)
      })
    })

    this.soundsNode = document.querySelectorAll('.sound-item')

    const input = document.createElement('input')
    input.type = 'range'
    input.value = 0
    input.addEventListener('input', (e) => {
      this.range(e)
    })

    this.wrapper.after(input)
    this.input = input
  }
}