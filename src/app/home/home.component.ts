import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book';
import { User } from '../user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: Book[] | undefined;
  user:User = new User();
  constructor(private bookService: BookService,
    private router: Router) { }

  ngOnInit(): void {
    //console.log(JSON.parse(sessionStorage.getItem("userDetails")).emailId);
     this.user =JSON.parse(sessionStorage.getItem('userDetails')||'{}') as User;
     //let uId = parseInt(uid);
     console.log(this.user.emailId);
    this.getBooks(this.user.userId);

 
  }

  private getBooks(userId:number|any) {
    
    this.bookService.getBookList(userId).subscribe(data => {
      this.books = data;

      for(let i=0;i<4;i++){
        const ele=data[i];
        console.log(ele);
      }

    });
  }

  updateBook(bookId: number|undefined) {
    this.router.navigate(['/updatebook',bookId]);
  }

  logoutFunction(){

    this.router.navigate(['/login']);

  }

  addBookBtnClick(){
    this.router.navigate(['/addbook']);
  }

  profileBtnClick(){
    this.router.navigate(['/profile']);
  }
}
