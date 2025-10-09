import { AsyncPipe, DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../core/models/face-snap';
import { faceSnapService } from '../core/services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  imports: [NgStyle, NgClass, UpperCasePipe, DatePipe, RouterLink, AsyncPipe],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})


export class SingleFaceSnapComponent implements OnInit {
  faceSnap$!: Observable<FaceSnap>;
  buttonText!: string;
  // userHasSnapped!: boolean;

  constructor(private faceSnapService: faceSnapService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
  }

  onSnap(faceSnapId: number) {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnap$ = this.faceSnapService.snapFaceSnapById(faceSnapId, 'snap').pipe(
        tap(() => this.buttonText = 'Oops, unSnap!')
      );
    } else {
      this.faceSnap$ = this.faceSnapService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
        tap(() => this.buttonText = 'Oh Snap!')
      );
    }
  }

  // removeSnap(faceSnapId: number): void {
  //   this.faceSnapService.snapFaceSnapById(faceSnapId, 'unsnap');
  //   this.buttonText = 'Oh Snap!';
  //   this.userHasSnapped = false;
  // }

  // addSnap(faceSnapId: number): void {
  //   this.faceSnapService.snapFaceSnapById(faceSnapId, 'snap');
  //   this.buttonText = 'Oops, un Snap!';
  //   this.userHasSnapped = true;
  // }

  private prepareInterface() {
    this.buttonText = 'Oh Snap!';
    // this.userHasSnapped = false;
  }

  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapService.getFaceSnapById(faceSnapId);
  }
}
