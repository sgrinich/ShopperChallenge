import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ApplicationComponent } from './components/page-components/application/application.component';
import { BackgroundCheckComponent } from './components/page-components/background/background.component';
import { MainComponent } from './components/page-components/main/main.component';
import { SubmittedComponent } from './components/page-components/submitted/submitted.component';

import { ApplicationService } from './services/application.service';
import { SessionService } from './services/session.service';

const appRoutes: Routes = [
  { path: 'apply-now', component: ApplicationComponent },
  { path: 'background-check', component: BackgroundCheckComponent },
  { path: 'submitted', component: SubmittedComponent },
  { path: '**', component: MainComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ApplicationComponent,
    BackgroundCheckComponent,
    SubmittedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    ApplicationService,
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
