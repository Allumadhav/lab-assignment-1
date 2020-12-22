import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  hobbies:string[]= [
    'dancing',
    'singing',
    'internet'
    ];

    servicemethod():string{
      return 'Its just a simple service method';
      }
  constructor() { }

  
 
    
   
}
