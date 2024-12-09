import { Component } from '@angular/core';
import { BookService } from '../../service/book.service';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ItemComponent } from '../outer/item/item.component';
import { ListComponent } from '../outer/list/list.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent  implements OnInit{
  book: any;

  constructor(private route: ActivatedRoute, private bookService: BookService , private location: Location) {}

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {

      const title = params['title'];
      if (title) {
        this.bookService.getBookDetails(title).subscribe(book => {
          this.book = book;
        });
      }
    });
  }

  goback(): void{
    this.location.back()
  }
}
