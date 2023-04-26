import { Component, OnInit } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { concat, interval, map, take, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss'],
})
export class ProgressSpinnerComponent implements OnInit {
  public loadingPercent = 0;
  public bufferPercent = 0;
  public queryValue = 0;
  public queryProgressMode: ProgressBarMode = 'query';
  public querySpinnerMode: ProgressSpinnerMode = 'indeterminate';

  ngOnInit(): void {
    const LOADING_SPEED = 500;
    const BUFFER_SPEED = 350;
    const MAX_PERCENT = 500;

    this.loadingProgress(LOADING_SPEED, MAX_PERCENT).subscribe(
      (i) => (this.loadingPercent = i)
    );

    this.loadingProgress(BUFFER_SPEED, MAX_PERCENT).subscribe(
      (i) => (this.bufferPercent = i)
    );

    concat(
      interval(2000).pipe(
        take(1),
        tap(
          (_) => (
            (this.queryProgressMode = 'determinate'),
            (this.querySpinnerMode = 'determinate')
          )
        )
      ),
      this.loadingProgress(LOADING_SPEED, MAX_PERCENT)
    ).subscribe((i) => (this.queryValue = i));
  }

  loadingProgress(speed: number, takeUntil: number) {
    return interval(speed).pipe(
      map((i) => i * 5),
      takeWhile((i) => i <= takeUntil)
    );
  }
}
