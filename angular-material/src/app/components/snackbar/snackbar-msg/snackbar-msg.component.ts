import { Component, Inject } from '@angular/core';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarRef,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar-msg',
  templateUrl: './snackbar-msg.component.html',
  styleUrls: ['./snackbar-msg.component.scss'],
})
export class SnackbarMsgComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: string,
    public snackBarRef: MatSnackBarRef<SnackbarMsgComponent>
  ) {}
}
