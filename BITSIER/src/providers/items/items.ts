import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import {UserProvider} from '../user/user';
import {LoaderProvider} from '../loader/loader';
/*
  Generated class for the ItemsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ItemsProvider {
image;
constructor(private loader:LoaderProvider,private user:UserProvider, private transfer: FileTransfer, public http: Http) {
    console.log('Hello ItemsProvider Provider');
  }


createNew(a,b,c,d,e){
  const fileTransfer: FileTransferObject = this.transfer.create();

     let options1: FileUploadOptions = {
        fileKey: 'image',
        fileName: this.user.getCurrentUserData("uid"),

        headers: {'itemName':a, 'itemCategory':b, 'itemRange':c, 'itemDescription':d, 'itemCondition':e}

     }
     this.loader.presentLoadingCrescent();
     var call = fileTransfer.upload(this.image, 'http://172.17.52.86:8500/item/upload', options1,true)
     .then((data) => {
       this.loader.removeLoadingCrescent();
       let x=data;
})}
}
