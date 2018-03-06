import { Injectable } from '@angular/core';
import { Application } from '../interface/application.interface';
import { ApplicationSchema } from '../interface/application-schema.interface';

@Injectable()
export class ApplicationService {

  constructor() { }

  public saveApplication(application: Application) {
    const formattedApplication = this.formatToSchema(application);

    // This is where we would make a request to our server. Instead, just log for now
    console.log(formattedApplication);
  }

  private formatToSchema(application: Application): ApplicationSchema {
    const applicationSchema: ApplicationSchema = {
      first_name: application.firstName,
      last_name: application.lastName,
      phone: application.phone,
      email: application.email,
      workflow_state: this.getWorkflowState(application),
      created_at: new Date().toISOString()
    };

    return applicationSchema;
  }

  // TODO: Once more fields are added to the application and
  // intake flow is expanded in greater detail, this function can be
  // expanded to return a more diverse range of values based on the challenge's
  // listd possibilities, i.e., 'hired', 'quiz_completed', etc.
  private getWorkflowState(application: Application): string {
    if (application.submitted) {
      return 'applied';
    } else {
      return 'quiz_started';
    }
  }

}
