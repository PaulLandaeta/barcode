import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../services/user.service';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private userService: UserService) {
  }

  ionViewDidLoad() {
   
  }

  createUser(){
    
  }

}
