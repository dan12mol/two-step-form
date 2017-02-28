import { Routes, RouterModule } from '@angular/router';

import { FormStepOneComponent } from './form-step-one/form-step-one.component';
import { FormStepTwoComponent } from './form-step-two/form-step-two.component';

const routes: Routes = [
  {path: '', redirectTo: 'step-one', pathMatch : 'full'},
  {path: 'step-one', component: FormStepOneComponent},
  {path: 'step-two', component: FormStepTwoComponent},
];

export const routing = RouterModule.forRoot(routes);

