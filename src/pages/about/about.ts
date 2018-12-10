import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { Item } from '../../models/item';
import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  formGroup: FormGroup;

  currentItems: Item[];

  reservas = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public formBuilder: FormBuilder, public items: Items) {

    this.currentItems = this.items.query();

    this.formGroup = formBuilder.group({
      nombreAdoptante: ['', Validators.required],
      correoAdoptante: ['', Validators.required],
      nombreMascota: ['', Validators.required],
      especie: ['', Validators.required],
      reserva: ['', Validators.required],
      aportacion: [null, Validators.required]
    });

    this.reservas =[
      'Reserva de la Biosfera Alto Golfo de California y Delta del Río Colorado',
      'Santuario del Manatí',
      'Reserva Natural de Punta Laguna',
      'Reserva de la Biosfera de Ría Celestún',
      'Reserva de la Biosfera El Triunfo'
    ]

  }

  openItem() {
    let data = {
      nombreAdoptante: this.formGroup.value['nombreAdoptante'],
      correoAdoptante: this.formGroup.value['correoAdoptante'],
      especie: this.formGroup.value['especie'],
      reserva: this.formGroup.value['reserva'],
      nombreMascota: this.formGroup.value['nombreMascota'],
      aportacion: this.formGroup.value['aportacion']
    }
    this.navCtrl.push('AdopcionPage', {
      data: data
    });
  }

}
