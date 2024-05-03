import { Component } from '@angular/core';
import { AeComponent } from '../ae/ae.component';
import { AuditionComponent } from '../audition/audition.component';
import { PremiereComponent } from '../premiere/premiere.component';
import { AngularComponent } from '../angular/angular.component';
import { BlenderComponent } from '../blender/blender.component';
import { BootstrapComponent } from '../bootstrap/bootstrap.component';
import { CssComponent } from '../css/css3.component';
import { GitComponent } from '../git/git.component';
import { Html5Component } from '../html5/html5.component';
import { AiComponent } from '../ai/ai.component';
import { JsComponent } from '../js/js.component';
import { PsComponent } from '../ps/ps.component';
import { TscriptComponent } from '../tscript/tscript.component';
import { VscodeComponent } from '../vscode/vscode.component';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [
    AeComponent, 
    AuditionComponent, 
    PremiereComponent,
    AngularComponent,
    BlenderComponent,
    BootstrapComponent,
    CssComponent,
    GitComponent,
    Html5Component,
    AiComponent,
    JsComponent,
    PsComponent,
    TscriptComponent,
    VscodeComponent
  ],
  templateUrl: "./icons.component.html",
  styleUrl: "./icons.component.css" ,
})
export class IconsComponent {

}
