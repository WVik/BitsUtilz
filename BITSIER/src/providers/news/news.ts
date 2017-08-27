import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {UserProvider} from '../user/user';
import {News} from '../../models/news';
/*
  Generated class for the NewsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class NewsProvider {

  constructor(public http: Http, public user:UserProvider) {
    console.log('Hello NewsProvider Provider');
  }
getClubNews(club:string){
  let list; //the list of news
return list;
}
getFollowedNews(){
  let favourites = this.user.getCurrentUserData('following');
  return favourites.list;
}
getObjectiveNews(){
  let list;
  return list;
}
getFilteredNews(parameter:string){
  let list;
  return list;
}
uploadNews(article:News){
  //post News
}
}
