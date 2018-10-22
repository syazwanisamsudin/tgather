import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SplitBillsPage } from './split-bills';

@NgModule({
  declarations: [
    SplitBillsPage,
  ],
  imports: [
    IonicPageModule.forChild(SplitBillsPage),
  ],
})
export class SplitBillsPageModule {}
