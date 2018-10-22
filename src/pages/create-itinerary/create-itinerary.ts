import { Component, NgZone, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController,Platform, ViewController } from 'ionic-angular';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { MapsAPILoader } from '@agm/core';
import {} from 'google-maps';




/// <reference path="<relevant path>/node_modules/@types/googlemaps/index.d.ts" />

/**
 * Generated class for the CreateItineraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-itinerary',
  templateUrl: 'create-itinerary.html',
})
export class CreateItineraryPage implements OnInit {

  @ViewChild('search') public search: ElementRef;
  //name: string;
  places: any;
  date_trip: string;
  today = new Date().toJSON().split('T')[0]; //for datepicker 
  date = new Date().toJSON().substr(8, 2) + "-" + new Date().toJSON().substr(5,2) + "-" + new Date().toJSON().substr(0, 4); //for database

  constructor (
                public navCtrl: NavController, 
                public platform: Platform,
                public viewCtrl: ViewController,
                private maps: MapsAPILoader,
                private ngZone: NgZone,
                private http: HttpClient
              ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateItineraryPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  createGroup() {
    console.log("Edited date: " + this.date);
  }

  ngOnInit() {
    var options = {
      types: ['(cities)']     
     };
    this.maps.load()
    .then( () => {
      let autocomplete = new google.maps.places.Autocomplete(this.search.nativeElement, options);
          
      autocomplete.addListener("place_changed", () => {
        // this.ngZone.run( () => {
        //   let place: google.maps.places.PlaceResult = autocomplete.getPlace();
        //   var x = String(place.adr_address);
        //   console.log(x);
        //   if (place.geometry === undefined || place.geometry === null ) {
        //     return;
        //   }
        // } )
        let place: google.maps.places.PlaceResult = autocomplete.getPlace();        
        var address = place.address_components;
        console.log(address);
        for (var i =0; i < address.length; i++)
        {
          if(address[0])
          {        
            console.log("Destination: " + (address[0].long_name).toString());
          }
        }
        if(place.geometry === undefined || place.geometry === null) {
          return;
        }
      })
    })

    // this.http.get("https://jsonplaceholder.typicode.com/users?id=1")
    // .subscribe( (data: any[]) => {
    // this.name = data[0].name;
    // console.log(this.name);
    // })
    
   

  }


}

