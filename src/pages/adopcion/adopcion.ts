import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';

/**
 * Generated class for the AdopcionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adopcion',
  templateUrl: 'adopcion.html',
})
export class AdopcionPage {

  currentItems: Item[];

  data: Object;

  url: '';

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public items: Items) {

    this.currentItems = this.items.query();
    this.data = this.navParams.get('data');
    let obj = this.currentItems.find(o => o.nombreComun === this.data['especie']);
    this.url = obj.urlFoto;
  }


  ionViewDidLoad() {
    this.showAlert();
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: '¡Muchas felicidades!',
      subTitle: 'Has adoptado a ' + this.data['nombreMascota'],
      buttons: ['OK']
    });
    alert.present();
  }

}
