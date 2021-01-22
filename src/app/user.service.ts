import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

 // private registerURL = "http://localhost:8080/api/v1/adduser";

  constructor(private httpClient:HttpClient) { }

  createUser(user: User):Observable<User>|any  {

    return this.httpClient.post("http://project02-env.eba-k9ciitni.us-east-1.elasticbeanstalk.com/adduser",user);

  }

  loginUser(user:User):Observable<User[]>{
    return this.httpClient.post<User[]>("http://project02-env.eba-k9ciitni.us-east-1.elasticbeanstalk.com/login",user);
  }

  forgetPassword(user:User):Observable<User>|any {
    return this.httpClient.post("http://project02-env.eba-k9ciitni.us-east-1.elasticbeanstalk.com/forgetpassword",user);
  }

  private changePassURL = "http://project02-env.eba-k9ciitni.us-east-1.elasticbeanstalk.com/changepassword";
  changePassword(userName:String|any, user:User): Observable<Object>{
    return this.httpClient.put(`${this.changePassURL}/${userName}`, user);
  }

  private getUserByNameURL = "http://project02-env.eba-k9ciitni.us-east-1.elasticbeanstalk.com/getUser";
  getUserByName(userName:String|undefined): Observable<User>{
    return this.httpClient.get<User>(`${this.getUserByNameURL}/${userName}`);
  }

  private getUserByEmailURL = "http://project02-env.eba-k9ciitni.us-east-1.elasticbeanstalk.com/getUserByEmail";
  getUserByEmailId(emailId:String|any): Observable<User>{
    return this.httpClient.get<User>(`${this.getUserByEmailURL}/${emailId}`);
  }






}
