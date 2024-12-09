// import { Component } from '@angular/core';
// import { BookService } from 'src/app/Books/service/book.service';
// import { OnInit,ViewChild } from '@angular/core';
// import { Title } from '@angular/platform-browser';
// import { MatDialog } from '@angular/material/dialog';
// import { BookDialogComponent } from '../book-dialog/book-dialog.component';
// import { MatMenuTrigger } from '@angular/material/menu';
// import { DeleteComponent } from '../delete/delete.component';
// import { MatSnackBar } from '@angular/material/snack-bar';

// @Component({
//   selector: 'app-book-list',
//   templateUrl: './book-list.component.html',
//   styleUrls: ['./book-list.component.css']
// })

// export class BookListComponent  implements OnInit{
//   @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;

//   constructor(private bookservice: BookService, public dialog: MatDialog,private snakbar:MatSnackBar){}

//   books: {title: string,author: string, yearofpublish: number, publisher: string, genre: string, pages: number}[]=[

//     { title: 'The DeadPool', author: 'George Orwell' , yearofpublish: 2017, publisher: 'Romen Rich', genre: 'Fiction', pages:60},
//     { title: 'Kill Mockingbird', author: 'Harper Lee Akbar' ,yearofpublish: 2012, publisher: 'Divendock', genre:'Adventure', pages: 100},
//     { title: 'Great Gatsby Navicom', author: 'Scott Fitzgerald' ,yearofpublish: 2014, publisher: 'Johnrick',genre: 'Fiction', pages: 80},
//     { title: 'The Rich and Poor Dad', author: 'Frozamith', yearofpublish: 2011,publisher: 'Little Brown',genre: 'Enterpreneurship', pages: 160},
//     { title: 'Subconsious UnSubcontious Mind', author: 'Orwell Geoden', yearofpublish: 2015, publisher: 'RichRoman', genre:'Learning', pages: 120},
//     { title: 'The Wild Men in World', author: 'Zemsobleib', yearofpublish: 2014, publisher: 'Sobliebjoy', genre:'Adventure', pages: 100},
//     { title: 'The Old Men', author: 'Neomen', yearofpublish: 2017, publisher: 'WilliamSheikh', genre: 'Fiction', pages: 110},
//     { title: 'Subconsious  Mind', author: 'Orwell Geoden', yearofpublish: 2015, publisher: 'RichRoman', genre:'Learning', pages: 123},
//     { title: 'The Wild Men in World', author: 'Zemsobleib', yearofpublish: 2014, publisher: 'Sobliebjoy', genre:'Adventure', pages: 101},
//     { title: 'The Old Men', author: 'Neomen', yearofpublish: 2017, publisher: 'WilliamSheikh', genre: 'Fiction', pages: 110},

//   ];

//   ngOnInit(): void {

//     this.bookservice.bookadded.subscribe((book: {title: string, author: string, yearofpublish: number, publisher: string, genre: string, pages: number})=>{
//       this.books.push(book)
//     });
//   }


//   selectedBook: any;
//   selectedIndex!: number;




//   // addDialog(){
//   //   const dialogref = this.dialog.open(BookDialogComponent,{
//   //     width: '400px',
//   //     enterAnimationDuration: '1000ms',
//   //     exitAnimationDuration: '800ms',
//   //   });

//   //   dialogref.afterClosed().subscribe(result=>{
//   //     if(result){
//   //       this.bookservice.addbook(result);
//   //     }
//   //   })
//   // }


//   // to show book name on delete

//   // opendeleteDialog(bookname: string){
//   //   const dialogref = this.dialog.open(DeleteComponent,{
//   //     data: {bookname}
//   //   });

//   //   dialogref.afterClosed().subscribe(result=>{
//   //     if(result === 'confirm'){
//   //       this.deletebook(bookname);
//   //     }
//   //   })
//   // }


//   openMenu(event: Event, book:any, index:number):void{
//     event.stopPropagation();
//     this.selectedBook=book;
//     this.selectedIndex=index;
//     this.menuTrigger.openMenu();
//   }

//   editbook(book:{title:string, author: string, yearofpublish: number, publisher: string, genre:string, pages: number}, index:number):void{
//     const editconfref = this.dialog.open(BookDialogComponent,{
//       width: '400px',
//       enterAnimationDuration: '1000ms',
//       exitAnimationDuration: '1000ms',
//       data: {title: book.title, author: book.author, yearofpublish: book.yearofpublish, publisher: book.publisher, genre: book.genre, pages: book.pages}
//     });
//     editconfref.afterClosed().subscribe(result=>{
//       if(result){
//         this.books[index]=result;
//       }
//     })
//   }



//   deletebook(index:number):void{
//     const bookname = this.books[index].title
//     const confdialogref = this.dialog.open(DeleteComponent,{
//       width: '400px',
//       enterAnimationDuration: '1000ms',
//       exitAnimationDuration:'800ms',
//       data: {bookname},
//     });
//     confdialogref.afterClosed().subscribe(result=>{
//       if(result){
//         this.books.splice(index,1);   //to remove the book from the given list
//         this.snakbar.open('Book Deleted ','Close',{duration:2000});
//       }
//     })
//   }


//   searchText: string='';

//   get filterBooks(){
//     return this.books.filter(book =>
//       book.title.toLowerCase().includes(this.searchText.toLowerCase()) || 
//       book.author.toLowerCase().includes(this.searchText.toLowerCase()) || 
//       book.publisher.toLowerCase().includes(this.searchText.toLowerCase()) 
//     );
//   }


// }

