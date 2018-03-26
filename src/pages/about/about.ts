import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { News } from '../news/news';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {
  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
  
  //页面按钮跳转路径
  nxPage: any = News;
  params: any = {id: 42};
  constructor(public navCtrl: NavController) {

  }

}
