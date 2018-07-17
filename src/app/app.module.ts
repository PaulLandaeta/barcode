import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { PointPage } from '../pages/point/point';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { CheckListPage } from '../pages/check-list/check-list';
import { ListPointPage } from '../pages/list-point/list-point';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    PointPage,
    CheckListPage,
    ListPointPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    PointPage,
    CheckListPage,
    ListPointPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
