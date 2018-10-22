import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupInformationPage } from './group-information';

@NgModule({
  declarations: [
    GroupInformationPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupInformationPage),
  ],
})
export class GroupInformationPageModule {}
