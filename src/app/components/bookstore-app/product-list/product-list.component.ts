import { Component, OnInit } from '@angular/core';

import { ProductListService } from './product-list.service';
import { Book } from './model/book.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public books: Book[] = [];

  constructor(private bookServ: ProductListService) { }

  ngOnInit(): void {
    // this.bookServ.getBook().subscribe((data: any)=>{
    //   this.books = data;
    //   console.log(this.books);
    // });

    this.books = this.bookServ.getBook();
  }

}
