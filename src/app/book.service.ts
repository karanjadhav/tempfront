import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseURL = "http://project02-env.eba-k9ciitni.us-east-1.elasticbeanstalk.com/books"

  constructor(private httpClient: HttpClient) { }

  private getListURL = "http://project02-env.eba-k9ciitni.us-east-1.elasticbeanstalk.com/books1"
  getBookList(userId:number): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.getListURL}/${userId}`);
  }

  createBook(userId:number,book: Book): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/${userId}`, book);
  }

  
  getBookByBookId(bookId: number): Observable<Book> {
    return this.httpClient.get<Book>(`${this.baseURL}/${bookId}`);
  }
  updateBook(bookId:number,book:Book):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}`,book);
  }

  private getListByIdURL = "http://project02-env.eba-k9ciitni.us-east-1.elasticbeanstalk.com/books2"
  getBookListByUserId(userId:number): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.getListByIdURL}/${userId}`);
  }

  //Book Delete by Id
  deleteBook(bookId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${bookId}`);
  }
}
