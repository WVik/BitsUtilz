import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BITSIERPage } from '../pages/b-itsier/b-itsier';
import { BITSIER2Page } from '../pages/b-itsier2/b-itsier2';
import { SearchItemsPage } from '../pages/search-items/search-items';
import { FeedbackPage } from '../pages/feedback/feedback';
import { PagePage } from '../pages/page/page';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BITSIERPage,
    BITSIER2Page,
    SearchItemsPage,
    FeedbackPage,
    PagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BITSIERPage,
    BITSIER2Page,
    SearchItemsPage,
    FeedbackPage,
    PagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}