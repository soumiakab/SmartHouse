import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from 'src/app/core/models/device';
import {DeviceEnum} from 'src/app/core/enums/deviceEnum'
import { Lamp } from 'src/app/core/models/lamp';
import { Tv } from 'src/app/core/models/tv';
import { Camera } from 'src/app/core/models/camera';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {DeviceList} from 'src/app/core/models/deviceList'

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) { }

   getDevices(){
    return this.http.get<DeviceList>("http://localhost:3000/devices");
  }


   getLamps(){
    let lamps: Lamp[] | undefined =[];
     this.getDevices().subscribe(devices => {
        lamps = devices.lamps;
    })
    return lamps;
  }

  getTvs(){
    let tvs: Tv[] | undefined =[];
    this.getDevices().subscribe(devices => {
      tvs = devices.tvs;
   })
   return tvs;
  }

  getCameras(){
    let cameras: Camera[] | undefined =[];
    this.getDevices().subscribe(devices => {
      cameras = devices.cameras;
   })
   return cameras;
  }


  getDevice(id:number,type:DeviceEnum){

    switch(type){
      case DeviceEnum.Lamp:
        return this.http.get<Device>("http://localhost:3000/devices");
        break;
      case DeviceEnum.TV:
        return this.http.get<Device>("http://localhost:3000/devices");
        break;
      case DeviceEnum.CAMERA:
        return this.http.get<Device>("http://localhost:3000/devices");
        break;
    }
  }

  updateDeviceStatus(id:number,type:DeviceEnum){

    switch(type){
      case DeviceEnum.Lamp:
        return this.http.put<Device>("http://localhost:3000/devices",{
        });
        break;
      case DeviceEnum.TV:
        return this.http.put<Device>("http://localhost:3000/devices",{
        });
        break;
      case DeviceEnum.CAMERA:
          return this.http.put<Device>("http://localhost:3000/devices",{
          });
        break;
    }

  }
}
