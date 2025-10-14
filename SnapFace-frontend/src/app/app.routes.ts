import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
    {
        path: 'facesnaps',
        loadChildren: () => import('./routes/face-snap-routes').then(m => m.FACE_SNAP_ROUTES)
    },
    { path: '', component: LandingPageComponent }
];
