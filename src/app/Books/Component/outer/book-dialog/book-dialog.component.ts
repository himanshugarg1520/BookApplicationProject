import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-book-dialog',
  templateUrl: './book-dialog.component.html',
  styleUrls: ['./book-dialog.component.css']
})
export class BookDialogComponent {

  booktitle:string='';
  bookauthor:string='';
  bookyearofpublish?: number;
  bookpublisher: string='';
  bookgenre: string='';
  bookpages?: number;

  constructor(public dialogref: MatDialogRef<BookDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: {title: string,author: string, yearofpublish?:number, publisher: string, genre: string, pages:number}){
      this.booktitle=data? data.title: '',
      this.bookauthor=data? data.author: '',
      this.bookyearofpublish = data && data.yearofpublish !== undefined ? data.yearofpublish : undefined,
      this.bookpublisher = data? data.publisher: '',
      this.bookgenre = data? data.genre: '',
      this.bookpages = data && data.pages !== undefined ? data.pages: undefined
    }


  Oncancel(): void{
    this.dialogref.close();
  }

  Save(): void{
    if(this.bookauthor && this.booktitle && this.bookyearofpublish && this.bookpublisher && this.bookgenre && this.bookpages){
      const bookdetails={
        title: this.booktitle,
        author: this.bookauthor,
        yearofpublish: this.bookyearofpublish,
        publisher: this.bookpublisher,
        genre: this.bookgenre,
        pages: this.bookpages,
      };
      this.dialogref.close(bookdetails);
    }
  }
   

}
