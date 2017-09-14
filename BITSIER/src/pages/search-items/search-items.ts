import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
@Component({
  selector: 'page-search-items',
  templateUrl: 'search-items.html'
})
export class SearchItemsPage {

  constructor(public navCtrl: NavController) {
  }
  addItem(){
    this.navCtrl.setRoot(AddItemPage);
  }
}
