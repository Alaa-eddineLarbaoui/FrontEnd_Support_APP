import {EquipementStatus} from "../Enums/EquipementStatus";

export interface Equipement{
  id: number
  name: string
  type:string
  purchase_Date:string
  description: string
  status:EquipementStatus
}
