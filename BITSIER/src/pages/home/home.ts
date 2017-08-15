import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BITSIERPage } from '../b-itsier/b-itsier';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  goToBITSIER(params){
    if (!params) params = {};
    this.navCtrl.push(BITSIERPage);
  }
}
