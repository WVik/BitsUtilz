import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item';
/**
 * Generated class for the AddItemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {
   public price={
     "min" : 1,
     "max" :10000
   };
   hasNoCategory = false;
  // public ratio;
  // public ratioUpper;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');
  }
  view(){
        // console.log(this.ratio);
    // console.log(this.ratioUpper);
  }
  changeMax(value){
    if(this.price.max>100000)
    this.price.max=100000;
    if(this.price.max<1)
    this.price.max=1;
    if(this.price.max<this.price.min&&this.price.max)
    this.price.min=this.price.max

  }
  changeMin(){
    if(this.price.min<1)
    this.price.min=1;
    if(this.price.min>100000)
    this.price.min=100000;
    if(this.price.min>this.price.max&&this.price.min)
    this.price.max=this.price.min
  }
}
