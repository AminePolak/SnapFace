import { Routes } from "@angular/router"
import { FaceSnapListComponent } from "../face-snap-list/face-snap-list.component"
import { NewFaceSnapComponent } from "../new-face-snap/new-face-snap.component"
import { SingleFaceSnapComponent } from "../single-face-snap/single-face-snap.component"
import { authGuard } from "../core/guards/auth.guard"

export const FACE_SNAP_ROUTES: Routes = [
    { path: 'create', component: NewFaceSnapComponent, canActivate: [authGuard] },
    { path: ':id', component: SingleFaceSnapComponent, canActivate: [authGuard] },
    { path: '', component: FaceSnapListComponent, canActivate: [authGuard] },
]