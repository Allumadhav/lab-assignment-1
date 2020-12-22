import { Component, OnInit } from '@angular/core';
import { __exportStar } from 'tslib';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-emp',
  template:`
  <h1>Hi,  {{data}}</h1>
<ul *ngFor="let h of hobbies">
<li> {{h}} </li>
</ul>
  `,
  styles:[]
})
export class EmpComponent implements OnInit {

  public hobbies=[]
  data: string;
  constructor(private _es: ServiceService) { }
  ngOnInit() {
    
    this.hobbies=this._es.hobbies;
    
    this.data=this._es.servicemethod();
  }

}
