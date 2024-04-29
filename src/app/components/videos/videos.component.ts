import { Component, ElementRef, ViewChild } from '@angular/core';

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

  constructor() {}

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