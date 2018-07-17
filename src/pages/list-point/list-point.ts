import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';
import { PointPage } from '../point/point';

/**
 * Generated class for the ListPointPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-point',
  templateUrl: 'list-point.html',
})
export class ListPointPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPointPage');
  }

  goToPoint() {
    this.navCtrl.push(PointPage);
  }
}
