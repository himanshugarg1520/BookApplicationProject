import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-warning-pop-up',
  templateUrl: './warning-pop-up.component.html',
  styleUrls: ['./warning-pop-up.component.css']
})
export class WarningPopUpComponent {

  constructor(
    public dialogRef: MatDialogRef<WarningPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { bookName:  string }
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onClose(): void {
    this.dialogRef.close(false);
  }

}
