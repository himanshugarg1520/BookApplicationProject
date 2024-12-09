import { Component, Input, Output,EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookDialogComponent } from '../book-dialog/book-dialog.component';
import { DeleteComponent } from '../delete/delete.component';
import { EditComponentComponent } from 'src/app/Books/popup/edit-component/edit-component.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatMenuTrigger } from '@angular/material/menu';
import { WarningPopUpComponent } from 'src/app/Books/utils/warning-pop-up/warning-pop-up.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() book: any; 
  @Input() index!: number;
  @Output() bookUpdated: EventEmitter<any> = new EventEmitter<any>();
  @Output() bookDeleted: EventEmitter<number> = new EventEmitter<number>(); 
  @Output() bookSelected = new EventEmitter<string>();

  constructor(private dialog: MatDialog,private router: Router, private snakbar: MatSnackBar) {}


  onEdit(): void {
    const dialogRef = this.dialog.open(EditComponentComponent, {
      width: '400px',
      data: {
        title: this.book.title,
        author: this.book.author,
        yearofpublish: this.book.yearofpublish,
        publisher: this.book.publisher,
        genre: this.book.genre,
        pages: this.book.pages
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.bookUpdated.emit(result);
      }
    });
  }

  onDelete(): void {
    const dialogRef = this.dialog.open(WarningPopUpComponent, {
      width: '350px',
      height: '210px',
      data: { bookName: this.book.title } 
    });

    dialogRef.afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.bookDeleted.emit(this.index);
        this.snakbar.open('Book deleted successfully', 'Close', { duration: 2000 });
      }
    });
  }

  
  onanotherbookdelete(): void{
    const dialogref = this.dialog.open(WarningPopUpComponent,{
      width: '400px',
      height: '300px',
      data: {bookname: this.book.title}
    })
    dialogref.afterClosed().subscribe(result=>{
      if(result){
        this.bookDeleted.emit(this.index);
        this.snakbar.open('Book Deleted','Close', {duration: 2000});
      }
    })
  }

  viewBookDetails(): void {
    this.router.navigate(['/book'], { queryParams: { title: this.book.title } });
  }

  navigateToDetails(title: string): void {
    this.router.navigate(['/book/details'], { queryParams: { title } });
  }
  
}
