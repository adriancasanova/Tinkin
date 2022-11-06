import { Component, OnInit } from '@angular/core';
import { DATA } from 'src/app/data';

@Component({
  selector: 'app-panel-usuario',
  templateUrl: './panel-usuario.component.html',
  styleUrls: ['./panel-usuario.component.css']
})
export class PanelUsuarioComponent implements OnInit {
  public data: any = DATA; 
  constructor() { }

  ngOnInit(): void {
  }

}
