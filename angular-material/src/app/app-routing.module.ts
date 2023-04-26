import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonIconComponent } from './button-icon/button-icon.component';
import { FormFieldInputComponent } from './form-field-input/form-field-input.component';

const routes: Routes = [
  { path: 'buttonIcon', component: ButtonIconComponent },
  { path: 'formFieldInput', component: FormFieldInputComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
