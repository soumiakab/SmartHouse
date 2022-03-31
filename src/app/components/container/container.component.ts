import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../../services/device/device.service';
import {StatusEnum} from 'src/app/core/enums/status-enum';
import { DeviceList } from 'src/app/core/models/deviceList';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

export class ContainerComponent implements OnInit {

  devices:DeviceList ={};
  constructor(private deviceService: DeviceService){
  }

  async ngOnInit():Promise<void>{
    await this.getDevices();
    console.log(this.devices);
  }

   async getDevices(){
    this.deviceService.getDevices().subscribe(devices =>{console.log(devices);this.devices = devices});

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

  changeStatus(status:StatusEnum){
    if(status==StatusEnum.ON) {
      this.iconClass=this.iconOffClass;
      this.containerClass=this.offClass;
      this.butttonClass=this.offButton;
    }
    else{
      this.iconClass=this.iconOnClass;
      this.containerClass=this.onClass;
      this.butttonClass=this.onButton;
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

}
