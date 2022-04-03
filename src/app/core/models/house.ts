import { User } from "./user";
import { Floor } from "./floor";
export interface House{
  id:number;
  name: string;
  address:string;
  user:User;
  floors?: Floor[];
}
