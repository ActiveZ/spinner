import { Component, Input, OnInit } from '@angular/core';
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