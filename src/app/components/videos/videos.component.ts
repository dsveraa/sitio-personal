import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { VideosRecomendadosService } from '../../services/videos-recomendados.service';
import { BoxAnimationService } from '../../services/box-animation.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent implements OnInit {
  @ViewChild('videoGasco') videoGasco!: ElementRef<HTMLVideoElement>;
  @ViewChild('videoVolkswagen') videoVolkswagen!: ElementRef<HTMLVideoElement>;
  @ViewChild('videoZiknes') videoZiknes!: ElementRef<HTMLVideoElement>;
  @ViewChild('videoMetro') videoMetro!: ElementRef<HTMLVideoElement>;
  @ViewChild('videoSQM') videoSQM!: ElementRef<HTMLVideoElement>;
  @ViewChild('videoTelefonica') videoTelefonica!: ElementRef<HTMLVideoElement>;

  constructor(
    private animationService: BoxAnimationService,
    private videosRecomendadosService: VideosRecomendadosService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.animationService.animateElement('box');
      this.animationService.animateElement('box2');
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

  asignarVideoActual(id: number) {
    this.videosRecomendadosService.modelarRecomendados(id);
  }

  gascoAutogas() {
    this.router.navigate(['/gasco-autogas']);
  }

}
