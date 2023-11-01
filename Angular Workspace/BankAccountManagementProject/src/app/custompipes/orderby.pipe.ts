import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby'
})
export class OrderbyPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any[] {
    if(typeof value[0][args[0]]=='number')
        return this.numericSort(value,args[0]);
    else
        return this.otherSort(value,args[0]);
  }
  numericSort(array:any[],property:string) :any[]{
    return array.sort((object1,object2)=>object1[property]-object2[property]);
  }
  otherSort(array:any[],property:string):any[]{
    return array.sort((object1,object2)=>{
      if(object1[property]>object2[property])
        return 1;
      else if (object1[property]<object2[property])
        return -1;
      else return 0;
    });
  }
}

