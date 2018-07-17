import { Component } from '@angular/core';
import {AlertController, IonicPage,  NavController,  NavParams} from 'ionic-angular';
import { PointPage } from '../point/point';
import { ListPointPage } from '../list-point/list-point';

/**
 * Generated class for the CheckListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-check-list',
  templateUrl: 'check-list.html',
})
export class CheckListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckListPage');
  }

  finalizarMantenimiento(){
    const alert = this.alertCtrl.create({
      title: 'Mantenimiento Finalizado',
      subTitle: 'Usted acabo el Mantenimiento!',
      buttons: [{
        text:'OK',
        handler: () => {
          console.log("Agree clicked");
          this.navCtrl.setRoot(ListPointPage);
        }
      }]
    });
    alert.present();
  }

}
