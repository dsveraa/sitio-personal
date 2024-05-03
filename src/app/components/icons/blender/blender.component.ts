import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blender',
  standalone: true,
  imports: [],
  templateUrl: './blender.component.html',
  styleUrl: './blender.component.css'
})
export class BlenderComponent {

  altoOriginal: number = 60;
  anchoOriginal: number = 80;

  @Input() size!: number; 
}
