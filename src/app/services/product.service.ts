import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  search = new Subject<string>();
  isDeleted = new Subject<boolean>();
  constructor(private http: HttpClient) {}
  //User get product
  getData() {
    return this.http.get('http://localhost:3000/products').pipe(
      map((response) => {
        const arr = [];
        for (let key in response) {
          arr.push(response[key]);
        }
        return arr;
        // console.log(response);
      })
    );
  }
  //User go productdetail page
  getDetail(id) {
    return this.http.get('http://localhost:3000/products/' + id).pipe(
      map((response) => {
        let neww: any = [];
        for (let key in response) {
          neww = response;
        }
        return neww;
      })
    );
  }
  //add product dbjson
  addData(product) {
    return this.http.post('http://localhost:3000/products', product);
  }
  //update product dbjson
  updateData(product, id) {
    return this.http.patch('http://localhost:3000/products/' + id, product);
  }
  //delete product dbjson
  deleteData(id) {
    return this.http.delete('http://localhost:3000/products/' + id);
  }
}
