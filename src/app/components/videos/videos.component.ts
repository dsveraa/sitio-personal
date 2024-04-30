import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent {
  @ViewChild('videoGasco') videoGasco!: ElementRef<HTMLVideoElement>;
  @ViewChild('videoVolkswagen') videoVolkswagen!: ElementRef<HTMLVideoElement>;
  @ViewChild('videoZiknes') videoZiknes!: ElementRef<HTMLVideoElement>;
  @ViewChild('videoMetro') videoMetro!: ElementRef<HTMLVideoElement>;
  @ViewChild('videoSQM') videoSQM!: ElementRef<HTMLVideoElement>;
  @ViewChild('videoTelefonica') videoTelefonica!: ElementRef<HTMLVideoElement>;

  constructor() { 
    window.addEventListener('scroll', function(){
      let animacion = document.getElementById('animado');
      let positionObj = animacion?.getBoundingClientRect().top;
      console.log(positionObj);
      let tamanoPantalla = window.innerHeight/2;

      if (positionObj! < tamanoPantalla) {
        animacion!.style.animation = 'mover 1s ease-out';
      }
    })
  }  
  
    playVideo(video: HTMLVideoElement) {
    video.currentTime = 0;
    video.play();
  }

  pauseVideo(video: HTMLVideoElement) {
    video.pause();
  }

  playOnLoad(video: HTMLVideoElement) {
    this.playVideo(video);
  }
}