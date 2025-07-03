import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // products = [
  //   {id: 1, name: 'Mac', price: 100, selected: false},
  //   {id: 2, name: 'Windows', price: 200, selected: true},
  //   {id: 3, name: 'Microsoft', price: 150, selected: false},
  //   {id: 4, name: 'Microsoft', price: 150, selected: false}
  //
  // ]

  constructor(private http: HttpClient) {
  }

  getAllProducts(): Observable<any> {
    setTimeout(() => {}, 4000);
    return this.http.get("http://localhost:8081/api/products/products");
  }

  deleteProduct(product: any) {
    return this.http.delete(`http://localhost:8081/api/products/products/${product.id}`);
  }
}
