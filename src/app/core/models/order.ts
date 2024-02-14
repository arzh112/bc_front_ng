import { Line } from "./line";
import { User } from "./user";

export interface Order {
    id?: number;
    status: string;
    payment: string;
    deposit?: string;
    pickUp?: string;
    content: Line[];
    totalPrice: number;
    message?:string;
    client: User;
    employee: User;
}