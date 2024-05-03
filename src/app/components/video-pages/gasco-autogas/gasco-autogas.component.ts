import { Component, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { RecomendadosComponent } from '../../recomendados/recomendados.component';
import { isPlatformBrowser, NgClass } from '@angular/common';
import { AeComponent } from '../../icons/ae/ae.component';
import { AuditionComponent } from '../../icons/audition/audition.component';
import { BlenderComponent } from '../../icons/blender/blender.component';
import { GascoComponent } from '../../videos/gasco/gasco.component';




@Component({
  selector: 'app-gasco-autogas',
  standalone: true,
  imports: [
    RecomendadosComponent,
    AeComponent,
    AuditionComponent,
    BlenderComponent,
    NgClass,
    GascoComponent
  ],
  templateUrl: './gasco-autogas.component.html',
  styleUrl: './gasco-autogas.component.css'
})
export class GascoAutogasComponent {

  showTooltip: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }


  @ViewChild('ancla') ancla!: ElementRef;

  ngAfterViewInit(): void {
    this.scrollAncla();
  }

  scrollAncla() {
    if (isPlatformBrowser(this.platformId)) {
      this.ancla.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
