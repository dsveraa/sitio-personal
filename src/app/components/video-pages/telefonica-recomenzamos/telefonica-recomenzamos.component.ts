import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { RecomendadosComponent } from '../../recomendados/recomendados.component';
import { isPlatformBrowser } from '@angular/common';
import { Cinema4dComponent } from '../../icons/cinema4d/cinema4d.component';
import { RedshiftComponent } from '../../icons/redshift/redshift.component';
import { ResolveComponent } from '../../icons/resolve/resolve.component';
import { IconsSizeService } from '../../../services/icons-size.service';
@Component({
  selector: 'app-telefonica-recomenzamos',
  standalone: true,
  imports: [
    RecomendadosComponent,
    Cinema4dComponent,
    RedshiftComponent,
    ResolveComponent
  ],
  templateUrl: './telefonica-recomenzamos.component.html',
  styleUrl: './telefonica-recomenzamos.component.css'
})
export class TelefonicaRecomenzamosComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private _iconSize: IconsSizeService,
  ) { }

  iconSize?: any;

ngOnInit(): void {
  this.iconSize = this._iconSize.iconsSize;
}

@ViewChild('ancla') ancla!: ElementRef;

ngAfterViewInit(): void {
    window.scrollTo({top: 0, behavior: 'smooth'})
    // this.scrollAncla();
  }

  // scrollAncla() {
  //   if (isPlatformBrowser(this.platformId)) {
  //     this.ancla.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // }

}
