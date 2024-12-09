import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookService } from 'src/app/Books/service/book.service';
import { AddComponentComponent } from 'src/app/Books/popup/add-component/add-component.component';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { BookDialogComponent } from '../book-dialog/book-dialog.component';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent {

  // searchText: string = '';
  // @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();

  searchText: string = '';

  @Output() searchEvent = new EventEmitter<string>();

  constructor(public dialog: MatDialog, private bookService: BookService) {}

  addDialog() {
    const dialogRef = this.dialog.open(AddComponentComponent, {
      width: '400px',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '800ms',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.bookService.addbook(result);
      }
    });
  }

  onSearch(): void {
    this.searchEvent.emit(this.searchText.trim());
  }
  
}


