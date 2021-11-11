import { Address } from "./Address";
import { Characteristic } from "./Characteristic";
import { PropertyImage } from "./PropertyImage";

export type Property = {
    description: string,
    address: Address,
    type: string,
    images: PropertyImage[],
    characteristics: Characteristic[]
}