import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { File } from '@ionic-native/file';

/**
 * Generated class for the DetalleArbolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-arbol',
  templateUrl: 'detalle-arbol.html',
})
export class DetalleArbolPage {

  arboles: any;
  nombreArbol:any;
  images: Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public database: DatabaseProvider, private file: File) {
    this.database.query('_id = ' + this.navParams.data)
    .then(arboles => {
      this.arboles = arboles;
      //console.log('todos los arboles:',arboles);
    })
    .catch( error => {
      console.error( error );
    });
    this.file.listDir(this.file.applicationDirectory, 'www/assets/imgs/'+this.navParams.data).then((listing) => {
      this.images = [];
      for (let index = 0; index < listing.length; index++) {
        const element = listing[index];
        this.images.push(element.name);
      }
    });
  }

  public nombreVulgar(arbol){
    let nombreVulgar = '';
    if(arbol.nombre2 && arbol.nombre2.length > 0)
      nombreVulgar += arbol.nombre2;
    if(arbol.nombre3 && arbol.nombre3.length > 0)
      nombreVulgar += ', ' + arbol.nombre3;
    if(arbol.nombre4 && arbol.nombre4.length > 0)
      nombreVulgar += ', ' + arbol.nombre4;
    if(arbol.nombre5 && arbol.nombre5.length > 0)
      nombreVulgar += ', ' + arbol.nombre5;
    if(arbol.nombre6 && arbol.nombre6.length > 0)
      nombreVulgar += ', ' + arbol.nombre6;
    if(arbol.nombre7 && arbol.nombre7.length > 0)
      nombreVulgar += ', ' + arbol.nombre7;

    return nombreVulgar;
  }

  ionViewDidLoad() {
    
  }

}
