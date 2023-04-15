import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  //variable para el año
  anio: number = new Date().getFullYear();


  constructor(public _service: InfoPaginaService) { }

  ngOnInit(): void {
  }

}
