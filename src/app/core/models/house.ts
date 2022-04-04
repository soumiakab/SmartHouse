import { User } from "./user";
import { Floor } from "./floor";
import { DeviceList } from "./deviceList";
export interface House{
  id:number;
  name: string;
  address:string;
  user?:User;
  floors?: Floor[];
  devices?:DeviceList;
}
