webpackJsonp([9],{

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Auth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Auth = /** @class */ (function () {
    function Auth(auth, db) {
        this.auth = auth;
        this.db = db;
        this.message = null;
        this.user = {};
    }
    Auth.prototype.login = function (email, password) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.auth.auth.signInWithEmailAndPassword(email, password)
                .then(function (data) {
                if (_this.auth.auth.currentUser.emailVerified == true) {
                    setTimeout(function () {
                        resolve(true);
                    }, 2000);
                }
                else if (_this.auth.auth.currentUser.emailVerified == false) {
                    resolve(false);
                    _this.passErrorMessage("Please verify your email address");
                }
            })
                .catch(function (e) {
                _this.passErrorMessage(e);
                setTimeout(function () {
                    resolve(false);
                }, 2000);
            });
        });
    };
    Auth.prototype.printErrorMessage = function () {
        return this.message;
    };
    Auth.prototype.passErrorMessage = function (message) {
        this.message = message;
    };
    Auth.prototype.register = function (user) {
        var _this = this;
        this.user = user;
        return new Promise(function (resolve) {
            _this.auth.auth.createUserWithEmailAndPassword(_this.user.email, _this.user.password)
                .then(function (data) {
                _this.auth.auth.currentUser.sendEmailVerification()
                    .then(function (data) {
                    setTimeout(function () {
                        resolve(true);
                    }, 2000);
                })
                    .catch(function (e) {
                    resolve(false);
                    _this.passErrorMessage(e);
                });
                _this.user.userID = data.user.uid;
                console.log('user uid is: ', _this.user.userID);
                _this.db.database.ref("users/" + _this.user.userID).set({
                    uid: _this.user.userID,
                    firstname: _this.user.firstname,
                    lastname: _this.user.lastname,
                    email: _this.user.email
                });
            })
                .catch(function (e) {
                _this.passErrorMessage(e);
                setTimeout(function () {
                    resolve(false);
                }, 2000);
            });
        });
    };
    Auth.prototype.forgot = function (email) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.auth.auth.sendPasswordResetEmail(email)
                .then(function (data) {
                setTimeout(function () {
                    resolve(true);
                }, 2000);
            })
                .catch(function (e) {
                setTimeout(function () {
                    resolve(false);
                }, 2000);
                _this.passErrorMessage(e);
            });
        });
    };
    Auth = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], Auth);
    return Auth;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_main__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_auth__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_js_test__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_js_test___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_js_test__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//declare var sample: any;
