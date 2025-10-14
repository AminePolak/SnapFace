import { Routes } from "@angular/router"
import { FaceSnapListComponent } from "../face-snap-list/face-snap-list.component"
import { NewFaceSnapComponent } from "../new-face-snap/new-face-snap.component"
import { SingleFaceSnapComponent } from "../single-face-snap/single-face-snap.component"

export const FACE_SNAP_ROUTES: Routes = [
    { path: 'create', component: NewFaceSnapComponent },
    { path: ':id', component: SingleFaceSnapComponent },
    { path: '', component: FaceSnapListComponent },
]