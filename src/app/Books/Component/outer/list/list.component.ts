

import { Component, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditComponentComponent } from 'src/app/Books/popup/edit-component/edit-component.component';
import { BookService } from 'src/app/Books/service/book.service';
import { WarningPopUpComponent } from 'src/app/Books/utils/warning-pop-up/warning-pop-up.component';
import { Observable } from 'rxjs';
import { coerceStringArray } from '@angular/cdk/coercion';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  // @Input() filteredBooks!: any[];

  // constructor(private dialog: MatDialog, private bookService: BookService) {}

  // onBookUpdated(updatedBook: any): void {
  //   // Handle book update logic
  //   const index = this.filteredBooks.findIndex(book => book.title === updatedBook.title); // Use a unique identifier
  //   if (index !== -1) {
  //     this.filteredBooks[index] = updatedBook; // Update the book in the list
  //     this.bookService.updateBook(updatedBook, index).subscribe(); // Call the service to update
  //   }
  // }

  // onBookDeleted(index: number): void {
  //   const book = this.filteredBooks[index];
  //   const dialogRef = this.dialog.open(WarningPopUpComponent, {
  //     data: { bookName: book.title } // Confirm deletion with book name
  //   });

  //   dialogRef.afterClosed().subscribe(confirmed => {
  //     if (confirmed) {
  //       this.filteredBooks.splice(index, 1); // Remove the book from the array
  //       this.bookService.deleteBook(index).subscribe(); // Call the service to delete
  //     }
  //   });
  // }





  
  @Input() filteredBooks: any[] = [];
  @Output() bookSelect = new EventEmitter<string>();


  constructor(private dialog: MatDialog, private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.bookService.bookList$.subscribe(books => {
      this.filteredBooks = books; 
    });
  }

  onBookUpdated(updatedBook: any): void {
    const index = this.filteredBooks.findIndex(book => book.title === updatedBook.title); 
    if (index !== -1) {
      this.bookService.updateBook(updatedBook, index).subscribe({
        next: () => {
          console.log('Book updated successfully in service');
        },
        error: err => console.error('Failed to update book:', err)
      });
    }
  }

  onBookDeleted(index: number): void {
    this.bookService.deleteBook(index).subscribe({
      next: () => {
        console.log('Book deleted successfully in service');
      },
      error: err => console.error('Failed to delete book: ', err)
    });
  }
  

  onSelectBook(bookTitle: string): void {
    this.router.navigate(['/book'], { queryParams: { title: bookTitle } });
  }

}