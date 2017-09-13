import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';
/*
  Generated class for the LoaderProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LoaderProvider {
loading;
  constructor(private loadingCtrl:LoadingController,public http: Http) {
    console.log('Hello LoaderProvider Provider');
  }
  presentLoadingCrescent() {
    this.loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Loading',
    });

    this.loading.present();
  }
  removeLoadingCrescent(){
    this.loading.dismiss();
  }
  }
