import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonIconComponent } from './button-icon/button-icon.component';
import { FormFieldInputComponent } from './form-field-input/form-field-input.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  { path: 'buttonIcon', component: ButtonIconComponent },
  { path: 'formFieldInput', component: FormFieldInputComponent },
  { path: 'progressSpinner', component: ProgressSpinnerComponent },
  { path: 'tabs', component: TabsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
