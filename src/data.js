import rainBg from '../public/assets/rainy-bg.jpg'
import cloudRainIcon from '../public/assets/icons/cloud-rain.svg'
import rainSound from '../public/assets/sounds/rain.mp3'

import summerBg from '../public/assets/summer-bg.jpg'
import cloudSummerIcon from '../public/assets/icons/sun.svg'
import summerSound from '../public/assets/sounds/summer.mp3'

import winterBg from '../public/assets/winter-bg.jpg'
import cloudWinterIcon from '../public/assets/icons/cloud-snow.svg'
import winterSound from '../public/assets/sounds/winter.mp3'

export const data = [
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