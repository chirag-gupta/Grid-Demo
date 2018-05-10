import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatFormFieldModule } from '@angular/material';


@Component({
    selector: 'app-dialog',
    templateUrl: 'dialog.html',
    styleUrls: ['./dialog.css']
  })
  export class DialogComponent {

    constructor(
      public dialogRef: MatDialogRef<DialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
      this.dialogRef.close();
    }

  }
