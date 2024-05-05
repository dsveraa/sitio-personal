import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-git',
  standalone: true,
  imports: [],
  templateUrl: './git.component.html',
  styleUrl: './git.component.css'
})
export class GitComponent {
@Input() size:any;
}
