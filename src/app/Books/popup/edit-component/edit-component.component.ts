import { Component } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { ListComponent } from '../../Component/outer/list/list.component';
import { BookService } from 'src/app/Books/service/book.service';
import { ItemComponent } from '../../Component/outer/item/item.component';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})

export class EditComponentComponent {

  booktitle: string;
  bookauthor: string;
  bookyearofpublish?: number;
  bookpublisher: string;
  bookgenre: string;
  bookpages?: number; 
  
  constructor(
    public dialogRef: MatDialogRef<EditComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private bookservice: BookService
  ) {
    this.booktitle = data.title;
    this.bookauthor = data.author;
    this.bookyearofpublish = data.yearofpublish;
    this.bookpublisher = data.publisher;
    this.bookgenre = data.genre;
    this.bookpages = data.pages;
   }

  // onSave(): void {
  //   if (this.booktitle && this.bookauthor && this.bookyearofpublish && this.bookpublisher && this.bookgenre && this.bookpages) {
  //     const updatedBookDetails = {
  //       title: this.booktitle,
  //       author: this.bookauthor,
  //       yearofpublish: this.bookyearofpublish,
  //       publisher: this.bookpublisher,
  //       genre: this.bookgenre,
  //       pages: this.bookpages
  //     };
  //     this.dialogRef.close(updatedBookDetails);
  //   }
  // }


  // onClickSave():void{
  //   if(this.booktitle && this.bookauthor && this.bookyearofpublish && this.bookpublisher && this.bookgenre && this.bookpages){
  //     const updatedBookDetails = {
  //       title: this.booktitle,
  //       author: this.bookauthor,
  //       yearofpublish: this.bookyearofpublish,
  //       publisher: this.bookpublisher,
  //       genre: this.bookgenre,
  //       pages: this.bookpages,
  //     };
  //     this.dialogRef.close(updatedBookDetails);
  //   }
  // }


  onSave(): void{
    this.dialogRef.close(this.data);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
  
}



