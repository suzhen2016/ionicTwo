import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Details page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})

export class Details {
  //属性
  data:any;
  //构造方法
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //接收传进来的值；
    this.data = navParams.get('item');
    console.log(this.data)
  }
  //方法
  ionViewDidLoad() {
    console.log('ionViewDidLoad Details');
  }

}
