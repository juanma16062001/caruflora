import { ListadoDeEspeciesPage } from './../listado-de-especies/listado-de-especies';
import { DatabaseProvider } from './../../providers/database/database';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormaDeHojasPage } from '../forma-de-hojas/forma-de-hojas';
import { FormaDeHojas2Page } from '../forma-de-hojas2/forma-de-hojas2';

@Component({
  selector: 'page-disposicion-de-las-hojas',
  templateUrl: 'disposicion-de-las-hojas.html'
})
export class DisposicionDeLasHojasPage {

  // Paginas
  formaHoja : any;
  listadoEspecies : any;

  //Resultado query
  queryResult: any;
  cond: any;

  // Condiciones
  diposicionHojas: any;
  tipoHojas: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public database: DatabaseProvider, public alertCtrl: AlertController) {
    this.listadoEspecies = ListadoDeEspeciesPage;
    console.log(navParams);
    if(navParams.get('data') && navParams.get('data').length > 0){
      this.query();
    }
  }

  pushParamsOpciones() {
    if(this.tipoHojas && this.tipoHojas.length > 0){
      if(this.tipoHojas == 'Simple'){
        this.formaHoja = FormaDeHojasPage;
      } else {
        this.formaHoja = FormaDeHojas2Page;
      }
      this.navCtrl.push(this.formaHoja, { 'data': this.cond });
    } else {
      this.showAlert();
    }
    
  }

  pushParamsResultados() {
    if(this.queryResult && this.queryResult.length > 0)
      this.navCtrl.push(this.listadoEspecies, { 'data': this.queryResult });
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Acción Requerida',
      subTitle: 'Primero selecciona un tipo de hoja',
      buttons: ['OK']
    });
    alert.present();
  }

  query(){
    let cond = '';

    if(this.diposicionHojas)
      cond = "disposicionhoja = '" + this.diposicionHojas + "'";

    if(this.tipoHojas){
      if(cond.length>0){
        cond += " and tipohoja= '" + this.tipoHojas + "'";
      } else{
        cond += "tipohoja= '" + this.tipoHojas + "'";
      }
    }

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
