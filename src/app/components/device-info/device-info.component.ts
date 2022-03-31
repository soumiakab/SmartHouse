import { Component, OnInit } from '@angular/core';
import { House } from 'src/app/core/models/house';
import { HouseInfoService } from 'src/app/services/house-service/house-info.service';

@Component({
  selector: 'app-device-info',
  templateUrl: './device-info.component.html',
  styleUrls: ['./device-info.component.css']
})
export class DeviceInfoComponent implements OnInit {

  house:House | undefined;
  constructor(private houseService: HouseInfoService){
  }

  async ngOnInit():Promise<void>{
    await this.getHouseInfo();
    console.log(this.house);
  }

   async getHouseInfo(){
    this.houseService.getHouseInfo().subscribe(houseInfo =>{console.log(houseInfo);this.house = houseInfo});

  }

  status=true;
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
  iconName=this.onIcon;
  statusValue="ON";

  title = 'smartHouseProject';

  changeStatus(){
    if(this.status==true){
      this.iconClass=this.iconOffClass;
      this.containerClass=this.offClass;
      this.butttonClass=this.offButton;
      this.iconName=this.offIcon;
      this.statusValue="OFF";
      this.status=false;
    }
    else{
      this.iconClass=this.iconOnClass;
      this.containerClass=this.onClass;
      this.butttonClass=this.onButton;
      this.iconName=this.onIcon;
      this.statusValue="ON";
      this.status=true;
    }
  }

}
