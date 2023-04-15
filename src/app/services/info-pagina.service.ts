import { Injectable } from '@angular/core';
//importamos
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  //variables 
  //agreganis la interface
  info: InfoPagina = {};
  cargada = false;
  //variable para guardar los datos
  equipo: any[] = [];
  constructor(private http: HttpClient) {
    this.cargarEquipo();
    this.cargarInfo();
  }

  private cargarInfo() {
    //leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
      })
  }

  //cargamos los datos de la base de datos
  private cargarEquipo() {
    //peticion
    this.http.get<any[]>('https://portafolio-42d5a-default-rtdb.firebaseio.com/equipo.json')
      .subscribe(
        (resp: any[]) => {
          this.equipo = resp;
        }
      );
  }
}
