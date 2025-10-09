import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [RouterLink, FormsModule], 
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {

  userEmail: string = 'you@youyou.fr';

  constructor(private router: Router) { }

  ngOnInit(): void {    
  }

  onContinue() {
    this.router.navigateByUrl('facesnaps')
  }

  onSubmit(form: NgForm){
    console.log(form.value);
  }
}
