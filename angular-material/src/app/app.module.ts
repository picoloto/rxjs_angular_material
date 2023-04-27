import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { ButtonIconComponent } from './components/button-icon/button-icon.component';
import { FormFieldInputComponent } from './components/form-field-input/form-field-input.component';
import { FormsModule } from '@angular/forms';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { SnackbarMsgComponent } from './components/snackbar/snackbar-msg/snackbar-msg.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonIconComponent,
    FormFieldInputComponent,
    ProgressSpinnerComponent,
    TabsComponent,
    DatePickerComponent,
    SnackbarComponent,
    ToolbarComponent,
    SnackbarMsgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
