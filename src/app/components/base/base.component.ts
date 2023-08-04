import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit, inject } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  @Input() opened = true;
  modes: MatDrawerMode = 'side';
  breakPoint = inject(BreakpointObserver);

  ngOnInit(): void {
    this.breakPoint.observe([Breakpoints.XSmall]).subscribe(result => {
      this.opened = !result.matches;
      this.modes= result.matches ? 'over' : 'side';
    })
  }
}
