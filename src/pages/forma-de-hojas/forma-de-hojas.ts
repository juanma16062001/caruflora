import { ListadoDeEspeciesPage } from './../listado-de-especies/listado-de-especies';
import { BordeDeHojaPage } from './../borde-de-hoja/borde-de-hoja';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';

@Component({
  selector: 'page-forma-de-hojas',
  templateUrl: 'forma-de-hojas.html'
})
export class FormaDeHojasPage {

  // Paginas
  bordeHoja : any;
  listadoEspecies : any;

  //Resultado query
  queryResult: any;
  cond: any;

  // Condiciones
  formaHoja: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public database: DatabaseProvider) {
    this.bordeHoja= BordeDeHojaPage;
    this.listadoEspecies = ListadoDeEspeciesPage;

    if(navParams.get('data') && navParams.get('data').length > 0){
      this.query();
    }
  }

  pushParamsOpciones() {
    if(this.queryResult && this.queryResult.length > 0)
      this.navCtrl.push(this.bordeHoja, { 'data': this.cond });
  }

  pushParamsResultados() {
    if(this.queryResult && this.queryResult.length > 0)
      this.navCtrl.push(this.listadoEspecies, { 'data': this.queryResult });
  }

  query(){
    let cond = '';

    if(this.formaHoja)
      cond = "formahoja = '" + this.formaHoja + "'";

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