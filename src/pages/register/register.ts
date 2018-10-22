import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { userInfo } from '../../model/user-info';
import { Auth } from '../../service/auth';
import { HomePage } from '../home/home';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as userInfo;
  loader: any;
  registerForm: FormGroup;

  constructor(public formBuilder: FormBuilder, private loading: LoadingController, 
              public checking:Auth, private toast:ToastController, 
              public navCtrl: NavController, public navParams: NavParams) 
              {
                this.registerForm = formBuilder.group({
                  'firstname': ['', Validators.compose([Validators.required])],
                  'lastname': ['', Validators.compose([Validators.required])],
                  'email': ['', Validators.compose([Validators.required])],
                  'password': ['', Validators.compose([Validators.required])]
                });
              }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  addAcc(user: userInfo) {

    this.presentLoadingDefault();

    this.checking.register(user)
    .then( isSuccess => {

      if(isSuccess) {
        let toast = this.toast.create({
          message: 'Successfully registered. Please verify your email address to sign in',
          duration: 2000,
          position: "bottom",
          cssClass: "toast-suc-css"
        });
        toast.present();
        this.navCtrl.push(HomePage);
      }
      else {
        let toast = this.toast.create({
          message:  this.checking.printErrorMessage(),
          duration: 2000,
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


}
