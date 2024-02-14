import { Article } from "./article";
import { Service } from "./service";

export interface Line {
    quantity: number;
    service: Service;
    article: Article;
    price: number;
}