import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../book/book';

@Injectable()
export class BookService {

  constructor(private httpClient: HttpClient, private book: Book) { this.init(); }

  init(){}

  saveBook(book:Book): void{
    this.httpClient.post('/api/book', book )
     .subscribe(res => {console.log(res);
     },
   err => {
     console.log(err);
   });
  }
}
