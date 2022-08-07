import { Component, Input, OnInit } from '@angular/core';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { CommonModule } from '@angular/common';
// import { NgModule } from '@angular/core';
// import { SharedModule } from 'src/app/commun/modules/shared.module';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  @Input() show: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  showSpinner(): void {
    this.show = true;
  }

  hideSpinner(): void {
    this.show = false;
  }
}