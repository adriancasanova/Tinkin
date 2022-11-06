import { Component, OnInit } from '@angular/core';
import {DATA} from '../../data'
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  public data: any = DATA; 
  constructor() { }
  model: any = {};




  ngOnInit(): void {
  
  }

  findAll() {
    this.data.find(this.model)
  }

}
