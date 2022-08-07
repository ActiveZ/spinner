import { Component, OnInit, ViewChild } from '@angular/core';
import { SpinnerComponent } from './components/spinner/spinner.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  @ViewChild('spinner') spinner: SpinnerComponent | undefined;
  title = 'spinner';

  onShowSpinner() {
    this.spinner?.showSpinner()
    setTimeout(() => {
      this.spinner?.hideSpinner();
    }, 3000);
  }
}
