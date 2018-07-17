import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPointPage } from './list-point';

@NgModule({
  declarations: [
    ListPointPage,
  ],
  imports: [
    IonicPageModule.forChild(ListPointPage),
  ],
  exports: [
    ListPointPage
  ]
})
export class ListPointPageModule {}
