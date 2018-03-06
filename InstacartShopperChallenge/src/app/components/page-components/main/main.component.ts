import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Application } from '../../../interface/application.interface';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main.component.html'
})
export class MainComponent {

  constructor(
    private router: Router,
    private sessionService: SessionService
  ) { }

  public onApplyNow() {
    const application = this.sessionService.getApplication();
    if (application && application.submitted) {
      if (application.submitted && !application.backgroundCheckAccepted) {
        this.router.navigateByUrl('background-check');
      }
    } else {
      this.router.navigateByUrl('apply-now');
    }
  }
}

