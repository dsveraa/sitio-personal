import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VideosComponent } from './components/videos/videos.component';
import { WebComponent } from './components/web/web.component';
import { PrintComponent } from './components/print/print.component';
import { GascoAutogasComponent } from './components/video-pages/gasco-autogas/gasco-autogas.component';
import { VolkswagenLastChanceThumbnailComponent } from './components/recomendados/volkswagen-last-chance-thumbnail/volkswagen-last-chance-thumbnail.component';
import { VolkswagenLastChanceComponent } from './components/video-pages/volkswagen-last-chance/volkswagen-last-chance.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'videos', component: VideosComponent },
    { path: 'web', component: WebComponent },
    { path: 'print', component: PrintComponent },
    { path: 'gasco-autogas', component: GascoAutogasComponent },
    { path: 'volkswagen-last-chance', component: VolkswagenLastChanceComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
