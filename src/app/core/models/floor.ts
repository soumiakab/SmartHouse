import { Room } from "./room";
export interface Floor {
  id:number;
  number: number;
  name?: string;
  rooms:Room[];
}
