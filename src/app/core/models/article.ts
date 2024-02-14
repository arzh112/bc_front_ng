import { Service } from "./service";

export interface Article {
    id?: number;
    name: string;
    price?: number;
    description?: string;
    services?: Service[];
}