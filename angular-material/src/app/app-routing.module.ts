import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonIconComponent } from './components/button-icon/button-icon.component';
import { FormFieldInputComponent } from './components/form-field-input/form-field-input.component';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';

const routes: Routes = [
  { path: 'buttonIcon', component: ButtonIconComponent },
  { path: 'formFieldInput', component: FormFieldInputComponent },
  { path: 'progressSpinner', component: ProgressSpinnerComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'datePicker', component: DatePickerComponent },
  { path: 'snackbar', component: SnackbarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
