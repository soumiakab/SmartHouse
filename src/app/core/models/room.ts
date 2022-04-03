import { Camera } from "./camera";
import { Lamp } from "./lamp";
import { Tv } from "./tv";

export interface Room {
  number: number;
  name?: string;
  lamps: Lamp[];
  tvs:Tv[];
  cameras:Camera[];
}
