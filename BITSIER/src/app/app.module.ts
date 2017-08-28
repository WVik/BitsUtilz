import { NgModule, ErrorHandler,NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BITSIERPage } from '../pages/b-itsier/b-itsier';
import { BITSIER2Page } from '../pages/b-itsier2/b-itsier2';
import { SearchItemsPage } from '../pages/search-items/search-items';
import { FeedbackPage } from '../pages/feedback/feedback';
import { PagePage } from '../pages/page/page';
import { GooglePlus } from '@ionic-native/google-plus';

import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ItemsProvider } from '../providers/items/items';
import { NewsProvider } from '../providers/news/news';
import { UserProvider } from '../providers/user/user';

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
    HttpModule,
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
    GooglePlus,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ItemsProvider,
    NewsProvider,
    UserProvider
  ]
})
export class AppModule {}
