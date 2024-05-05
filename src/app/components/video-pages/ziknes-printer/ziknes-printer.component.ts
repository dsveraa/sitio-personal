import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { RecomendadosComponent } from '../../recomendados/recomendados.component';
import { isPlatformBrowser } from '@angular/common';
import { BlenderComponent } from '../../icons/blender/blender.component';
import { AiComponent } from '../../icons/ai/ai.component';
import { AeComponent } from '../../icons/ae/ae.component';
import { IconsSizeService } from '../../../services/icons-size.service';
import { ZiknesComponent } from '../../videos/ziknes/ziknes.component';

@Component({
  selector: 'app-ziknes-printer',
  standalone: true,
  imports: [
    RecomendadosComponent,
    BlenderComponent,
    AeComponent,
    AiComponent,
    ZiknesComponent
  ],
  templateUrl: './ziknes-printer.component.html',
  styleUrl: './ziknes-printer.component.css'
})
export class ZiknesPrinterComponent implements OnInit {
  
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
  //     this.ancla.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // }

}

