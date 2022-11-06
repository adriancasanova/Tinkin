import { Component, OnInit } from '@angular/core';
import { ServiceJsService } from './../../servicios/service-js.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private serviceJs: ServiceJsService) { 
    serviceJs.traerJs(["prueba"])
  }


  ngOnInit(): void {
  }

}
