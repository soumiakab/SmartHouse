import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { House } from 'src/app/core/models/house';

@Injectable()
export class HouseInfoService {

  constructor(private http: HttpClient) { }

  getHouseInfo(){
    return this.http.get<House>("http://localhost:3000/house");
  }
}
