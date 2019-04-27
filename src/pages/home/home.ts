import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListadoDeEspeciesPage } from '../listado-de-especies/listado-de-especies';
import { FormaDeVidaPage } from '../forma-de-vida/forma-de-vida';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  listadoEspecies: any;
  busquedaGuiada: any

  constructor(public navCtrl: NavController) {
    this.listadoEspecies = ListadoDeEspeciesPage;
    this.busquedaGuiada = FormaDeVidaPage;
  }
  
}
