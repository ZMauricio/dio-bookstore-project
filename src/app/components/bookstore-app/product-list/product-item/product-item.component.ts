import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../model/book.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() livro: Book = new Book();

  constructor() { }

  ngOnInit(): void {
  }

}
