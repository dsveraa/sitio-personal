import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { RecomendadosComponent } from '../../recomendados/recomendados.component';
import { IconsSizeService } from '../../../services/icons-size.service';
import { Cinema4dComponent } from '../../icons/cinema4d/cinema4d.component';
import { AeComponent } from '../../icons/ae/ae.component';
import { RedshiftComponent } from '../../icons/redshift/redshift.component';
import { PsComponent } from '../../icons/ps/ps.component';
import { MetroComponent } from '../../videos/metro/metro.component';

@Component({
  selector: 'app-metro-mural',
  standalone: true,
  imports: [
    RecomendadosComponent,
    Cinema4dComponent,
    AeComponent,
    RedshiftComponent,
    PsComponent,
    MetroComponent
  ],
  templateUrl: './metro-mural.component.html',
  styleUrl: './metro-mural.component.css'
})
export class MetroMuralComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private _iconSize: IconsSizeService,
  ) { }

  iconSize: any;

  ngOnInit() {
    this.iconSize = this._iconSize.iconsSize;
  }
  
  @ViewChild('ancla') ancla!: ElementRef;
  
  ngAfterViewInit(): void {
    window.scrollTo({top: 0, behavior: 'smooth'})

  }



}