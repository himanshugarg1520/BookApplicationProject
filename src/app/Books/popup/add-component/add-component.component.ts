import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ListComponent } from '../../Component/outer/list/list.component';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.css']
})
export class AddComponentComponent {

  booktitle: string = '';
  bookauthor: string = '';
  bookyearofpublish?: number;
  bookpublisher: string = '';
  bookgenre: string = '';
  bookpages?: number;

  constructor(public dialogRef: MatDialogRef<AddComponentComponent>, 

  @Inject(MAT_DIALOG_DATA) public data: {title: string,author: string, yearofpublish?:number, publisher: string, genre: string, pages?: number}){
    this.booktitle=data? data.title: '',
    this.bookauthor=data? data.author: '',
    this.bookyearofpublish = data && data.yearofpublish !== undefined ? data.yearofpublish : undefined,
    this.bookpublisher = data? data.publisher: '',
    this.bookgenre = data? data.genre: '',
    this.bookpages = data && data.pages !== undefined ? data.pages: undefined
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.booktitle && this.bookauthor && this.bookyearofpublish && this.bookpublisher && this.bookgenre && this.bookpages) {
      const bookDetails = {
        title: this.booktitle,
        author: this.bookauthor,
        yearofpublish: this.bookyearofpublish,
        publisher: this.bookpublisher,
        genre: this.bookgenre,
        pages: this.bookpages,
      };
      this.dialogRef.close(bookDetails);
    }
  }

}
