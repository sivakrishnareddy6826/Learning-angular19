import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'naPipe'
})
export class NaPipePipe implements PipeTransform {

  transform(value: unknown): unknown {
    if(value == "" || value == null || value == undefined){
      return "NA";
    }else{
      return value;
    }

  }

}
