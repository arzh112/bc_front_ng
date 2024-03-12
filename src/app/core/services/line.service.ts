import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { Service } from '../models/service';
import { Line } from '../models/line';

@Injectable({
  providedIn: 'root'
})
export class LineService {

  constructor() { }

  createLine(article: Article, service: Service, quantity: number): Line {
    const line: Line = {
      article: article,
      service: service,
      quantity: quantity,
      price: (article.price + service.price) * quantity
    };
    return line;
  }
}
