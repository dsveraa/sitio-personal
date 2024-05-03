import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resolve',
  standalone: true,
  imports: [],
  templateUrl: './resolve.component.html',
  styleUrl: './resolve.component.css'
})
export class ResolveComponent {

@Input() size?: any;

}
