import { ListadoDeEspeciesPage } from './../listado-de-especies/listado-de-especies';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DisposicionDeLasHojasPage } from '../disposicion-de-las-hojas/disposicion-de-las-hojas';
import { DatabaseProvider } from '../../providers/database/database';

@Component({
  selector: 'page-forma-de-vida',
  templateUrl: 'forma-de-vida.html'
})
export class FormaDeVidaPage {

  disposicionHojas: any;
  listadoEspecies : any;

  formaVida: any;
  espinas: any;

  queryResult: any;
  cond: any;

  constructor(public navCtrl: NavController, public database: DatabaseProvider) {
    this.disposicionHojas = DisposicionDeLasHojasPage;
    this.listadoEspecies = ListadoDeEspeciesPage;
  }

  pushParamsOpciones() {
    if(this.queryResult && this.queryResult.length > 0)
    this.navCtrl.push(this.disposicionHojas, { 'data': this.cond });
  }

  pushParamsResultados() {
    if(this.queryResult && this.queryResult.length > 0)
      this.navCtrl.push(this.listadoEspecies, { 'data': this.queryResult });
  }



  query(){
    let cond = '';

    if(this.formaVida)
      cond = "formadevida = '" + this.formaVida + "'";

    if(this.espinas){
      if(cond.length>0){
        cond += " and presenciaespinas= '" + this.espinas + "'";
      } else{
        cond += "presenciaespinas= '" + this.espinas + "'";
      }
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
