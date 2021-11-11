import { Address } from "./Address";
import { Characteristics } from "./Characteristics";
import { PropertyImage } from "./PropertyImage";
export declare type Property = {
    description: string;
    address: Address;
    type: string;
    images: PropertyImage[];
    characteristics: Characteristics[];
};