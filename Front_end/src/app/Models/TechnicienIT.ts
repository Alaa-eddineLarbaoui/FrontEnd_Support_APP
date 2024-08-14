import {Erole} from "../Enums/Erole";

export interface TechnicienIT {
  username : string,
  id : number,
  password : string,
  email : string
  erole:Erole.TECHNICIEN,
}
