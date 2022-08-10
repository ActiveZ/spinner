import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MessageModaleComponent } from './components/message-modale/message-modale.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

interface IEntreprise {
  raisonSociale: string;
  ville: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  @ViewChild('spinner') spinner: SpinnerComponent | undefined;

  myForm = this.fb.group({
    raisonSociale: [],
    ville: []
  });

  entreprise: IEntreprise = {
    raisonSociale: "raison sociale",
    ville: "ville"
  };

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
      this.myForm.patchValue(this.entreprise)
  }

  onShowSpinner() {
    this.spinner?.showSpinner()
    setTimeout(() => {
      this.spinner?.hideSpinner();
    }, 3000);
  }

  onOpenModal() {
    const dialogRef = this.dialog.open(MessageModaleComponent, {
      width: '500px',
      data: { entreprise: this.entreprise },
    });

    dialogRef.afterClosed().subscribe((modalResult) => {
      if (modalResult && modalResult != 'canceled') {
        this.myForm.patchValue(modalResult)
        // this.myForm.patchValue({
        //   raisonSociale: modalResult.raisonSociale,
        //   ville: modalResult.ville,
        // });
        // this.entreprise = modalResult;
      }
    });
  }
}

