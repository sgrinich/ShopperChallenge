import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submitted-component',
  templateUrl: './submitted.component.html'
})

export class SubmittedComponent {
  constructor(
    private router: Router
  ) { }

  public onHomeSelection() {
    this.router.navigateByUrl('');
  }
}
