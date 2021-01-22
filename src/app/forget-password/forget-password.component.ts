import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import{UserService} from '../user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  user:User = new User();
  constructor(private userService: UserService, private router:Router) { }

  ngOnInit(): void {
  }

  getPasswordViaGmail(){
    this.userService.forgetPassword(this.user).subscribe((data:any)=>{
      console.log(data);
      this.router.navigate(['/login']);
      //this.goToUserLogin();
    },
      (error: any)=>console.log(error));
  }

  goToUserLogin(){
    this.router.navigate(['/login']);
  }

  onSubmit(){
    console.log(this.user);
    this.getPasswordViaGmail();
  }

}
