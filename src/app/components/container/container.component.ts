import { Component, OnInit } from '@angular/core';
import { LampService } from '../../services/lamp/lamp.service';
import { TvService } from '../../services/tv/tv.service';
import { CameraService } from '../../services/camera/camera.service';
import { DeviceService } from '../../services/device/device.service';
import {StatusEnum} from 'src/app/core/enums/status-enum';
import { DeviceList } from 'src/app/core/models/deviceList';
import { Lamp } from 'src/app/core/models/lamp';
import { Tv } from 'src/app/core/models/tv';
import { Camera } from 'src/app/core/models/camera';
import { DeviceEnum } from 'src/app/core/enums/deviceEnum';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

export class ContainerComponent implements OnInit {

  devices:DeviceList ={};
  lamps:Lamp[] = [];
  tvs:Tv[] =[];
  cameras:Camera[] = [];

   type: DeviceEnum[] = [DeviceEnum.Lamp,DeviceEnum.TV,DeviceEnum.CAMERA];


  constructor(private deviceService: DeviceService, private lampService: LampService,private tvService: TvService,private cameraService: CameraService){
  }

  async ngOnInit():Promise<void>{
    await this.getDevices();
  }

   async getDevices(){
    this.lampService.getLamps().subscribe(lamps =>{console.log(lamps);this.lamps = lamps});
    this.tvService.getTvs().subscribe(tvs =>{console.log(tvs);this.tvs = tvs});
    this.cameraService.getCameras().subscribe(cameras =>{console.log(cameras);this.cameras = cameras});

  }

  onClass="row card-panel card-panel green lighten-4 valign-wrapper";
  offClass="row card-panel red lighten-3 valign-wrapper";
  onButton="btn-floating btn-large waves-effect waves-light green";
  offButton="btn-floating btn-large red";
  onIcon="play_arrow";
  offIcon="power_settings_new";
  iconOnClass="material-icons green-text text-lighten-5";
  iconOffClass="material-icons";

  iconClass=this.iconOnClass;
  containerClass=this.onClass;
  butttonClass=this.onButton;
  statusValue=StatusEnum.ON;

  title = 'smartHouseProject';

  changeStatus(object:any,type:DeviceEnum){
    object.status=this.turn(object.status);
    switch(type){
      case DeviceEnum.Lamp:
        this.lampService.updateLamp(object as Lamp);
        break;
      case DeviceEnum.TV:
        this.tvService.updateTv(object as Tv);
        break;
      case DeviceEnum.CAMERA:
        this.cameraService.updateCamera(object as Camera);
        break;
    }
  }

  deleteDevice(object:any,type:DeviceEnum,i:number){
    switch(type){
      case DeviceEnum.Lamp:
        this.lampService.deleteLamp((object as Lamp).id);
        this.lamps = this.lamps.filter(item => item.id != (object as Lamp).id);
        //console.logdelete this.lamps[i];
        break;
      case DeviceEnum.TV:
        this.tvService.deleteTv((object as Tv).id);
        this.tvs = this.tvs.filter(item => item.id != (object as Tv).id);
        break;
      case DeviceEnum.CAMERA:
        this.cameraService.deleteCamera((object as Camera).id);
        this.cameras = this.cameras.filter(item => item.id != (object as Camera).id);
        break;
    }

  }


  iconName(status:StatusEnum){
    if(status==StatusEnum.ON) {
      return this.onIcon;
    }
    else{
      return this.offIcon;
    }
}

  turn(status:StatusEnum){
    if(status==StatusEnum.ON) {
      return StatusEnum.OFF;
    }
    else{
      return StatusEnum.ON;
    }
  }
}
