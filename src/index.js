import './index.css'
import testAudio from './assets/sounds/summer.mp3'

const myAudio = new Audio(testAudio);
(myAudio.play())()

console.log('init');