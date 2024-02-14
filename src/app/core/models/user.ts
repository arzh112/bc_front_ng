import { Order } from "./order";

export interface User {
    id?: number;
    role?: string;
    gender?: string;
    firstname?: string;
    lastname?: string;
    address?: string;
    birthdate?: string; 
    email: string;
    password: string;
    orders?: Order[];
}