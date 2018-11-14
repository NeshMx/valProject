import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  formGroup: FormGroup;
  nombreAdoptante: AbstractControl;
  correoAdoptante: AbstractControl;
  nombreMascota: AbstractControl;

  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      nombreAdoptante: ['', Validators.required],
      correoAdoptante: ['', Validators.required],
      nombreMascota: ['', Validators.required]
    });

    this.nombreAdoptante = this.formGroup.controls['nombreAdoptante'];
    this.correoAdoptante = this.formGroup.controls['correoAdoptante'];
    this.nombreMascota = this.formGroup.controls['nombreMascota'];

  }

  ionViewDidLoad() {
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: '¡Muchas felicidades!',
      subTitle: 'Has adoptado a ' + this.nombreMascota.value,
      buttons: ['OK']
    });
    alert.present();
  }

}
