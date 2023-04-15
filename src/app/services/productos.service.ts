import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';
import { ProductoDescripcion } from '../interfaces/producto-descripcion.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  //variable para ver si ya cargo
  public cargando = true;
  public producto:Producto[]=[];
  public productoFiltro:Producto[]=[];
  //intectamos el http
  constructor(
    private http: HttpClient
  ) {
    this.cargarProducto();
  }

  //funcion para listar productos
  private cargarProducto() {

    return new Promise((resolve , reject)=>{
      this.http.get<Producto[]>('https://portafolio-42d5a-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe(
        (resp: Producto[])=>{
          this.producto = resp;
          this.cargando = false; 
          resolve; 
        }
      );
    })

    
  }

  getProducto(id: string){
    return this.http.get<ProductoDescripcion>(`https://portafolio-42d5a-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino: string){
    if(this.producto.length === 0){
      //cargar productos
      this.cargarProducto().then(()=>{
        //despues de tener los productos
        this.filtrarPoductos(termino);
      });
    }else{
      //aplicar filtro
      this.filtrarPoductos(termino);
    }
    
  }
  private filtrarPoductos(termino: string){
    this.productoFiltro =[];
    termino = termino.toLocaleLowerCase();
    this.producto.forEach(prod=>{
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if(prod.categoria.indexOf(termino)>=0 || tituloLower.indexOf(termino)>=0){
        this.productoFiltro.push(prod);    
      }
    });
    
  }
}
