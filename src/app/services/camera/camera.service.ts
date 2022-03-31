import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Camera } from 'src/app/core/models/camera';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  url = 'http://localhost:3000/cameras';
  constructor(private http: HttpClient) { }

  getCameras(){
    return this.http.get<Camera[]>(this.url);
  }

  addCamera(camera:Camera){
      return this.http.post<Camera>(this.url,camera);
  }

  deleteCamera(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }

  getCamera(id:number){
    return this.http.get<Camera>(`${this.url}/${id}`);
  }

  updateCamera(camera:Camera){

    return this.http.put<Camera>(`${this.url}/${camera.id}`,camera);
  }

}
