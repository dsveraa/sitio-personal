import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tscript',
  standalone: true,
  imports: [],
  templateUrl: './tscript.component.html',
  styleUrl: './tscript.component.css'
})
export class TscriptComponent {
@Input() size:any;
}
