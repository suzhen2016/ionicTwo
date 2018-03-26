import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { App } from 'ionic-angular';  
// 引入组件依赖

//引入所要跳转的页面组件
import { Details } from '../details/details';
import { News } from '../news/news';

//定义组件
@Component({
  selector: 'page-home',  
  templateUrl: 'home.html'
})

//创建组件类
export class HomePage {
  text = '请选择';
  value='';
  //构造器引入指定需要的功能模块
  constructor(public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    public modalCtrl:ModalController,
    private app:App
    ) {

  }
  //操作表的方法
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: '操作表',
      buttons: [
        {
          text: '朋友圈',
          role: 'destructive',
          handler: () => {
            this.text='朋友圈'
            console.log('Destructive clicked');
          }
        }, {
          text: '发送给好友',
          handler: () => {
             this.text='发送给好友'
            console.log('Archive clicked');
          }
        }, {
          text: '取消',
          role: 'cancel',
          handler: () => {
            this.text = '请选择'
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  //键盘输入事件  回车监听
  onkey(event: KeyboardEvent){
    //获得输入的值
    this.value +=(<HTMLInputElement>event.target).value + ' | ';
  }

  goRoute(){
    //去掉底部tab的详情页
    this.app.getRootNav().push(Details,{item:'苏镇的--'}); 

    //带有底部的
    //  this.navCtrl.push(Details,{
    //    item:'苏镇'
    //  });
  }
  //模态框
  presentModal() {
    let modal = this.modalCtrl.create(Details);
    modal.present();
  }
  
}


