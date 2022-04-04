import { Component, OnInit } from '@angular/core';
import { House } from 'src/app/core/models/house';
import { HouseInfoService } from 'src/app/services/house-service/house-info.service';

@Component({
  selector: 'app-house-info',
  templateUrl: './house-info.component.html',
  styleUrls: ['./house-info.component.css']
})
export class HouseInfoComponent implements OnInit {

  house:House;
  constructor(private houseService: HouseInfoService){}
  ngOnInit(): void {
    this.getHouseInfo();

  }

  getHouseInfo(): void {
    this.houseService.getHouseInfo().subscribe(house =>this.house = house);
  }

}
