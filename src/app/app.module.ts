import { ModoUsoPage } from './../pages/modo-uso/modo-uso';
import { CaracterizacionPage } from './../pages/caracterizacion/caracterizacion';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ListadoDeEspeciesPage } from '../pages/listado-de-especies/listado-de-especies';
import { DetalleArbolPage} from '../pages/detalle-arbol/detalle-arbol';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {SQLite} from '@ionic-native/sqlite';
import { File } from '@ionic-native/file';

import { DatabaseProvider } from '../providers/database/database';
import { BordeDeHojaPage } from '../pages/borde-de-hoja/borde-de-hoja';
import { ColorDeLaFlorPage } from '../pages/color-de-la-flor/color-de-la-flor';
import { DisposicionDeLasHojasPage } from '../pages/disposicion-de-las-hojas/disposicion-de-las-hojas';
import { FormaDeHojasPage } from '../pages/forma-de-hojas/forma-de-hojas';
import { FormaDeHojas2Page } from '../pages/forma-de-hojas2/forma-de-hojas2';
import { FormaDeVidaPage } from '../pages/forma-de-vida/forma-de-vida';
import { TipoDeFrutosPage } from '../pages/tipo-de-frutos/tipo-de-frutos';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ListadoDeEspeciesPage,
    DetalleArbolPage,
    BordeDeHojaPage,
    ColorDeLaFlorPage,
    DisposicionDeLasHojasPage,
    FormaDeHojasPage,
    FormaDeHojas2Page,
    FormaDeVidaPage,
    TipoDeFrutosPage,
    CaracterizacionPage,
    ModoUsoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ListadoDeEspeciesPage,
    DetalleArbolPage,
    BordeDeHojaPage,
    ColorDeLaFlorPage,
    DisposicionDeLasHojasPage,
    FormaDeHojasPage,
    FormaDeHojas2Page,
    FormaDeVidaPage,
    TipoDeFrutosPage,
    CaracterizacionPage,
    ModoUsoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    File,
    DatabaseProvider
  ]
})
export class AppModule {}
