import { Lamp } from "./lamp";
import { Camera } from "./camera";
import { Tv } from "./tv";
export interface DeviceList {
  lamps?:Lamp[],
  tvs?:Tv[],
  cameras?:Camera[]
}
