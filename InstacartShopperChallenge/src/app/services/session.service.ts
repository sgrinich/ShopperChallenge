import { Injectable, Inject } from '@angular/core';
import { Application } from '../interface/application.interface';

@Injectable()
export class SessionService {
    private SESSION_KEY = 'application';

    public saveApplication(application: Application) {
        sessionStorage.setItem(this.SESSION_KEY, JSON.stringify(application));
    }

    public getApplication() {
        if (sessionStorage.getItem(this.SESSION_KEY)) {
            const application: Application = JSON.parse(sessionStorage.getItem(this.SESSION_KEY));
            return application;
        }
    }

    public clearSession() {
        sessionStorage.removeItem(this.SESSION_KEY);
    }
}
