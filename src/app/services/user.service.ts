import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  login = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  //save user dbjson
  postData(user) {
    return this.http.post('http://localhost:3000/users', user);
  }
  //read dbjson users
  getData() {
    return this.http.get('http://localhost:3000/users').pipe(
      map((responseData) => {
        let newArray = [];
        for (let key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            newArray.push(responseData[key]);
          }
        }
        return newArray;
      })
    );
  }
}
