import { State } from "./State";

export type Address = {
   neighborhood: string,
   city: string,
   state: State,
   country?: string
}