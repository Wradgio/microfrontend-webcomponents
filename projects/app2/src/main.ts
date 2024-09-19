import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { createCustomElement } from '@angular/elements';
import { bootstrapApplication } from '@angular/platform-browser';


bootstrapApplication(AppComponent, appConfig)
.then((app) => {
  customElements.define('app-2', createCustomElement(AppComponent, {
    injector: (app).injector
  }));
})
.catch((err) => console.error(err));