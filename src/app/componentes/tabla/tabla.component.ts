import { Component, OnInit } from '@angular/core';
import {DATA} from '../../data'
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  public data: any = DATA; 
  constructor() { }
  model: any = {};

  ngOnInit(): void {
  
  }
  newReceta(): void {
   this.data.push(this.model);
  }

  deleteReceta(): void {
    
  }

  viewReceta(): void {
    
  }

  updateReceta(): void {    
  }

  findAll() {
    this.data.find(this.model)
  }


}
