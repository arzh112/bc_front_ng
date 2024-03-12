import { Article } from "./article";

export interface Service {
    id: number;
    name: string;
    price: number;
    description: string;
    articles: Article[];
}