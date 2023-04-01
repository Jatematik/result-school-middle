import rainBg from './assets/rainy-bg.jpg'
import cloudRainIcon from './assets/icons/cloud-rain.svg'
import rainSound from './assets/sounds/rain.mp3'

import summerBg from './assets/summer-bg.jpg'
import cloudSummerIcon from './assets/icons/sun.svg'
import summerSound from './assets/sounds/summer.mp3'

import winterBg from './assets/winter-bg.jpg'
import cloudWinterIcon from './assets/icons/cloud-snow.svg'
import winterSound from './assets/sounds/winter.mp3'

export default [
  {
    id: 'rain',
    image: rainBg,
    icon: cloudRainIcon,
    sound: rainSound
  },
  {
    id: 'summer',
    image: summerBg,
    icon: cloudSummerIcon,
    sound: summerSound
  },
  {
    id: 'winter',
    image: winterBg,
    icon: cloudWinterIcon,
    sound: winterSound
  }
]