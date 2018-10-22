import { Component } from '@angular/core';
import { MoreComponent } from '../../components/more/more';
import { IonicPage, NavController, NavParams, PopoverController, ModalController } from 'ionic-angular';
import { fetch } from '../../service/fetch-account';
import { userInfo } from '../../model/user-info';
import { NavigationPage } from '../navigation/navigation';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  user = {} as userInfo;
  parameter:any;
  item = [];
  // item = 
  // [
  //   {
  //     imagePath: "../../assets/imgs/minnie.jpg",
  //     title: "Wonderful Trip",
  //     sub: "40 Days Challenge",
  //     badge: 8
  //   },

  //   {
  //     imagePath: "../../assets/imgs/snow.jpg",
  //     title: "Icelandic Adventure",
  //     sub: "Snow scenery watching",
  //     badge: 13
  //   },

  //   {
  //     imagePath: "../../assets/imgs/steampunk.jpg",
  //     title: "Steampunk City",
  //     sub: "Discover another world",
  //     badge: null
  //   },

  //   {
  //     imagePath: "../../assets/imgs/snow.jpg",
  //     title: "Snow-Again Trip",
  //     sub: "White and snow and white and snow",
  //     badge: 5
  //   }
  // ];

  constructor (
                public navCtrl: NavController, 
                public pop: PopoverController,
                public navParams: NavParams,
                public fetching: fetch,
                public modalCtrl: ModalController
              ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  ngOnInit() {
    this.user = this.fetching.fetchAccount(); 
  }

  navigate(item) {
    this.parameter = item.title;
    this.navCtrl.push(NavigationPage, { 'x': this.parameter });
  }

  archive() {

  }

  delete() {

  }

  presentPopover(thisEvent) {
    let popover = this.pop.create(MoreComponent, {}, {cssClass:'custom-popover'});
    popover.present({
      ev: thisEvent
    });
  }

  filterItems(x) {
    
  }

  openModal() {
    let modal = this.modalCtrl.create('CreateItineraryPage');
    modal.present();
  }



}
