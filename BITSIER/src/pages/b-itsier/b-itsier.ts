import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../models/user';
import { UserProvider } from '../../providers/user/user';
import { NewsProvider } from '../../providers/news/news';

@Component({
  selector: 'page-b-itsier',
  templateUrl: 'b-itsier.html'
})
export class BITSIERPage {
private objectiveNews;
  constructor(public news: NewsProvider,public navCtrl: NavController) {
  }
ionViewDidLoad(){
  this.news.getObjectiveNews().then((data) => {
      console.log(data);
      this.objectiveNews = data;
      console.log(data);
    });
}
}
