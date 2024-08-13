import {Erole} from "../Enums/Erole";

export interface Technicien {
  username : string,
  id : number,
  password : string,
  email : string
  erole:Erole.TECHNICIEN,
}
