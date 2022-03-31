import { Camera } from "./camera";
import { Lamp } from "./lamp";
import { Tv } from "./tv";

export interface Room {
  number: number;
  lamps: Lamp[];
  tvs:Tv[];
  cameras:Camera[];
}
