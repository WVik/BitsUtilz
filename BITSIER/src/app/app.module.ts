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
import { AddItemPage} from '../pages/add-item/add-item';
import { Http,Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ItemsProvider } from '../providers/items/items';
import { NewsProvider } from '../providers/news/news';
import { UserProvider } from '../providers/user/user';
import {FollowListPage} from '../pages/follow-list/follow-list';
import { LoaderProvider } from '../providers/loader/loader';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BITSIERPage,
    BITSIER2Page,
    SearchItemsPage,
    AddItemPage,
    FeedbackPage,
    FollowListPage,
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
    AddItemPage,
    FollowListPage,
    PagePage
  ],
  providers: [
    StatusBar,
    GooglePlus,
    FileTransfer,
    FileTransferObject,
    FileTransferObject,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ItemsProvider,
    NewsProvider,
    UserProvider,
    LoaderProvider
  ]
})
export class AppModule {}
