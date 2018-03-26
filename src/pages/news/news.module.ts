import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { News } from './news';

@NgModule({
  declarations: [
    News,
  ],
  imports: [
    IonicPageModule.forChild(News),
  ],
  exports: [
    News
  ]
})
export class NewsModule {}
