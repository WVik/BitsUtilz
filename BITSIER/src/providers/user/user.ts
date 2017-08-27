import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserProvider {
  private currentUser;
  constructor(public http: Http) {
    console.log('Hello UserProvider Provider');
  }
  setCurrentUser(User){
    this.currentUser = User;
  }
  getCurrentUserData(parameter:string){
    return this.currentUser[parameter];
  }
  appendUserData(parameter,data){
    this.currentUser[parameter].push(data);
  }
  deleteUserData(parameter,data){
    this.currentUser[parameter]=   this.currentUser[parameter].filter(item=> item!==data);
  }
  updateUserInfo(parameter,data){
    this.currentUser[parameter]=data;
  }

}
