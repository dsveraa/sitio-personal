import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { VideoLoaderComponent } from '../video-loader/video-loader.component';

@Component({
  selector: 'app-web',
  standalone: true,
  imports: [
    VideoLoaderComponent
  ],
  templateUrl: './web.component.html',
  styleUrl: './web.component.css'
})
export class WebComponent {

  showLoader = true;

  videoLoaded() {
    this.showLoader = false; 
  }

//   @ViewChild('contenedorMobile') contenedor!: ElementRef;

//   isDragging = false;
//   startY!: number;
//   startScroll!: number;
//   momentumInterval: any;
//   velocity!: number;

//   @HostListener('touchstart', ['$event'])
//   onTouchStart(event: TouchEvent) {
//     event.preventDefault();
//     this.isDragging = true;
//     this.startY = event.touches[0].clientY;
//     this.startScroll = this.contenedor.nativeElement.scrollTop;
//     this.clearMomentum();
//   }

//   @HostListener('touchmove', ['$event'])
//   onTouchMove(event: TouchEvent) {
//     event.preventDefault(); 
//     if (this.isDragging) {
//       const deltaY = event.touches[0].clientY - this.startY;
//       this.contenedor.nativeElement.scrollTop = this.startScroll - deltaY;
//       this.velocity = deltaY / 5;
//     }
//   }

//   @HostListener('touchend')
//   onTouchEnd() {
//     this.isDragging = false;
//     this.applyMomentum();
//   }

//   @HostListener('touchcancel')
//   onTouchCancel() {
//     this.isDragging = false;
//     this.applyMomentum();
//   }

//   onMouseDown(event: MouseEvent) {
//     event.preventDefault(); 
//     this.isDragging = true;
//     this.startY = event.clientY;
//     this.startScroll = this.contenedor.nativeElement.scrollTop;
//     this.clearMomentum();
//   }

//   onMouseMove(event: MouseEvent) {
//     event.preventDefault(); 
//     if (this.isDragging) {
//       const deltaY = event.clientY - this.startY;
//       this.contenedor.nativeElement.scrollTop = this.startScroll - deltaY;
//       this.velocity = deltaY / 5; 
//     }
//   }

//   onMouseUp() {
//     this.isDragging = false;
//     this.applyMomentum();
//   }

//   onMouseLeave() {
//     this.isDragging = false;
//     this.applyMomentum();
//   }

//   applyMomentum() {
//     const momentum = 0.9;

//     this.momentumInterval = setInterval(() => {
//       if (Math.abs(this.velocity) < 0.5) {
//         clearInterval(this.momentumInterval);
//         return;
//       }

//       this.velocity *= momentum;
//       this.contenedor.nativeElement.scrollTop -= this.velocity;

//       if (this.contenedor.nativeElement.scrollTop <= 0 || 
//           this.contenedor.nativeElement.scrollTop >= this.contenedor.nativeElement.scrollHeight - this.contenedor.nativeElement.clientHeight) {
//         clearInterval(this.momentumInterval);
//       }
//     }, 16);
//   }

//   clearMomentum() {
//     clearInterval(this.momentumInterval);
//   }
}

