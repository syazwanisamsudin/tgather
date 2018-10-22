import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { ItineraryPage } from '../itinerary/itinerary';
import { PeerTrackingPage } from '../peer-tracking/peer-tracking';
import { ChecklistPage } from '../checklist/checklist';
import { SplitBillsPage } from '../split-bills/split-bills';
import { GroupInformationPage } from '../group-information/group-information';

/**
 * Generated class for the NavigationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-navigation',
  templateUrl: 'navigation.html',
})
export class NavigationPage {

  para:any;
  list = 
  [
    {
      icon: "md-globe",
      color: "#0FDDFF",
      title: "Itinerary",
    },

    {
      icon: "md-locate",
      color: "#F62197",
      title: "Peer Tracking",
    },

    {
      icon: "md-checkbox",
      color: "#FFA40F",
      title: "Checklist",
    },

    {
      icon: "logo-usd",
      color: "#0FFF26",
      title: "Split Bills",
    },

    {
      icon: "md-information-circle",
      color: "#CC32FF",
      title: "Group Information",
    }
    
  ]

  constructor (
                public navCtrl: NavController, 
                public navParams: NavParams,
                public platform: Platform 
              )
                {
                  this.para = this.navParams.get('x');
                }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavigationPage');
  }

  select(x) {
    if(x === "Itinerary") {
      this.navCtrl.push(ItineraryPage);
    }
    else if(x === "Peer Tracking") {
      this.navCtrl.push(PeerTrackingPage);
    }
    else if(x === "Checklist") {
      this.navCtrl.push(ChecklistPage);
    } 
    else if(x === "Split Bills") {
      this.navCtrl.push(SplitBillsPage);
    }
    else if(x === "Group Information") {
      this.navCtrl.push(GroupInformationPage);
    }
  }
}
