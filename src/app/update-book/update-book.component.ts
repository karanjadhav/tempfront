import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  bookId: number | any;
  book: Book = new Book();
  constructor(private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.bookId = this.route.snapshot.params['bookId'];

    this.bookService.getBookByBookId(this.bookId).subscribe(data => {
      this.book = data;
      this.updateBook();
    }, error => console.log(error));
  }

  onSubmit(){
    this.updateBook();
  }

  updateBook(){

    this.bookService.updateBook(this.bookId,this.book).subscribe(data =>{
      this.goToBookList();
    },
    error => console.log(error));

  }

  goToBookList() {
    this.router.navigate(['/home']);
  }

}
