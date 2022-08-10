import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Book } from './model/book.model';

@Injectable({
    providedIn: 'root'
})
export class ProductListService {
    private url: string = 'http://localhost:44382/api/bookstore';

    listBooks: Book[] = [
        {
            id: '0',
            name: 'teste',
            price: 24.50,
            quantity: 10,
            category: 'história',
            img: 'img-00'
        },
        {
            id: '1',
            name: 'teste',
            price: 24.50,
            quantity: 10,
            category: 'história',
            img: 'img-01'
        },
        {
            id: '2',
            name: 'teste',
            price: 24.50,
            quantity: 10,
            category: 'história',
            img: 'img-02'
        },
        {
            id: '3',
            name: 'teste',
            price: 24.50,
            quantity: 10,
            category: 'história',
            img: 'img-03'
        }
    ]

    httpOptions = {
        Headers: new HttpHeaders({'content-type': 'application/json'})
    };

    constructor(private httpClient: HttpClient) { }
    
    getBook() {
        // return this.httpClient.get(this.url);
        return this.listBooks;
    }
}