import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateItineraryPage } from './create-itinerary';

@NgModule({
  declarations: [
    CreateItineraryPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateItineraryPage),
  ],
})
export class CreateItineraryPageModule {}
