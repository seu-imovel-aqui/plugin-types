import { Property } from "./Property";
import { TypeAd } from "./TypeAd";

export type Ad = {
    price: number
    link: string,
    typeAd: TypeAd,
    property: Property,
}