var HomePage = /** @class */ (function () {
    function HomePage(alertCtrl, checking, loading, toast, navCtrl) {
        this.alertCtrl = alertCtrl;
        this.checking = checking;
        this.loading = loading;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.user = {};
        //this.test = sample;
    }
    HomePage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    HomePage.prototype.signIn = function (user) {
        var _this = this;
        this.presentLoadingDefault();
        this.checking.login(user.email, user.password)
            .then(function (isSignedIn) {
            if (isSignedIn) {
                var toast = _this.toast.create({
                    message: ' Successfully signed in! ',
                    duration: 2000,
                    position: "bottom",
                    cssClass: "toast-suc-css"
                });
                toast.present();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__main_main__["a" /* MainPage */]);
            }
            else {
                console.log("checking error", _this.checking.printErrorMessage());
                var toast = _this.toast.create({
                    message: _this.checking.printErrorMessage(),
                    duration: 3000,
                    position: "bottom",
                    cssClass: "toast-err-css"
                });
                toast.present();
            }
            _this.loader.dismiss();
        })
            .catch(function (error) {
            var toast = _this.toast.create({
                message: error,
                duration: 3000,
                position: "bottom",
                cssClass: "toast-err-css"
            });
            toast.present();
            _this.loader.dismiss();
        });
    };
    HomePage.prototype.presentLoadingDefault = function () {
        this.loader = this.loading.create({
            spinner: 'hide',
            content: "<div class=\"sk-cube-grid\">\n      <div class=\"sk-cube sk-cube1\"></div>\n      <div class=\"sk-cube sk-cube2\"></div>\n      <div class=\"sk-cube sk-cube3\"></div>\n      <div class=\"sk-cube sk-cube4\"></div>\n      <div class=\"sk-cube sk-cube5\"></div>\n      <div class=\"sk-cube sk-cube6\"></div>\n      <div class=\"sk-cube sk-cube7\"></div>\n      <div class=\"sk-cube sk-cube8\"></div>\n      <div class=\"sk-cube sk-cube9\"></div>\n      </div>",
            cssClass: 'transparent'
        });
        this.loader.present();
    };
    HomePage.prototype.presentPrompt = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        if (data) {
                            _this.forgot(data.email);
                            console.log('From alert controller: ', data.email);
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.forgot = function (email) {
        var _this = this;
        this.checking.forgot(email).then(function (isSent) {
            if (isSent) {
                var toast = _this.toast.create({
                    message: ' Reset password email successfully sent! ',
                    duration: 2000,
                    position: "bottom",
                    cssClass: "toast-suc-css"
                });
                toast.present();
            }
            else {
                var toast = _this.toast.create({
                    message: _this.checking.printErrorMessage(),
                    duration: 2000,
                    position: "bottom",
                    cssClass: "toast-err-css"
                });
                toast.present();
            }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\backup\Documents\project\src\pages\home\home.html"*/'<ion-header>\n  <!-- <ion-navbar>\n  <ion-title>\n  Ionic Blank\n  </ion-title>\n  </ion-navbar> -->\n  </ion-header>\n  \n  <ion-content class="bg-color" padding>\n  \n    <ion-grid text-center>\n      <ion-row>\n        <ion-col>\n          <div class="title-container">\n            <h1 class="basic first animated slideInDown slow">TGather</h1>\n          </div>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col width-15>\n          <ion-item class="first animated slideInLeft slow">\n            <ion-label>\n              <ion-icon name="ios-mail"></ion-icon>\n            </ion-label>\n            <ion-input type="email" placeholder="Email" [(ngModel)]="user.email"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col width-15>\n          <ion-item class="first animated slideInLeft slow">\n            <ion-label>\n              <ion-icon name="ios-lock"></ion-icon>\n            </ion-label>\n            <ion-input type="password" placeholder="Password" [(ngModel)]="user.password"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row style="padding-top: 3.5px;">\n        <ion-col>\n          <button ion-button full icon-start class="first btnSignIn animated slideInLeft slow" (click)="signIn(user)"><ion-icon name="ios-log-in"></ion-icon>\n          SIGN IN\n          </button>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col>\n          <button ion-button full icon-start class="first btnSignUp animated slideInLeft slow" (click)="register()"><ion-icon name="ios-create-outline"></ion-icon>\n          SIGN UP\n          </button>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col class="first animated slideInLeft slow">\n          <span ion-text tappable (click)="presentPrompt()">Forgot Password? <strong>Click Here</strong></span>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col>\n          <h3>{{test}}</h3>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n            <p text-center style="bottom: 0; padding-top: 30px;" class="animated slideInRight slow">© TGather 2018</p>\n        </ion-col>\n      </ion-row>\n    \n    </ion-grid>  \n            \n  </ion-content>\n\n'/*ion-inline-end:"D:\backup\Documents\project\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__service_auth__["a" /* Auth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChecklistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChecklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChecklistPage = /** @class */ (function () {
    function ChecklistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChecklistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChecklistPage');
    };
    ChecklistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checklist',template:/*ion-inline-start:"D:\backup\Documents\project\src\pages\checklist\checklist.html"*/'<!--\n  Generated template for the ChecklistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Checklist</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\backup\Documents\project\src\pages\checklist\checklist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ChecklistPage);
    return ChecklistPage;
}());

//# sourceMappingURL=checklist.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupInformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GroupInformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GroupInformationPage = /** @class */ (function () {
    function GroupInformationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GroupInformationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GroupInformationPage');
    };
    GroupInformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-group-information',template:/*ion-inline-start:"D:\backup\Documents\project\src\pages\group-information\group-information.html"*/'<!--\n  Generated template for the GroupInformationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Group Information</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\backup\Documents\project\src\pages\group-information\group-information.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], GroupInformationPage);
    return GroupInformationPage;
}());

