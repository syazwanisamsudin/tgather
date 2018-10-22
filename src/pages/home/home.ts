import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { MainPage } from '../main/main';
import { userInfo } from '../../model/user-info';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Auth } from '../../service/auth';

import "../../assets/js/test";

//declare var sample: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user = {} as userInfo;
  loader: any;
  test: any;

  constructor(private alertCtrl: AlertController, public checking: Auth, 
              public loading:LoadingController, private toast:ToastController, 
              public navCtrl: NavController) { 
                //this.test = sample;
              }

  register() {
    this.navCtrl.push(RegisterPage)
  }

  signIn(user: userInfo) {
    
    this.presentLoadingDefault();
    this.checking.login(user.email, user.password)
    .then( (isSignedIn) => {
      
      if(isSignedIn) {

        let toast = this.toast.create({
          message: ' Successfully signed in! ',
          duration: 2000,
          position: "bottom",
          cssClass: "toast-suc-css"
        });
  
        toast.present();
        this.navCtrl.push(MainPage);

      }

      else {
        console.log("checking error", this.checking.printErrorMessage())
        let toast = this.toast.create({
          message: this.checking.printErrorMessage() ,
          duration: 3000,
          position: "bottom",
          cssClass: "toast-err-css"
        });
  
        toast.present();
      }

      this.loader.dismiss();

    })
    .catch (error => {
      let toast = this.toast.create({
        message: error ,
        duration: 3000,
        position: "bottom",
        cssClass: "toast-err-css"
      });

      toast.present();

      this.loader.dismiss();

    })

  }

  presentLoadingDefault() {

    this.loader = this.loading.create({
      spinner: 'hide',
      content: 
      `<div class="sk-cube-grid">
      <div class="sk-cube sk-cube1"></div>
      <div class="sk-cube sk-cube2"></div>
      <div class="sk-cube sk-cube3"></div>
      <div class="sk-cube sk-cube4"></div>
      <div class="sk-cube sk-cube5"></div>
      <div class="sk-cube sk-cube6"></div>
      <div class="sk-cube sk-cube7"></div>
      <div class="sk-cube sk-cube8"></div>
      <div class="sk-cube sk-cube9"></div>
      </div>`,
      cssClass: 'transparent'
    });
  
    this.loader.present();
  
  }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: "Reset password",
      subTitle: "Please enter your email address",
      inputs: [
        {
          name: 'email',
          type: 'email'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked')
          }
        },
        {
          text: 'Send',
          handler: data => {
            if(data) {
              this.forgot(data.email);
              console.log('From alert controller: ', data.email)
            }
          }
        }
      ]
    })

    alert.present();

  }

  forgot(email) {
    this.checking.forgot(email).then( isSent => {
      if(isSent) {
        let toast = this.toast.create({
          message: ' Reset password email successfully sent! ',
          duration: 2000,
          position: "bottom",
          cssClass: "toast-suc-css"
        });
  
        toast.present();
      }
      else {
        let toast = this.toast.create({
          message: this.checking.printErrorMessage(),
          duration: 2000,
          position: "bottom",
          cssClass: "toast-err-css"
        });
  
        toast.present();
      }
    })
  }

}
