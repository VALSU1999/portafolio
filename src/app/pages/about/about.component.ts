import { Component, OnInit } from '@angular/core';
//importamos el service
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  //intectamos
  constructor(
    public infoService: InfoPaginaService
  ) { }

  ngOnInit(): void {    
  }

}
