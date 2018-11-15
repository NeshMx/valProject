import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  patrocinios = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.patrocinios = [{
        "urlFoto": "assets/pats/conabio.png",
        "nombre": "CONABIO",
        "paginaOficial": "https://www.gob.mx/conabio",
        "face": "https://www.facebook.com/CONABIO/"
      },
      {
        "urlFoto": "assets/pats/profepa.png",
        "nombre": "PROFEPA",
        "paginaOficial": "https://www.gob.mx/profepa",
        "face": "https://www.facebook.com/ProfepaOficial/"
      },
      {
        "urlFoto": "assets/pats/semarnat.jpg",
        "nombre": "SEMARNAT",
        "paginaOficial": "https://www.gob.mx/semarnat",
        "face": "https://www.facebook.com/Semarnatmx/"
      },
      {
        "urlFoto": "assets/pats/greenpeace.png",
        "nombre": "Greenpeace",
        "paginaOficial": "https://www.greenpeace.org/archive-mexico/es/",
        "face": "https://www.facebook.com/greenpeacemexico/"
      }
    ]
  }

  ionViewDidLoad() {
  }

  goToPage(page) {
    window.open(page,'_system');
  }
  
  goToFace(face) {
    window.open(face,'_system');
  }

}
