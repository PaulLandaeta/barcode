import { Component } from '@angular/core';
import {AlertController, NavController,  IonicPage} from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { CheckListPage } from '../check-list/check-list';
@IonicPage()
@Component({
  selector: 'page-point',
  templateUrl: 'point.html',
})
export class PointPage {
  public barcodeData;
  estateProperty = {
    name: '',
    description: `It’s a 2 bedroom, 2 bathroom laneway house that also has a spacious study off the upstairs landing.
                  Sporting modern finishes and some cute touches like wall niches and bamboo accents,
                  this laneway house is a great example of what can be built on most of Vancouver’s standard 33 x 122
                  foot lots.`,
    price: '',
    image: 'https://www.smallworks.ca/wp-content/uploads/exterior11.jpg',
    style: 'Modern Interior',
    size: '33\' Lot',
    features: [
      {
        icon: 'md-barcode',
        title: 'Escanear QR'
      }
    ]
  };

  constructor(public navCtrl: NavController,
    public barcodeScanner: BarcodeScanner,
    public alertCtrl: AlertController) { 

  }

  scan() {
    const options = {
      preferFrontCamera: false, // iOS and Android
      showFlipCameraButton: true, // iOS and Android
      showTorchButton: true, // iOS and Android
      torchOn: false, // Android, launch with the torch switched on (if available)
      prompt: 'Place a barcode inside the scan area', // Android
        // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
      resultDisplayDuration: 500,
      formats: 'QR_CODE,PDF_417', // default: all but PDF_417 and RSS_EXPANDED
        // Android only (portrait|landscape), default unset so it rotates with the device
      orientation: 'portrait',
      disableAnimations: true, // iOS
      disableSuccessBeep: false // iOS
    };

    this.barcodeScanner
            .scan(options)
            .then((data) => {
              this.barcodeData = data;
              const alert = this.alertCtrl.create({
                title: 'Scan Results',
                subTitle: data.text,
                buttons: [{
                  text:'OK',
                  handler: () => {
                    console.log("Agree clicked");
                    this.navCtrl.push(CheckListPage);}
                  }]
                });
              alert.present();
            })
            .catch((err) => {
              const alert = this.alertCtrl.create({
                title: 'Attention!',
                subTitle: err,
                buttons: [{
                  text:'Close',
                  handler: () => {
                    console.log("Agree clicked");
                    this.navCtrl.push(CheckListPage);
                  }
                }]
              });
              alert.present();
            });
  }

}
