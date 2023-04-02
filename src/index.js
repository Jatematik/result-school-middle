import './index.css'
import {data} from './data'
import {MusicBox} from './components/MusicBox'

const root = document.getElementById('root')
const wrapper = document.createElement('div')
const title = document.createElement('h1')

title.textContent = 'Weather sounds'
wrapper.classList.add('wrapper')
root.append(title, wrapper)

const music = new MusicBox({data, wrapper})
music.init()