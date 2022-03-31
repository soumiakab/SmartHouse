import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tv } from 'src/app/core/models/tv';

@Injectable({
  providedIn: 'root'
})
export class TvService {


  url = 'http://localhost:3000/tvs';
  constructor(private http: HttpClient) { }

  getTvs(){
    return this.http.get<Tv[]>("http://localhost:3000/tvs");
  }

  addTv(tv:Tv){
      return this.http.post<Tv>(this.url,tv);
  }

  deleteTv(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }

  getTv(id:number){
    return this.http.get<Tv>(`${this.url}/${id}`);
  }

  updateTv(tv:Tv){

    return this.http.put<Tv>(`${this.url}/${tv.id}`,tv);
  }
}
