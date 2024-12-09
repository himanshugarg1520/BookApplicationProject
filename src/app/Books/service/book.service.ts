import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// export class BookService {

//   constructor() { }

//   private bookaddsource = new Subject<any>();

//   bookadded = this.bookaddsource.asObservable();

//   addbook(book:any):void{
//     this.bookaddsource.next(book);
//   }

//   updateBook(book: any): Observable<any> {
//     return of({ success: true });  
//   }

//   deleteBook(index: number): Observable<any> {
//     return of({ success: true });  
//   }




export class BookService {
  private bookListSource = new BehaviorSubject<any[]>([

    { title: 'The DeadPool', author: 'George Orwell', yearofpublish: 2017, publisher: 'Romen Rich', genre: 'Fiction', pages: 60 ,description: 'A thrilling journey into the mind of DeadPool.' },
    { title: 'Kill Mockingbird', author: 'Harper Lee Akbar', yearofpublish: 2012, publisher: 'Divendock', genre: 'Adventure', pages: 100,description: 'A thrilling journey into the mind of Kill Mockingbird.'  },
    { title: 'Great Gatsby Navicom', author: 'Scott Fitzgerald', yearofpublish: 2014, publisher: 'Johnrick', genre: 'Fiction', pages: 80,description: 'A thrilling journey into the mind of Great Gatsby Navicom.'  },
    { title: 'The Rich and Poor Dad', author: 'Frozamith', yearofpublish: 2011, publisher: 'Little Brown', genre: 'Entrepreneurship', pages: 160,description: 'A thrilling journey into the mind of The Rich and Poor Dad.'  },
    { title: 'Subconscious Unconscious Mind', author: 'Orwell Geoden', yearofpublish: 2015, publisher: 'RichRoman', genre: 'Learning', pages: 120,description: 'A thrilling journey into the mind of Subconscious Unconscious Mind.'  },
    { title: 'The Wild Men in World', author: 'Zemsobleib', yearofpublish: 2014, publisher: 'Sobliebjoy', genre: 'Adventure', pages: 100,description: 'A thrilling journey into the mind of The Wild Men in World.'  },
    { title: 'The Old Men', author: 'Neomen', yearofpublish: 2017, publisher: 'WilliamSheikh', genre: 'Fiction', pages: 110,description: 'A thrilling journey into the mind of Great Gatsby Navicom.'  },
    { title: 'Great Gatsby Navicom', author: 'Scott Fitzgerald' ,yearofpublish: 2014, publisher: 'Johnrick',genre: 'Fiction', pages: 80, description: 'A thrilling journey into the mind of Great Gatsby Navicom.' },
    { title: 'The Rich and Poor Dad', author: 'Frozamith', yearofpublish: 2011,publisher: 'Little Brown',genre: 'Enterpreneurship', pages: 160, description: 'A thrilling journey into the mind of The Rich and Poor Dad.' },
    { title: 'Subconsious UnSubcontious Mind', author: 'Orwell Geoden', yearofpublish: 2015, publisher: 'RichRoman', genre:'Learning', pages: 120, description: 'A thrilling journey into the mind of Subconsious UnSubcontious Mind.' },

  ]);

  bookList$ = this.bookListSource.asObservable();

  constructor() {}

  addbook(book: any): void {
    const currentBooks = this.bookListSource.value;
    this.bookListSource.next([book, ...currentBooks]);
  }

  updateBook(updatedBook: any, index: number): Observable<any> {
    const currentBooks = this.bookListSource.value;
    currentBooks[index] = updatedBook;
    this.bookListSource.next(currentBooks);
    return of({ success: true });
  }

  deleteBook(index: number): Observable<any> {
    const currentBooks = this.bookListSource.value;
    currentBooks.splice(index, 1);
    this.bookListSource.next(currentBooks);
    return of({ success: true });
  }

  getBookDetails(title: string): Observable<any> {
    return this.bookList$.pipe(
      map((books) => books.find((book) => book.title === title))
    );
  }

  
}












  //   private bookListSource = new BehaviorSubject<any[]>([
  //     { title: 'The DeadPool', author: 'George Orwell', yearofpublish: 2017, publisher: 'Romen Rich', genre: 'Fiction', pages: 60 },
  //     { title: 'Kill Mockingbird', author: 'Harper Lee Akbar', yearofpublish: 2012, publisher: 'Divendock', genre: 'Adventure', pages: 100 },
  //     { title: 'Great Gatsby Navicom', author: 'Scott Fitzgerald', yearofpublish: 2014, publisher: 'Johnrick', genre: 'Fiction', pages: 80 },
  //     { title: 'The Rich and Poor Dad', author: 'Frozamith', yearofpublish: 2011, publisher: 'Little Brown', genre: 'Entrepreneurship', pages: 160 },
  //     { title: 'Subconscious Unconscious Mind', author: 'Orwell Geoden', yearofpublish: 2015, publisher: 'RichRoman', genre: 'Learning', pages: 120 },
  //     { title: 'The Wild Men in World', author: 'Zemsobleib', yearofpublish: 2014, publisher: 'Sobliebjoy', genre: 'Adventure', pages: 100 },
  //     { title: 'The Old Men', author: 'Neomen', yearofpublish: 2017, publisher: 'WilliamSheikh', genre: 'Fiction', pages: 110 },
  //     { title: 'Great Gatsby Navicom', author: 'Scott Fitzgerald' ,yearofpublish: 2014, publisher: 'Johnrick', genre: 'Fiction', pages: 80},
  //     { title: 'The Rich and Poor Dad', author: 'Frozamith', yearofpublish: 2011, publisher: 'Little Brown', genre: 'Entrepreneurship', pages: 160},
  //     { title: 'Subconscious Unconscious Mind', author: 'Orwell Geoden', yearofpublish: 2015, publisher: 'RichRoman', genre: 'Learning', pages: 120},
  //   ]);
  
  //   bookList$ = this.bookListSource.asObservable();
  
  //   constructor() {}
  
  //   addbook(book: any): void {
  //     const currentBooks = this.bookListSource.value;
  //     this.bookListSource.next([book, ...currentBooks]);
  //   }
  
  //   updateBook(updatedBook: any, index: number): Observable<any> {
  //     const currentBooks = this.bookListSource.value;
  //     currentBooks[index] = updatedBook;
  //     this.bookListSource.next(currentBooks);
  //     return of({ success: true });
  //   }
  
  //   deleteBook(index: number): Observable<any> {
  //     const currentBooks = this.bookListSource.value;
  //     currentBooks.splice(index, 1);
  //     this.bookListSource.next(currentBooks);
  //     return of({ success: true });
  //   }
  
  //   getBookDetails(title: string): Observable<any> {
  //     return this.bookList$.pipe(
  //       map((books) => books.find((book) => book.title === title))
  //     );
  //   }
  // }



