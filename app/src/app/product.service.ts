import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { ProductInfo } from './interface/interface-template';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private angularFireDatabase: AngularFireDatabase) {
  }


  private log(message: string) {
    window.alert('ProductService: ' + message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  public findProduct(term: any): Observable<any> {
    return this.angularFireDatabase.list<ProductInfo>('products', (ref) =>
      ref.orderByChild('name')
        .startAt(term)
        .endAt(term + '\uf8ff')
    )
      .valueChanges()
      .pipe(catchError(this.handleError<ProductInfo[]>(`getProductsQuery`)));
  }
}
