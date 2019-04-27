import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModoUsoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modo-uso',
  templateUrl: 'modo-uso.html',
})
export class ModoUsoPage {

  slides : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.slides = [
      {
        title: "SOBRE LA APP",
        description: `CARU-FLORA ayuda a identificar árboles y arbustos nativos más frecuentes que crecen en los márgenes del bajo río Uruguay. 
        El área que comprende corresponde al tramo de la Comisión Administradora del Río Uruguay (CARU): su límite norte, a la altura de Monte Caseros en la provincia Argentina de Corrientes, y Bella Unión, en el Departamento Artigas de la República Oriental del Uruguay, hasta su desembocadura en el Estuario del Río de La Plata.
        La aplicación es un desarrollo propio de CARU basado en el libro Rodriguez, E.E.; Aceñolaza, P.G.; Picasso, G. y Gago, J. 2018. Plantas del bajo Río Uruguay: Árboles y Arbustos. Volumen I. Comisión Administradora del Río Uruguay – C.A.R.U. 310 pp. Junto con la base de datos asociada.         
        `,
        image: "",
      },
      {
        title: "Objetivo",
        description: `Obrar de guía de campo práctica, visual e intuitiva, para la determinación y el conocimiento de la flora leñosa en el tramo final del río Uruguay.`,
        image: "",
      },
      {
        title: "Selección de especies",
        description: `Las especies que se incluyen corresponden a los principales árboles y arbustos nativos que podemos encontrar recorriendo su geografía, incluso arroyos tributarios y terrenos lindantes. 
        Se excluyen la mayoría de las especies cultivadas, aquellas usadas en arbolado urbano y las implantadas. Solo unas pocas exóticas se agregan por ser invasoras en la región. 
        La base está compuesta por 105 especies de árboles y arbustos con descripción e ilustración        
        `,
        image: "",
      },
      {
        title: "¿CÓMO UTILIZAR LA APP?",
        description: `CARU-FLORA es de uso intuitivo y se basa en el ingreso de unos pocos caracteres morfológicos externos de las plantas. Estos se presentan como alternativas divergentes que van circunscribiendo la selección de posibles resultados hasta llegar a uno solo o a pocas alternativas. La sección final la realiza el interesado tocando las alternativas y comparando visualmente con lo que desea identificar a campo.
        `,
        image: "",
      },
      {
        title: "DESCRIPCIÓN DE LAS ESPECIES",
        description: `Todos los árboles y arbustos incluidos en CARU-FLORA poseen una ficha de estructura similar que permite obtener información del mismo tenor para la totalidad de las especies. Estas fichas cuentan con una descripción general, seguida con una serie de fotografías de la planta entera o sus partes para facilitar su reconocimiento a campo.
        El texto de las fichas se compone de los siguientes campos: <br/>
        
        <b>Familia botánica:</b> Hace referencia al nombre científico que recibe el taxón que agrupa los géneros que comparten caracteres similares.
        
        <br/><b>Nombre vulgar:</b> Hace referencia a los nombres que usualmente utiliza la gente para identificar la planta. 
        
        <br/><b>Etimología:</b> Breve descripción del significado o el motivo por el cual se confirió el nombre científico a una especie.
        
        <br/><b>Características generales:</b> En este apartado se describe los caracteres morfológicos externos más sobresalientes de cada una de las especies, haciendo hincapié sobre aquellos que le sirven al lector para su identificación a campo. 
        
        <br/><b>Hábitat:</b> Se indica los sitios más frecuentes donde la especie puede ser encontrada.
        
        <br/><b>Estatus:</b> Corresponde a una clasificación de las especies según su origen geográfico. En este sentido las mismas se discriminaron en: nativas, introducidas, naturalizadas, adventicias, cosmopolitas y endémicas, siguiendo la clasificación propuesta por el Catalogo de plantas vasculares de la Flora del Conosur. Las especies nativas son aquellas pertenecientes a la región que comprende Argentina, Uruguay y parte de sur Brasil. 
        
        <br/><b>Observaciones:</b> En este apartado se incluye información complementaria que puede ser de interés al lector como ser, usos de las plantas (alimenticios y medicinales), caracteres llamativos y otros datos de interés general
        `,
        image: "",
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModoUsoPage');
  }

}
