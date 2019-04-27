import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DatabaseProvider } from '../../providers/database/database';

import { DetalleArbolPage } from '../detalle-arbol/detalle-arbol';

@Component({
  selector: 'page-listado-de-especies',
  templateUrl: 'listado-de-especies.html'
})
export class ListadoDeEspeciesPage {

  arboles: any;

  detalle: any;

  busqueda: any;

  constructor(public navCtrl: NavController, navParams: NavParams, public databaseProvider: DatabaseProvider) {
    this.detalle = DetalleArbolPage;

    if(navParams.get('data') && navParams.get('data').length > 0){
      this.arboles = navParams.get('data');
    } else {
      this.obtenerListado();
    }

    
  }

  searchInput()
  {
    //if(this.busqueda.length >= 3){
      this.query(this.busqueda);
    //}
  }

  private obtenerListado(){
    this.databaseProvider.getAll()
    .then(arboles => {
      this.arboles = arboles;
      //console.log('todos los arboles:',arboles);
    })
    .catch( error => {
      console.error( error );
    });
  }

  query(nombre){
    let cond = "nombre1 like '" + nombre + "%' or nombre2 like '" + nombre + "%' or nombre3 like '" + nombre + "%' or nombre4 like '" + nombre + "%' or nombre5 like '" + nombre + "%' or nombre6 like '" + nombre + "%' or nombre7 like '" + nombre + "%'";

    
    this.databaseProvider.query(cond)
    .then(arboles => {
      this.arboles = arboles;
      console.log(this.arboles);
      //console.log('todos los arboles:',arboles);
    })
    .catch( error => {
      console.error( error );
    });
  }
  
}