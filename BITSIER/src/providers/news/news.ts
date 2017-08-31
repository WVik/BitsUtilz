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
private objectiveNews;
private test="{'a':'1'}";
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
  if (this.objectiveNews) {
       return Promise.resolve(this.objectiveNews);
     }

     return new Promise(resolve => {

       this.http.get('http://172.17.52.86:8500/news/012')
         .map(res => res.json())
         .subscribe(data => {
           this.objectiveNews = data;
           resolve(this.objectiveNews);
         });
     });
}
getFilteredNews(parameter:string){
  let list;
  return list;
}
uploadNews(article:News){
  //post News
}
}
