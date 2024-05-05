import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bootstrap',
  standalone: true,
  imports: [],
  templateUrl: './bootstrap.component.html',
  styleUrl: './bootstrap.component.css'
})
export class BootstrapComponent {

  altoOriginal: number = 60;
  anchoOriginal: number = 62;

  @Input() size!:number;
}
