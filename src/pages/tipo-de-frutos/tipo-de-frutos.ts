import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { ListadoDeEspeciesPage } from './../listado-de-especies/listado-de-especies';

@Component({
  selector: 'page-tipo-de-frutos',
  templateUrl: 'tipo-de-frutos.html'
})
export class TipoDeFrutosPage {
  listadoEspecies : any;

  //Resultado query
  queryResult: any;
  cond: any;

  // Condiciones
  tipoFruto: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public database: DatabaseProvider) {
    this.listadoEspecies = ListadoDeEspeciesPage;

    if(navParams.get('data') && navParams.get('data').length > 0){
      this.query();
    }
  }

  pushParamsResultados() {
    if(this.queryResult && this.queryResult.length > 0)
      this.navCtrl.push(this.listadoEspecies, { 'data': this.queryResult });
  }

  query(){
    let cond = '';

    if(this.tipoFruto)
      cond = "tipofruto = '" + this.tipoFruto + "'";

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
