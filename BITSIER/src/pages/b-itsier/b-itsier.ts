import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../models/user';
import { UserProvider } from '../../providers/user/user';
import { NewsProvider } from '../../providers/news/news';
import { Http, Headers} from '@angular/http';
@Component({
  selector: 'page-b-itsier',
  templateUrl: 'b-itsier.html'
})
export class BITSIERPage {
private objectiveNews;
  constructor(public http:Http,public news: NewsProvider,public navCtrl: NavController) {
  }
ionViewDidLoad(){
  let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('http://172.17.52.86:8500/testpost', JSON.stringify([1,2,3]), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });
  this.news.getObjectiveNews().then((data) => {
      console.log(data);
      this.objectiveNews = data;
      console.log(data);
    });
}
}
