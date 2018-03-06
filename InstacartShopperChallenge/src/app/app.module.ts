import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ApplicationComponent } from './components/page-components/application/application.component';
import { BackgroundComponent } from './components/page-components/background/background.component';
import { MainComponent } from './components/page-components/main/main.component';
import { SubmittedComponent } from './components/page-components/submitted/submitted.component';


@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    BackgroundComponent,
    MainComponent,
    SubmittedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
