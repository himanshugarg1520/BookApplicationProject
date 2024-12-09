import { Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';

@Pipe({
  name: 'common'
})
export class CommonPipe implements PipeTransform {

  constructor(private router: Router) {}

  transform(bookTitle: string): string {
    const sanitizedTitle = encodeURIComponent(bookTitle.trim()); 
    const route = `/book?title=${sanitizedTitle}`;
    return route;
  }

  navigateToBook(bookTitle: string): void {
    const route = this.transform(bookTitle);
    this.router.navigateByUrl(route);
  }

}
