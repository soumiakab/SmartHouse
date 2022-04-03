import { Component, Input, OnInit ,Output, EventEmitter } from '@angular/core';
import { DeviceEnum } from 'src/app/core/enums/deviceEnum';
import { StatusEnum } from 'src/app/core/enums/status-enum';

@Component({
  selector: 'app-button-turn',
  templateUrl: './button-turn.component.html',
  styleUrls: ['./button-turn.component.css']
})
export class ButtonTurnComponent implements OnInit {

  @Input()
  status:StatusEnum;
  @Output() changestatusEvent = new EventEmitter<string>();

  stausOn:StatusEnum = StatusEnum.ON;
  onClass="row card-panel card-panel green lighten-4 valign-wrapper";
  offClass="row card-panel red lighten-3 valign-wrapper";
  onButton="btn-floating btn-large waves-effect waves-light green";
  offButton="btn-floating btn-large red";
  onIcon="play_arrow";
  offIcon="power_settings_new";
  iconOnClass="material-icons green-text text-lighten-5";
  iconOffClass="material-icons";
  constructor() { }

  ngOnInit(): void {
  }

  iconName(state:StatusEnum){
    if(state==StatusEnum.ON) {
      return this.onIcon;
    }
    else{
      return this.offIcon;
    }
  }

  changeStatus(){
    this.changestatusEvent.emit();
  }

}
