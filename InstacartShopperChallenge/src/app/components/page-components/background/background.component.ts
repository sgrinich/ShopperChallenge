import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../../services/session.service';
import { ApplicationService } from '../../../services/application.service';

@Component({
  selector: 'app-background-component',
  templateUrl: './background.component.html'
})

export class BackgroundCheckComponent {
  constructor(
    private applicationService: ApplicationService,
    private router: Router,
    private sessionService: SessionService
  ) { }

  public onSelection(selection: boolean) {
    const application = this.sessionService.getApplication();

    if (selection) {
      if (application) {
        this.applicationService.saveApplication(this.sessionService.getApplication());
      }

      // clear session since this application has been submitted
      this.sessionService.clearSession();
      this.router.navigateByUrl('submitted');
    } else {
      this.router.navigateByUrl('');
    }
  }

  public onViewApplication() {
    this.router.navigateByUrl('apply-now');
  }
}
