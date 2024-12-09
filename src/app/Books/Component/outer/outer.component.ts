import { Component } from '@angular/core';
import { BookService } from '../../service/book.service';
import { AddComponentComponent } from '../../popup/add-component/add-component.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-outer',
  templateUrl: './outer.component.html',
  styleUrls: ['./outer.component.css']
})


// export class OuterComponent {

//   books: Observable<any> = of([
//     { title: 'The DeadPool', author: 'George Orwell', yearofpublish: 2017, publisher: 'Romen Rich', genre: 'Fiction', pages: 60 },
//     { title: 'Kill Mockingbird', author: 'Harper Lee Akbar', yearofpublish: 2012, publisher: 'Divendock', genre: 'Adventure', pages: 100 },
//     { title: 'Great Gatsby Navicom', author: 'Scott Fitzgerald', yearofpublish: 2014, publisher: 'Johnrick', genre: 'Fiction', pages: 80 },
//     { title: 'The Rich and Poor Dad', author: 'Frozamith', yearofpublish: 2011, publisher: 'Little Brown', genre: 'Entrepreneurship', pages: 160 },
//     { title: 'Subconscious Unconscious Mind', author: 'Orwell Geoden', yearofpublish: 2015, publisher: 'RichRoman', genre: 'Learning', pages: 120 },
//     { title: 'The Wild Men in World', author: 'Zemsobleib', yearofpublish: 2014, publisher: 'Sobliebjoy', genre: 'Adventure', pages: 100 },
//     { title: 'The Old Men', author: 'Neomen', yearofpublish: 2017, publisher: 'WilliamSheikh', genre: 'Fiction', pages: 110 },
//     { title: 'Great Gatsby Navicom', author: 'Scott Fitzgerald' ,yearofpublish: 2014, publisher: 'Johnrick',genre: 'Fiction', pages: 80},
//     { title: 'The Rich and Poor Dad', author: 'Frozamith', yearofpublish: 2011,publisher: 'Little Brown',genre: 'Enterpreneurship', pages: 160},
//     { title: 'Subconsious UnSubcontious Mind', author: 'Orwell Geoden', yearofpublish: 2015, publisher: 'RichRoman', genre:'Learning', pages: 120},
//   ]);

//   constructor(private bookService: BookService, private route: ActivatedRoute) {
//     this.bookService.bookadded.subscribe((book: { title: string, author: string, yearofpublish: number, publisher: string, genre: string, pages: number }) => {
//       //this.books = [book, ...this.books]
//       //this.filteredBooks = [...this.books];
//     });
//   }

//   ngOnInit(): void {

//     this.route.queryParams.subscribe(params => {
//       const title = params['title'];
//       if (title) {
//         //this.filteredBooks = this.books.filter(book => book.title === title);
//       } else {
//         //this.filteredBooks = [...this.books];
//       }
//     });
//   }


//   onSearch(searchText: string) {
//     const searchLower = searchText.toLowerCase().trim();
//     // this.filteredBooks = this.books.filter(book =>
//     //   book.title.toLowerCase().includes(searchLower) ||
//     //   book.author.toLowerCase().includes(searchLower) ||
//     //   book.publisher.toLowerCase().includes(searchLower) 
//     // );
//   }
// }




  

export class OuterComponent implements OnInit {

  filteredBooks$: Observable<any[]>; 
  isDetailView: boolean = false; 

  constructor(private bookService: BookService, private route: ActivatedRoute) {
    this.filteredBooks$ = this.bookService.bookList$; 
  }


  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      const title = params['title'];
      this.isDetailView = !!title;

       if (title) {
        this.filteredBooks$ = this.bookService.bookList$.pipe(
          map(books => books.filter(book => book.title.toLowerCase().includes(title.toLowerCase())))
        );
      }
      else {
        this.filteredBooks$ = this.bookService.bookList$;
      }
    });
  }


  onSearch(searchText: string): void {
    const searchLower = searchText.toLowerCase().trim();
    this.filteredBooks$ = this.bookService.bookList$.pipe(
      map(books => books.filter(book =>
        book.title.toLowerCase().includes(searchLower) ||
        book.author.toLowerCase().includes(searchLower) 
      ))
    );
  }


  // filteredBooks$: Observable<any[]>;
  // selectedBook: string | null = null; // Track the selected book


  // constructor(private bookService: BookService, private route: ActivatedRoute) {
  //   this.filteredBooks$ = this.bookService.bookList$;
  // }

  // ngOnInit(): void {
  //   this.route.queryParams.subscribe(params => {
  //     const title = params['title'];
  //     if (title) {
  //       this.filteredBooks$ = this.bookService.bookList$.pipe(
  //         map(books => books.filter(book => book.title.toLowerCase().includes(title.toLowerCase())))
  //       );
  //     } else {
  //       this.filteredBooks$ = this.bookService.bookList$;
  //     }
  //   });
  // }

  // onSearch(searchText: string): void {
  //   const searchLower = searchText.toLowerCase().trim();
  //   this.filteredBooks$ = this.bookService.bookList$.pipe(
  //     map(books => books.filter(book =>
  //       book.title.toLowerCase().includes(searchLower) ||
  //       book.author.toLowerCase().includes(searchLower) 
  //     ))
  //   );
  // }

  // onBookSelected(bookTitle: string): void {
  //   this.selectedBook = bookTitle; // Update selected book
  // }


}





