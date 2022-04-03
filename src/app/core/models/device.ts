import {StatusEnum} from "../enums/status-enum";
import { Floor } from "./floor";
import { Room } from "./room";
export interface Device {
  id:number,
  status:StatusEnum,
  number: number,
  type?:string,
  floor?:Floor,
  room?:Room,
}
