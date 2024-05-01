import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { RecomendadosComponent } from '../../recomendados/recomendados.component';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-volkswagen-last-chance',
  standalone: true,
  imports: [RecomendadosComponent],
  templateUrl: './volkswagen-last-chance.component.html',
  styleUrl: './volkswagen-last-chance.component.css'
})
export class VolkswagenLastChanceComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }


  @ViewChild('ancla') ancla: ElementRef;

  ngAfterViewInit(): void {
    this.scrollAncla();
  }

  scrollAncla() {
    if (isPlatformBrowser(this.platformId)) {
      this.ancla.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}