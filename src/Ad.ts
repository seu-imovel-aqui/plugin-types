import { Property } from "./Property";
import { TypeAd } from "./TypeAd";

export type Ad = {
    price: number | string,
    link: string,
    typeAd: TypeAd,
    property: Property,
}
