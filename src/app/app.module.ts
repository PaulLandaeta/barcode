import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { CheckListPage } from '../pages/check-list/check-list';
import { ListPointPage } from '../pages/list-point/list-point';

import { MODULES, PROVIDERS } from './app.imports';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    MODULES,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    PROVIDERS,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