//# sourceMappingURL=group-information.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItineraryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ItineraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ItineraryPage = /** @class */ (function () {
    function ItineraryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ItineraryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ItineraryPage');
    };
    ItineraryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-itinerary',template:/*ion-inline-start:"D:\backup\Documents\project\src\pages\itinerary\itinerary.html"*/'<!--\n  Generated template for the ItineraryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Itinerary</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\backup\Documents\project\src\pages\itinerary\itinerary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ItineraryPage);
    return ItineraryPage;
}());

//# sourceMappingURL=itinerary.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_more_more__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_fetch_account__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigation_navigation__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MainPage = /** @class */ (function () {
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
    function MainPage(navCtrl, pop, navParams, fetching, modalCtrl) {
        this.navCtrl = navCtrl;
        this.pop = pop;
        this.navParams = navParams;
        this.fetching = fetching;
        this.modalCtrl = modalCtrl;
        this.user = {};
        this.item = [];
    }
    MainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainPage');
    };
    MainPage.prototype.ngOnInit = function () {
        this.user = this.fetching.fetchAccount();
    };
    MainPage.prototype.navigate = function (item) {
        this.parameter = item.title;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__navigation_navigation__["a" /* NavigationPage */], { 'x': this.parameter });
    };
    MainPage.prototype.archive = function () {
    };
    MainPage.prototype.delete = function () {
    };
    MainPage.prototype.presentPopover = function (thisEvent) {
        var popover = this.pop.create(__WEBPACK_IMPORTED_MODULE_1__components_more_more__["a" /* MoreComponent */], {}, { cssClass: 'custom-popover' });
        popover.present({
            ev: thisEvent
        });
    };
    MainPage.prototype.filterItems = function (x) {
    };
    MainPage.prototype.openModal = function () {
        var modal = this.modalCtrl.create('CreateItineraryPage');
        modal.present();
    };
    MainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main',template:/*ion-inline-start:"D:\backup\Documents\project\src\pages\main\main.html"*/'<!--\n  Generated template for the MainPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n\n  <ion-navbar hideBackButton color="dark">\n      <ion-title class="navFont">TGather</ion-title>\n      <ion-buttons end (click)="presentPopover($event)">\n          <button ion-button icon-only>\n            <ion-icon name="more"></ion-icon>\n          </button>\n      </ion-buttons>\n  \n  </ion-navbar>\n\n\n  <ion-toolbar> \n    <ion-searchbar placeholder="Search group travel ..." showCancelButton (ionInput)="filterItems($event)"></ion-searchbar>\n  </ion-toolbar>\n\n\n</ion-header>\n\n\n<ion-content>\n  <!-- <div class="example">\n    <h1>Welcome {{user.firstname}} {{user.lastname}}</h1>\n    <p>{{user.userID}}</p>\n    <ion-icon name="logo-youtube" [ngStyle]="{\'color\': \'#fc466b\', \'font-size\': \'40px\'  }"></ion-icon>\n  </div> -->\n  \n\n<div *ngIf="item.length > 0">\n  <ion-list>\n    <ion-item-sliding *ngFor="let x of item">   \n          <ion-item  (click)="navigate(x)" class="item-selects">\n              <ion-avatar item-start [ngStyle]="{\'size\': \'15px\'}">\n          <img src={{x.imagePath}}>\n              </ion-avatar>\n              <h2>{{x.title}} &nbsp;</h2>\n              <p>{{x.sub}}</p> \n              <ion-note item-end><ion-badge>{{x.badge}}</ion-badge></ion-note>\n          </ion-item>\n      <ion-item-options>\n        <button ion-button color="archive" icon-start (click)="archive()">\n          <ion-icon name="md-archive"></ion-icon>\n          Archive\n        </button>\n        <button ion-button color="danger" icon-start (click)="delete()">\n          <ion-icon name="ios-trash"></ion-icon>\n          Delete\n        </button>  \n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</div>\n\n<div *ngIf="item.length == 0" text-center padding>  \n  <ion-item>\n    <h3>Nothing to show here . . . </h3> \n  </ion-item>\n</div>\n\n\n\n  <ion-fab right bottom>\n        <button  ion-fab class="btn-grad"  (click)="openModal()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"D:\backup\Documents\project\src\pages\main\main.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__service_fetch_account__["a" /* fetch */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__itinerary_itinerary__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__peer_tracking_peer_tracking__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checklist_checklist__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__split_bills_split_bills__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__group_information_group_information__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the NavigationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NavigationPage = /** @class */ (function () {
    function NavigationPage(navCtrl, navParams, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.list = [
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
        ];
        this.para = this.navParams.get('x');
    }
    NavigationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NavigationPage');
    };
    NavigationPage.prototype.select = function (x) {
        if (x === "Itinerary") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__itinerary_itinerary__["a" /* ItineraryPage */]);
        }
        else if (x === "Peer Tracking") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__peer_tracking_peer_tracking__["a" /* PeerTrackingPage */]);
        }
        else if (x === "Checklist") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__checklist_checklist__["a" /* ChecklistPage */]);
        }
        else if (x === "Split Bills") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__split_bills_split_bills__["a" /* SplitBillsPage */]);
        }
        else if (x === "Group Information") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__group_information_group_information__["a" /* GroupInformationPage */]);
        }
    };
    NavigationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-navigation',template:/*ion-inline-start:"D:\backup\Documents\project\src\pages\navigation\navigation.html"*/'<!--\n  Generated template for the NavigationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark" class="navFont">\n    <ion-title>{{para}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-list> \n      <button ion-item *ngFor="let x of list" (click)="select(x.title)">\n          <ion-icon name={{x.icon}} [ngStyle]="{\'color\':x.color}" item-start></ion-icon> \n          {{x.title}}\n          <ion-icon name="ios-arrow-forward-outline" showWhen="android,windows" item-end></ion-icon> \n      </button> \n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"D:\backup\Documents\project\src\pages\navigation\navigation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], NavigationPage);
    return NavigationPage;
}());

