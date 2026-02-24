import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Imports the routes we fixed above

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
