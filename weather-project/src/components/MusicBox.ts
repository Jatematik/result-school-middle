import { SoundType } from './../data';
import pauseIcon from '../../public/assets/icons/pause.svg';

export class MusicBox {
  data: SoundType[];
  wrapper: HTMLElement;
  soundsNode: NodeListOf<Element> | null;
  input: HTMLInputElement | null;
  isPlay: boolean;
  currentSoundId: number;

  constructor({ data, wrapper }: { data: SoundType[]; wrapper: HTMLElement }) {
    this.data = data;
    this.wrapper = wrapper;
    this.soundsNode = null;
    this.input = null;
    this.isPlay = false;
    this.currentSoundId = 0;
  }

  setVolume(e: Event): void {
    const target = e.target as HTMLInputElement;
    console.log(target, 'target');

    this.soundsNode?.forEach((sound, i) => {
      if (this.currentSoundId === i) {
        if (this.findAudio(sound)) {
          this.findAudio(sound).volume = Number(target.value) / 100;
        }
      }
    });
  }

  play(audio: HTMLAudioElement, index: number) {
    this.setBg(index);

    if (!(this.currentSoundId === index)) {
      this.switchTrack(index);
    }

    if (!this.isPlay) {
      audio.play();
      this.isPlay = true;

      audio.volume = Number(this.input?.value) / 100;

      this.soundsNode?.forEach((sound, i) => {
        this.findIcon(sound).src = this.data[i].icon;
      });
    } else {
      this.stop(audio, index);
    }
  }

  stop(audio: HTMLAudioElement, index: number) {
    audio.pause();
    this.isPlay = false;

    this.soundsNode?.forEach((sound, i) => {
      if (index === i) {
        this.findIcon(sound).src = pauseIcon;
      }
    });
  }

  findIcon(sound: Element): HTMLImageElement {
    return [...sound.children].find((item) =>
      item.closest('.icon')
    ) as HTMLImageElement;
  }

  findAudio(sound: Element) {
    return [...sound.children].find(
      (item) => item.tagName === 'AUDIO'
    ) as HTMLAudioElement;
  }

  switchTrack(index: number) {
    this.isPlay = false;
    this.soundsNode?.forEach((sound, i) => {
      this.findAudio(sound).pause();
      this.findAudio(sound).currentTime = 0;
      this.findIcon(sound).src = this.data[i].icon;
    });
    this.currentSoundId = index;
  }

  setBg(index: number) {
    this.data.forEach((item, i) => {
      if (index === i) {
        document.body.style.backgroundImage = `url(${item.image})`;
        this.soundsNode?.[i].classList.add('current');
      } else {
        this.soundsNode?.[i].classList.remove('current');
      }
    });
  }

  init() {
    this.data.forEach((item, i) => {
      const button = document.createElement('button');
      button.classList.add('sound-item');
      button.style.cssText = `
        background-image: url(${item.image});
      `;
      const icon = document.createElement('img');
      icon.classList.add('icon');
      icon.src = item.icon;

      button.appendChild(icon);

      const audio = new Audio();
      audio.src = item.sound;

      button.appendChild(audio);
      this.wrapper.appendChild(button);

      button.addEventListener('click', () => {
        this.play(audio, i);
      });
    });

    this.soundsNode = document.querySelectorAll('.sound-item');

    const input = document.createElement('input');
    input.type = 'range';
    input.value = '50';
    input.addEventListener('input', (e) => {
      this.setVolume(e);
    });

    this.wrapper.after(input);
    this.input = input;
  }
}
