import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/core/models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/users';

  login(user: User) {
    console.log(user);

    return this.http.get<User[]>(`${this.url}?userName=${user.userName}&password=${user.password}`);
  }
}
