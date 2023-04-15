import { Component } from '@angular/core';
//importamos
import { InfoPaginaService } from './services/info-pagina.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  //inyectamos el service de productos
  constructor(
    public _infoPagina: InfoPaginaService,
    public _producto: ProductosService
  ){}
}
