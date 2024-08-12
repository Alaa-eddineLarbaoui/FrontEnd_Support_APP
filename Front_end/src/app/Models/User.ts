import {Erole} from "./Erole";

export interface User {
  username : string,
  id : number,
  password : string,
  email : string
  erole:Erole.USER,
}
