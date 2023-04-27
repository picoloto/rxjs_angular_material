import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarMsgComponent } from './snackbar-msg/snackbar-msg.component';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this._snackBar.open('Iniciou o app');
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  public openSnackBarRxjs() {
    const snackbar = this._snackBar.open('Com RxJS', 'Action', {});
    snackbar.afterDismissed().subscribe((_) => {
      console.log('dismissed');
    });
    snackbar.onAction().subscribe((_) => {
      console.log('onAction');
    });
  }

  public openFromComp() {
    const snackbar = this._snackBar.openFromComponent(SnackbarMsgComponent, {
      data: 'E ai galera, tudo certo?',
    });
  }
}
