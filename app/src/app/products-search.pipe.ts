import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productsSearch'
})
export class ProductsSearchPipe implements PipeTransform {


  transform(value: any, searchValue: any): any {

    if (!searchValue) return value;
    return value.filter((v: any) => v.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)

  }

}
