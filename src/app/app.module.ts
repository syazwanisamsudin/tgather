import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { MainPage } from '../pages/main/main';
import { NavigationPage } from '../pages/navigation/navigation';
// import { CreateItineraryPage } from '../pages/create-itinerary/create-itinerary';
import { ItineraryPage } from '../pages/itinerary/itinerary';
import { PeerTrackingPage } from '../pages/peer-tracking/peer-tracking';
import { ChecklistPage } from '../pages/checklist/checklist';
import { SplitBillsPage } from '../pages/split-bills/split-bills';
import { GroupInformationPage } from '../pages/group-information/group-information';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AgmCoreModule } from '@agm/core';

import {environment} from '../config/firebase_credentials';
import { Auth } from '../service/auth';
import { fetch } from '../service/fetch-account';

import { MoreComponent } from '../components/more/more';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    MainPage,
    NavigationPage,
    // CreateItineraryPage,
    ItineraryPage,
    PeerTrackingPage,
    ChecklistPage,
    SplitBillsPage,
    GroupInformationPage,

    MoreComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDGcNAmjpZ9-RaKNOgWlp4JxcNvkwOGQyo',
      libraries: ["places"]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    MainPage,
    NavigationPage,
    // CreateItineraryPage,
    ItineraryPage,
    PeerTrackingPage,
    ChecklistPage,
    SplitBillsPage,
    GroupInformationPage,

    MoreComponent,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireDatabaseModule,
    Auth,
    fetch
  ]
})
export class AppModule {}
