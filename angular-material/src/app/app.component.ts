import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { fromEvent, map } from 'rxjs';

export const SCROLL_CONTAINER = 'mat-sidenav-content';
export const TEXT_LIMIT = 50;
export const SHADOW_LIMIT = 85;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-material';
  public isSmallScreen = false;
  public popText = false;
  public applyShadow = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    const scrollContainer = document.scrollingElement;

    fromEvent(document, 'scroll')
      .pipe(map(() => scrollContainer!.scrollTop))
      .subscribe({
        next: (value: number) => this.determineHeader(value),
      });
  }

  determineHeader(top: number) {
    console.log(`top ${top}`);
    this.popText = top >= TEXT_LIMIT;
    this.applyShadow = top >= SHADOW_LIMIT;
  }

  ngAfterContentInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 800px)'])
      .subscribe((r) => (this.isSmallScreen = r.matches));
  }

  get sidenavMode() {
    return this.isSmallScreen ? 'over' : 'side';
  }
}
