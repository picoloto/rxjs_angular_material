import { Component, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import * as moment from 'moment';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  public startDate = moment.now;
  public minDate = moment([2023, 2, 1]);
  public maxDate = moment([2023, 6, 20]);

  constructor(private platform: Platform) {}

  ngOnInit(): void {}

  get isTouchDevice() {
    return this.platform.ANDROID || this.platform.IOS;
  }
}
