import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VideosComponent } from './components/videos/videos.component';
import { WebComponent } from './components/web/web.component';
import { PrintComponent } from './components/print/print.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'videos', component: VideosComponent },
    { path: 'web', component: WebComponent },
    { path: 'print', component: PrintComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
