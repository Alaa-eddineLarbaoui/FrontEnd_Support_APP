import {User} from "./User";
import {TechnicienIT} from "./TechnicienIT";
import {Equipement} from "./Equipement";
import {Panne} from "./panne";
import {EtatTicket} from "../Enums/EtatTicket";

export interface TicketOfSupport {
  id_Ticket: number;
  creation_date: Date;
  description: string;
  etatTicket: EtatTicket;
  user: User;
  technicienIT: TechnicienIT;
  equipement: Equipement;
  panne: Panne;
}
