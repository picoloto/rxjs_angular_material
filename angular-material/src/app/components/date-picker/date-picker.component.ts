import { Component, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  public startDate = Date.now;
  public minDate = new Date(2023, 2, 1);
  public maxDate = new Date(2023, 6, 20);

  constructor(private platform: Platform) {}

  ngOnInit(): void {}

  get isTouchDevice() {
    return this.platform.ANDROID || this.platform.IOS;
  }
}
