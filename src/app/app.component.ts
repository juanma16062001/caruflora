import { CaracterizacionPage } from './../pages/caracterizacion/caracterizacion';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ModoUsoPage } from '../pages/modo-uso/modo-uso';

import { DatabaseProvider } from '../providers/database/database';

import { timer } from 'rxjs/observable/timer';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  showSplash = false; // <-- show animation


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public databaseProvider: DatabaseProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: HomePage },
      { title: 'Caracterizacion del area', component: CaracterizacionPage },
      { title: 'Modo de uso', component: ModoUsoPage},
      { title: 'Créditos', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      //timer(3000).subscribe(() => this.showSplash = false) 

      this.databaseProvider.init();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
