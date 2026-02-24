import { Routes } from '@angular/router';
// These match your 'template-demo' and 'reactive-demo' folders
import { TemplateDemoComponent } from './template-demo/template-demo';
import { ReactiveDemoComponent } from './reactive-demo/reactive-demo';

export const routes: Routes = [
  { path: 'template', component: TemplateDemoComponent },
  { path: 'reactive', component: ReactiveDemoComponent },
  { path: '', redirectTo: '/template', pathMatch: 'full' }
];
