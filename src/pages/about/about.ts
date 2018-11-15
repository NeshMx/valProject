import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { Item } from '../../models/item';
import { Items } from '../../providers';

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
  especie: AbstractControl;
  reserva: AbstractControl;

  currentItems: Item[];

  reservas = [];

  constructor(public alertCtrl: AlertController,public navCtrl: NavController, 
    public navParams: NavParams, public formBuilder: FormBuilder, public items: Items) {

    this.currentItems = this.items.query();

    this.formGroup = formBuilder.group({
      nombreAdoptante: ['', Validators.required],
      correoAdoptante: ['', Validators.required],
      nombreMascota: ['', Validators.required],
      especie: ['', Validators.required],
      reserva: ['', Validators.required]      
    });

    this.nombreAdoptante = this.formGroup.controls['nombreAdoptante'];
    this.correoAdoptante = this.formGroup.controls['correoAdoptante'];
    this.nombreMascota = this.formGroup.controls['nombreMascota'];
    this.especie = this.formGroup.controls['especie'];
    this.reserva = this.formGroup.controls['reserva'];

    this.reservas =[
      'Reserva de la Biosfera Alto Golfo de California y Delta del Río Colorado',
      'Santuario del Manatí',
      'Reserva Natural de Punta Laguna',
      'Reserva de la Biosfera de Ría Celestún',
      'Reserva de la Biosfera El Triunfo'
    ]

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
