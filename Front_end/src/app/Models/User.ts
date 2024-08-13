import {Erole} from "../Enums/Erole";

export interface User {
  username : string,
  id : number,
  password : string,
  email : string
  role:Erole.USER,
}
