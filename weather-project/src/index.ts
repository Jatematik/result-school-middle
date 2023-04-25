import './index.css';
import { data } from './data';
import { MusicBox } from './components/MusicBox';

const root: HTMLElement | null = document.getElementById('root');
const wrapper: HTMLDivElement = document.createElement('div');
const title: HTMLHeadElement = document.createElement('h1');

title.textContent = 'Weather sounds';
wrapper.classList.add('wrapper');
root?.append(title, wrapper);

const music = new MusicBox({ data, wrapper });
music.init();
