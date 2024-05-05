import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vscode',
  standalone: true,
  imports: [],
  templateUrl: './vscode.component.html',
  styleUrl: './vscode.component.css'
})
export class VscodeComponent {
  @Input() size:any;

}
