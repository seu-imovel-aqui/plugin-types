import { Property } from "./Property";
import { TypeAd } from "./TypeAd";
export declare type Ad = {
    price: number | string;
    link: string | URL;
    typeAd: TypeAd;
    property: Property;
};
