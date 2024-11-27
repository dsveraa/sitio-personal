import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Cinema4dComponent } from '../icons/cinema4d/cinema4d.component';
import { IconsSizeService } from '../../services/icons-size.service';


@Component({
  selector: 'app-invitacion',
  standalone: true,
  imports: [
    Cinema4dComponent
  ],
  templateUrl: './invitacion.component.html',
  styleUrl: './invitacion.component.css'
})
export class InvitacionComponent implements OnInit{
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private _iconSize: IconsSizeService,
  ) { }

  iconSize: any;

  ngOnInit() {
    this.iconSize = this._iconSize.iconsSize;
  }
}
