import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {
  
  transform(value: any[], h: any): any {
    if(h === 'dancing'){
    return "Good hobbie is "+value;
    }
    else
    {
    return "bad hobbie is "+value;
    }
  }
}
