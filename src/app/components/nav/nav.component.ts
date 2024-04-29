import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HomeService } from '../../services/home.service';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  constructor(private _inHome: HomeService) { }

  enviarEstadoHome(value: boolean) {
    this._inHome.aplicarEstadoHome(value);
  }

}
