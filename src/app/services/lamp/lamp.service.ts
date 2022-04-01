import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lamp } from 'src/app/core/models/lamp';

@Injectable({
  providedIn: 'root'
})
export class LampService {

  url = 'http://localhost:3000/lamps';
  constructor(private http: HttpClient) { }

  getLamps(){
    return this.http.get<Lamp[]>(this.url);
  }

  addLamp(lamp:Lamp){
      return this.http.post<Lamp>(this.url,lamp);
  }

  deleteLamp(id:number){
    return this.http.delete(`${this.url}/${id}`).subscribe(data =>console.log(data));
  }

  getLamp(id:number){
    return this.http.get<Lamp>(`${this.url}/${id}`);
  }

  updateLamp(lamp:Lamp){

    return this.http.put<Lamp>(`${this.url}/${lamp.id}`,lamp);
  }
}
