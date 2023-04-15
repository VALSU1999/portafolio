import { Component, OnInit } from '@angular/core';
//importamos el service
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  //inyectamos el service
  constructor(
    public productosService: ProductosService
  ) { }

  ngOnInit(): void {
    
  }

}
