import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { RecomendadosComponent } from '../../recomendados/recomendados.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-metro-mural',
  standalone: true,
  imports: [RecomendadosComponent],
  templateUrl: './metro-mural.component.html',
  styleUrl: './metro-mural.component.css'
})
export class MetroMuralComponent {

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