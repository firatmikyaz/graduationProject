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

  getDetail(id) {
    return this.http.get('http://localhost:3000/products/' + id).pipe(
      map((response) => {
        let neww;
        for (let key in response) {
          neww = response;
        }
        return neww;
      })
    );
  }
  addData(product) {
    return this.http.post('http://localhost:3000/products', product);
  }
  updateData(product, id) {
    return this.http.patch('http://localhost:3000/products/' + id, product);
  }
  deleteData(id) {
    return this.http.delete('http://localhost:3000/products/' + id);
  }
}
