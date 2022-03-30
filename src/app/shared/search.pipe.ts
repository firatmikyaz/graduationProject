import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchWord: string): any {
    if(searchWord==undefined || searchWord==null || searchWord==""){
      return value;
    }
    const newArray=[];
    for(let item of value){
      if(item.category.toUpperCase().includes(searchWord.toUpperCase())){
        newArray.push(item);
      } 
    }
    return newArray;
  }
}
