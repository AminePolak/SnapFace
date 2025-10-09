import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../core/models/face-snap';
import { faceSnapService } from '../core/services/face-snaps.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { FaceSnapComponent } from '../face-snap/face-snap.component';

@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnapComponent, AsyncPipe],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})

export class FaceSnapListComponent implements OnInit {
  faceSnaps$!: Observable<FaceSnap[]>;

  constructor(private faceSnapService: faceSnapService) { }

  ngOnInit(): void {
    this.faceSnaps$ = this.faceSnapService.getAllFaceSnaps();
  }
}
