import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-message-modale',
  templateUrl: './message-modale.component.html',
  styleUrls: ['./message-modale.component.scss']
})
export class MessageModaleComponent implements OnInit {

  entreprise = {
    raisonSociale: "",
    ville: ""
  };

  myModalForm!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<MessageModaleComponent>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.entreprise = this.data.entreprise;
    this.myModalForm = this.fb.group({
      raisonSociale: [],
      ville: []
    });

    this.myModalForm.patchValue(this.data.entreprise)
  }

  cancel(): void {
    this.dialogRef.close('canceled');
  }

  submit(form: FormGroup) {
    this.dialogRef.close(form.value);
  }
}
