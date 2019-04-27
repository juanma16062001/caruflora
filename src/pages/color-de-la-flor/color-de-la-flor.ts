import { Component } from '@angular/core';

import { TipoDeFrutosPage } from '../tipo-de-frutos/tipo-de-frutos';

import { NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { ListadoDeEspeciesPage } from './../listado-de-especies/listado-de-especies';

@Component({
  selector: 'page-color-de-la-flor',
  templateUrl: 'color-de-la-flor.html'
})
export class ColorDeLaFlorPage {

  tipoFruto : any;
  listadoEspecies : any;

  //Resultado query
  queryResult: any;
  cond: any;

  // Condiciones
  colorFlor: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public database: DatabaseProvider) {
    this.tipoFruto= TipoDeFrutosPage;
    this.listadoEspecies = ListadoDeEspeciesPage;

    if(navParams.get('data') && navParams.get('data').length > 0){
      this.query();
    }
  }

  pushParamsOpciones() {
    if(this.queryResult && this.queryResult.length > 0)
      this.navCtrl.push(this.tipoFruto, { 'data': this.cond });
  }

  pushParamsResultados() {
    if(this.queryResult && this.queryResult.length > 0)
      this.navCtrl.push(this.listadoEspecies, { 'data': this.queryResult });
  }

  query(){
    let cond = '';

    if(this.colorFlor)
      cond = "colorflor = '" + this.colorFlor + "'";

    if(this.navParams.get('data') && this.navParams.get('data').length > 0){
      // cond puede venir vacia cuando viene de forma de vida
      cond = cond != '' ? this.navParams.get('data') + ' and ' + cond : this.navParams.get('data');
    }

    this.cond = cond;

    this.database.query(cond)
    .then(queryResult => {
      this.queryResult = queryResult;
      console.log(this.queryResult);
      //console.log('todos los arboles:',arboles);
    })
    .catch( error => {
      console.error( error );
    });
  }
  
}
