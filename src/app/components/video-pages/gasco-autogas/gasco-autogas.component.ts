import { Component, ViewChild, ElementRef, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { RecomendadosComponent } from '../../recomendados/recomendados.component';
import { isPlatformBrowser, NgClass } from '@angular/common';
import { AeComponent } from '../../icons/ae/ae.component';
import { AuditionComponent } from '../../icons/audition/audition.component';
import { BlenderComponent } from '../../icons/blender/blender.component';
import { GascoComponent } from '../../videos/gasco/gasco.component';
import { IconsSizeService } from '../../../services/icons-size.service';




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
export class GascoAutogasComponent implements OnInit {

  showTooltip: boolean = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private _iconSizeService: IconsSizeService,
  ) { }

  iconSize: any;

  ngOnInit(): void {
    this.iconSize = this._iconSizeService.iconsSize;
  }
  
  @ViewChild('ancla') ancla!: ElementRef;
  
  ngAfterViewInit(): void {
    window.scrollTo({top: 0, behavior: 'smooth'})
    // this.scrollAncla();
  }

  // scrollAncla() {
  //   if (isPlatformBrowser(this.platformId)) {
  //     this.ancla.nativeElement.scrollIntoView({ 
  //       behavior: 'smooth', 
  //       block: 'start', 
  //     });
  //   }
  // }

}
