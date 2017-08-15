import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FeedbackPage } from '../pages/feedback/feedback';
import { SearchItemsPage } from '../pages/search-items/search-items';
import { BITSIER2Page } from '../pages/b-itsier2/b-itsier2';
import { BITSIERPage } from '../pages/b-itsier/b-itsier';


import { HomePage } from '../pages/home/home';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToFeedback(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FeedbackPage);
  }goToSearchItems(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SearchItemsPage);
  }goToBITSIER2(params){
    if (!params) params = {};
    this.navCtrl.setRoot(BITSIER2Page);
  }goToBITSIER(params){
    if (!params) params = {};
    this.navCtrl.setRoot(BITSIERPage);
  }
}
