import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PeerTrackingPage } from './peer-tracking';

@NgModule({
  declarations: [
    PeerTrackingPage,
  ],
  imports: [
    IonicPageModule.forChild(PeerTrackingPage),
  ],
})
export class PeerTrackingPageModule {}
