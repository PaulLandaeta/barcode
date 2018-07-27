import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IonicPage, NavController } from 'ionic-angular';
import { PointPage } from '../point/point';
import { AuthService } from '../../core/auth.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  backgrounds = [
    'assets/imgs/background/background-1.jpg',
    'assets/imgs/background/background-2.jpg',
    'assets/imgs/background/background-3.jpg',
    'assets/imgs/background/background-4.jpg'
  ];
  public loginForm: any;

  constructor(public formBuilder: FormBuilder,
              private navCtrl:NavController,
            private auth: AuthService) {
    this.loginForm = formBuilder.group({
      email: ['test@gmail.com', Validators.required],
      password: ['123456',Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('Hello LoginBackgroundSlider Page');
  }

  openResetPassword() {
    console.log('Reset password clicked');
  }

  doLogin() {
    console.log(this.loginForm.value.email);
    if (!this.loginForm.valid) {
      console.log('Invalid or empty data',this.loginForm);
    } else {
      const userEmail = this.loginForm.value.email;
      const userPassword = this.loginForm.value.password;
      this.navCtrl.setRoot('ListPointPage');
      console.log('user data', userEmail, userPassword);
    }
  }

  login() {
      this.auth.emailLogin(this.loginForm.value['email'], this.loginForm.value['password'])
      .then(data => {
        var pageRoot = 'ListPointPage';
        if (true) {
          pageRoot = 'UserPage';
        }
        this.navCtrl.setRoot(pageRoot);
      })
      .catch(error => console.log(error));  
  }
}
