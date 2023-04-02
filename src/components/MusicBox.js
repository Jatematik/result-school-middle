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
  }

  setVolume(e) {
    this.soundsNode.forEach((sound, i) => {
      if (this.currentSoundId === i) {
        if (this.findAudio(sound)) {
          this.findAudio(sound).volume = e.target.value / 100
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
      audio.volume = this.input.value / 100

      this.soundsNode.forEach((sound, i) => {
        this.findIcon(sound).src = this.data[i].icon
      })
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
    this.isPlay = false
    this.soundsNode.forEach((sound, i) => {
      this.findAudio(sound).pause();
      this.findAudio(sound).currentTime = 0;
      this.findIcon(sound).src = this.data[i].icon
    })
    clearInterval(this.slideId)
    this.currentSoundId = index
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
      const button = document.createElement('button')
      button.classList.add('sound-item')
      button.style.cssText = `
        background-image: url(${item.image});
      `
      const icon = document.createElement('img')
      icon.classList.add('icon')
      icon.src = item.icon

      button.appendChild(icon)

      const audio = new Audio()
      audio.src = item.sound

      button.appendChild(audio)
      this.wrapper.appendChild(button)
    
      button.addEventListener('click', () => {
        this.play(audio, i)
      })
    })

    this.soundsNode = document.querySelectorAll('.sound-item')

    const input = document.createElement('input')
    input.type = 'range'
    input.value = 50
    input.addEventListener('input', (e) => {
      this.setVolume(e)
    })

    this.wrapper.after(input)
    this.input = input
  }
}