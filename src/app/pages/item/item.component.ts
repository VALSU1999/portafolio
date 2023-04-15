import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {


  //variable de producto
  public producto: ProductoDescripcion | undefined;
  public productoId: string = '';
  //inyectamos para obtener datos de la url
  constructor(
    private route: ActivatedRoute,
    public productosService: ProductosService
  ) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      ({id})=>{
        this.productosService.getProducto(id)
          .subscribe(
            (resp:ProductoDescripcion)=>{
              this.producto = resp;
              this.productoId = id;
              
            }
          );
                
      }
    )
  }

}