//# sourceMappingURL=navigation.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeerTrackingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PeerTrackingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PeerTrackingPage = /** @class */ (function () {
    function PeerTrackingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PeerTrackingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PeerTrackingPage');
    };
    PeerTrackingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-peer-tracking',template:/*ion-inline-start:"D:\backup\Documents\project\src\pages\peer-tracking\peer-tracking.html"*/'<!--\n  Generated template for the PeerTrackingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Peer Tracking</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\backup\Documents\project\src\pages\peer-tracking\peer-tracking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PeerTrackingPage);
    return PeerTrackingPage;
}());

//# sourceMappingURL=peer-tracking.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplitBillsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SplitBillsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SplitBillsPage = /** @class */ (function () {
    function SplitBillsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SplitBillsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SplitBillsPage');
    };
    SplitBillsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-split-bills',template:/*ion-inline-start:"D:\backup\Documents\project\src\pages\split-bills\split-bills.html"*/'<!--\n  Generated template for the SplitBillsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Split Bills</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\backup\Documents\project\src\pages\split-bills\split-bills.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SplitBillsPage);
    return SplitBillsPage;
}());

//# sourceMappingURL=split-bills.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_auth__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(formBuilder, loading, checking, toast, navCtrl, navParams) {
        this.formBuilder = formBuilder;
        this.loading = loading;
        this.checking = checking;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
        this.registerForm = formBuilder.group({
            'firstname': ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            'lastname': ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            'email': ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            'password': ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])]
        });
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.addAcc = function (user) {
        var _this = this;
        this.presentLoadingDefault();
        this.checking.register(user)
            .then(function (isSuccess) {
            if (isSuccess) {
                var toast = _this.toast.create({
                    message: 'Successfully registered. Please verify your email address to sign in',
                    duration: 2000,
                    position: "bottom",
                    cssClass: "toast-suc-css"
                });
                toast.present();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            }
            else {
                var toast = _this.toast.create({
                    message: _this.checking.printErrorMessage(),
                    duration: 2000,
                    position: "bottom",
                    cssClass: "toast-err-css"
                });
                toast.present();
            }
            _this.loader.dismiss();
        })
            .catch(function (error) {
            var toast = _this.toast.create({
                message: error,
                duration: 3000,
                position: "bottom",
                cssClass: "toast-err-css"
            });
            toast.present();
            _this.loader.dismiss();
        });
    };
    RegisterPage.prototype.presentLoadingDefault = function () {
        this.loader = this.loading.create({
            spinner: 'hide',
            content: "<div class=\"sk-cube-grid\">\n      <div class=\"sk-cube sk-cube1\"></div>\n      <div class=\"sk-cube sk-cube2\"></div>\n      <div class=\"sk-cube sk-cube3\"></div>\n      <div class=\"sk-cube sk-cube4\"></div>\n      <div class=\"sk-cube sk-cube5\"></div>\n      <div class=\"sk-cube sk-cube6\"></div>\n      <div class=\"sk-cube sk-cube7\"></div>\n      <div class=\"sk-cube sk-cube8\"></div>\n      <div class=\"sk-cube sk-cube9\"></div>\n      </div>",
            cssClass: 'transparent'
        });
        this.loader.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"D:\backup\Documents\project\src\pages\register\register.html"*/'<ion-header>\n  <ion-navbar color="dark" class="first-reg">\n    <ion-title>Sign Up</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-register" padding>\n\n    <div [formGroup]="registerForm">\n        <ion-grid text-center>\n\n            <ion-row>\n              <ion-col>\n                <div class="title-container-reg">\n                    <h1 class="basic-reg first-reg animated slideInDown slow">Create New Account</h1>\n                </div>\n              </ion-col>       \n            </ion-row>\n      \n            <ion-row>\n              <ion-col width-15>\n                <ion-item class="first animated slideInLeft slow">\n                  <ion-label color="primary" class="first-reg" stacked>Firstname</ion-label>\n                  <ion-input type="text" [(ngModel)]="user.firstname" formControlName="firstname"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n      \n            <ion-row>\n              <ion-col width-15>\n                <ion-item class="first animated slideInLeft slow">\n                  <ion-label color="primary" class="first-reg" stacked>Lastname</ion-label>\n                  <ion-input type="text" [(ngModel)]="user.lastname" formControlName="lastname"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n      \n            <ion-row>\n              <ion-col width-15>\n                <ion-item class="first animated slideInLeft slow">\n                  <ion-label color="primary" class="first-reg" stacked>Email</ion-label>\n                  <ion-input type="email" [(ngModel)]="user.email" formControlName="email"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n      \n            <ion-row>\n              <ion-col width-15>\n                <ion-item class="first animated slideInLeft slow">\n                  <ion-label color="primary" class="first-reg" stacked>Password</ion-label>\n                  <ion-input type="password" [(ngModel)]="user.password" formControlName="password"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n      \n            <ion-row style="padding-top: 20px;">\n              <ion-col>\n                <button ion-button icon-start class="first-reg btnSignUpReg animated slideInLeft slow" block (click)="addAcc(user)" [disabled]="!registerForm.valid"><ion-icon name="ios-create-outline"></ion-icon>\n                  SIGN UP\n                </button>\n              </ion-col>\n            </ion-row>\n      \n          </ion-grid>\n    </div>\n\n</ion-content>\n\n\n'/*ion-inline-end:"D:\backup\Documents\project\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__service_auth__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 191;

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/checklist/checklist.module": [
		744,
		8
	],
	"../pages/create-itinerary/create-itinerary.module": [
		745,
		0
	],
	"../pages/group-information/group-information.module": [
		746,
		7
	],
	"../pages/itinerary/itinerary.module": [
		747,
		6
	],
	"../pages/main/main.module": [
		748,
		5
	],
	"../pages/navigation/navigation.module": [
		749,
		4
	],
	"../pages/peer-tracking/peer-tracking.module": [
		750,
		3
	],
	"../pages/register/register.module": [
		751,
		2
	],
	"../pages/split-bills/split-bills.module": [
		752,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 235;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the MoreComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MoreComponent = /** @class */ (function () {
    function MoreComponent() {
    }
    MoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'more',template:/*ion-inline-start:"D:\backup\Documents\project\src\components\more\more.html"*/'<!-- Generated template for the MoreComponent component -->\n<ion-list>\n\n  <button class="btn-grad-list" ion-item>\n    Profile\n  </button>\n  <button class="btn-grad-list" ion-item>\n    Setting\n  </button>\n  <button class="btn-grad-list" ion-item>\n    About\n  </button>\n  \n    \n\n\n</ion-list>\n\n'/*ion-inline-end:"D:\backup\Documents\project\src\components\more\more.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MoreComponent);
    return MoreComponent;
}());

//# sourceMappingURL=more.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var fetch = /** @class */ (function () {
    function fetch(auth, db) {
        this.auth = auth;
        this.db = db;
        this.user = {};
    }
    fetch.prototype.fetchAccount = function () {
        var _this = this;
        var keyUid = this.auth.auth.currentUser.uid;
        this.db.database
            .ref('users/')
            .orderByKey()
            .equalTo(keyUid)
            .on("child_added", function (snapshotChanges) {
            _this.user.userID = snapshotChanges.val().uid;
            _this.user.firstname = snapshotChanges.val().firstname;
            _this.user.lastname = snapshotChanges.val().lastname;
        });
        return this.user;
    };
    fetch = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], fetch);
    return fetch;
}());

//# sourceMappingURL=fetch-account.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(398);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_register_register__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_main_main__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_navigation_navigation__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_itinerary_itinerary__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_peer_tracking_peer_tracking__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_checklist_checklist__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_split_bills_split_bills__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_group_information_group_information__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__agm_core__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__config_firebase_credentials__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__service_auth__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__service_fetch_account__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_more_more__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_common_http__ = __webpack_require__(391);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import { CreateItineraryPage } from '../pages/create-itinerary/create-itinerary';














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_navigation_navigation__["a" /* NavigationPage */],
                // CreateItineraryPage,
                __WEBPACK_IMPORTED_MODULE_10__pages_itinerary_itinerary__["a" /* ItineraryPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_peer_tracking_peer_tracking__["a" /* PeerTrackingPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_checklist_checklist__["a" /* ChecklistPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_split_bills_split_bills__["a" /* SplitBillsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_group_information_group_information__["a" /* GroupInformationPage */],
                __WEBPACK_IMPORTED_MODULE_22__components_more_more__["a" /* MoreComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/checklist/checklist.module#ChecklistPageModule', name: 'ChecklistPage', segment: 'checklist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-itinerary/create-itinerary.module#CreateItineraryPageModule', name: 'CreateItineraryPage', segment: 'create-itinerary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/group-information/group-information.module#GroupInformationPageModule', name: 'GroupInformationPage', segment: 'group-information', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/itinerary/itinerary.module#ItineraryPageModule', name: 'ItineraryPage', segment: 'itinerary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/navigation/navigation.module#NavigationPageModule', name: 'NavigationPage', segment: 'navigation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/peer-tracking/peer-tracking.module#PeerTrackingPageModule', name: 'PeerTrackingPage', segment: 'peer-tracking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/split-bills/split-bills.module#SplitBillsPageModule', name: 'SplitBillsPage', segment: 'split-bills', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_19__config_firebase_credentials__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_18__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyDGcNAmjpZ9-RaKNOgWlp4JxcNvkwOGQyo',
                    libraries: ["places"]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_navigation_navigation__["a" /* NavigationPage */],
                // CreateItineraryPage,
                __WEBPACK_IMPORTED_MODULE_10__pages_itinerary_itinerary__["a" /* ItineraryPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_peer_tracking_peer_tracking__["a" /* PeerTrackingPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_checklist_checklist__["a" /* ChecklistPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_split_bills_split_bills__["a" /* SplitBillsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_group_information_group_information__["a" /* GroupInformationPage */],
                __WEBPACK_IMPORTED_MODULE_22__components_more_more__["a" /* MoreComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_20__service_auth__["a" /* Auth */],
                __WEBPACK_IMPORTED_MODULE_21__service_fetch_account__["a" /* fetch */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 721:
/***/ (function(module, exports) {

sample = 'Hello from external js';



/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\backup\Documents\project\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\backup\Documents\project\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    firebase: {
        apiKey: "AIzaSyB5gQLTzfb8OXGSJ0sryxBtM5REko4JNho",
        authDomain: "tgather-56a88.firebaseapp.com",
        databaseURL: "https://tgather-56a88.firebaseio.com",
        projectId: "tgather-56a88",
        storageBucket: "tgather-56a88.appspot.com",
        messagingSenderId: "92905880906"
    }
};
//# sourceMappingURL=firebase_credentials.js.map

/***/ })

},[393]);
//# sourceMappingURL=main.js.map