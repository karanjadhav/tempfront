import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import{UserService} from '../user.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user:User = new User();
  mobileNoPattern = "^[0][1-9]\d{9}$|^[1-9]\d{9}$";
  emailIdPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  //emailIdPattern ="^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$";
  public fbFormGroup = this.fb.group({
    userName: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(4)]],
    emailId: ['', [Validators.required, Validators.pattern(this.emailIdPattern)]],
    mobileNo: ['', Validators.required,Validators.minLength(10),Validators.pattern(this.mobileNoPattern)],
    gender: ['', Validators.required],
    city: ['', Validators.required],
    pincode: ['', Validators.required],
  });
  constructor(private userService: UserService, private router:Router,private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  saveUser(){
    this.userService.createUser(this.user).subscribe((data:any)=>{
      console.log(data);
      this.goToUserLogin();
    },
      (error: any)=>console.log(error));
  }

  goToUserLogin(){
    this.router.navigate(['/login']);
  }

  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }

}
