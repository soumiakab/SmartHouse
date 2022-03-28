import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
