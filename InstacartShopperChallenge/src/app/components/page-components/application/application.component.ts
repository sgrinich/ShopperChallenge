import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Application } from '../../../interface/application.interface';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-application-component',
  templateUrl: './application.component.html'
})

export class ApplicationComponent implements OnInit {

  model: Application = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    submitted: false,
    backgroundCheckAccepted: false
  };

  constructor(
    private router: Router,
    private sessionService: SessionService
  ) { }

  ngOnInit() {
    const application = this.sessionService.getApplication();
    if (application) {
      this.model = application;
    }
  }

  public onSubmit() {
    this.model.submitted = true;
    this.sessionService.saveApplication(this.model);
    this.router.navigateByUrl('background-check');
  }

  public onBlur(valid: boolean) {
    // only want to update session if form is valid
    if (valid) {
      this.sessionService.saveApplication(this.model);
    }
  }
}
