webpackJsonp([0],{

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateItineraryPageModule", function() { return CreateItineraryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_itinerary__ = __webpack_require__(753);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateItineraryPageModule = /** @class */ (function () {
    function CreateItineraryPageModule() {
    }
    CreateItineraryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_itinerary__["a" /* CreateItineraryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_itinerary__["a" /* CreateItineraryPage */]),
            ],
        })
    ], CreateItineraryPageModule);
    return CreateItineraryPageModule;
}());

//# sourceMappingURL=create-itinerary.module.js.map

/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateItineraryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__(392);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/// <reference path="<relevant path>/node_modules/@types/googlemaps/index.d.ts" />
/**
 * Generated class for the CreateItineraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateItineraryPage = /** @class */ (function () {
    function CreateItineraryPage(navCtrl, platform, viewCtrl, maps, ngZone, http) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.maps = maps;
        this.ngZone = ngZone;
        this.http = http;
        this.today = new Date().toJSON().split('T')[0]; //for datepicker 
        this.date = new Date().toJSON().substr(8, 2) + "-" + new Date().toJSON().substr(5, 2) + "-" + new Date().toJSON().substr(0, 4); //for database
    }
    CreateItineraryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateItineraryPage');
    };
    CreateItineraryPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CreateItineraryPage.prototype.createGroup = function () {
        console.log("Edited date: " + this.date);
    };
    CreateItineraryPage.prototype.ngOnInit = function () {
        var _this = this;
        var options = {
            types: ['(cities)']
        };
        this.maps.load()
            .then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.search.nativeElement, options);
            autocomplete.addListener("place_changed", function () {
                // this.ngZone.run( () => {
                //   let place: google.maps.places.PlaceResult = autocomplete.getPlace();
                //   var x = String(place.adr_address);
                //   console.log(x);
                //   if (place.geometry === undefined || place.geometry === null ) {
                //     return;
                //   }
                // } )
                var place = autocomplete.getPlace();
                var address = place.address_components;
                console.log(address);
                for (var i = 0; i < address.length; i++) {
                    if (address[0]) {
                        console.log("Destination: " + (address[0].long_name).toString());
                    }
                }
                if (place.geometry === undefined || place.geometry === null) {
                    return;
                }
            });
        });
        // this.http.get("https://jsonplaceholder.typicode.com/users?id=1")
        // .subscribe( (data: any[]) => {
        // this.name = data[0].name;
        // console.log(this.name);
        // })
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('search'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CreateItineraryPage.prototype, "search", void 0);
    CreateItineraryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-itinerary',template:/*ion-inline-start:"D:\backup\Documents\project\src\pages\create-itinerary\create-itinerary.html"*/'<!--\n  Generated template for the CreateItineraryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- Generated template for the NewGroupComponent component -->\n<ion-header>\n\n  <ion-toolbar color="dark">\n    <ion-title>\n      Create new group\n    </ion-title>\n      <ion-buttons end>\n          <button ion-button (click)="dismiss()">\n              <span ion-text color="primary" showWhen="ios">Cancel</span>\n              <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n          </button>\n      </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-grid text-center>\n\n    <ion-row>\n      <ion-col>\n          <ion-label stacked class="labelNew" style="font-size:18px; padding-bottom: 10px;">Group Name</ion-label>\n          <ion-input type="text" placeholder="Enter group name" text-center></ion-input>\n      </ion-col>  \n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n          <ion-label stacked class="labelNew" style="font-size:18px; padding-bottom: 18.5px;">City/Country</ion-label>\n          <input type="text" placeholder="Enter group destination" text-center autocorrect="off" autocapitalize="off" spellcheck="off" #search>\n      </ion-col>  \n   </ion-row>\n\n   <ion-row style="padding-bottom: 50px; padding-top: 11px;">\n     <ion-col>\n        <ion-label stacked class="labelNew" style="font-size:18px;" >Start Date</ion-label>\n        <ion-datetime displayFormat="DD/MM/YYYY" [min]="today" max="2019" [(ngModel)]="date_trip"></ion-datetime>\n     </ion-col>\n   </ion-row>\n\n   <ion-row style="padding-top: 100px;">\n     <ion-col>\n        <span ion-text tappable (click)="createGroup()" color="primary"><strong>Create</strong></span>\n     </ion-col>\n   </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\backup\Documents\project\src\pages\create-itinerary\create-itinerary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], CreateItineraryPage);
    return CreateItineraryPage;
}());

//# sourceMappingURL=create-itinerary.js.map

/***/ })

});
//# sourceMappingURL=0.js.map