import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiOrdersUrl: string = environment.apiUrl + "/api/orders";

  constructor(private http: HttpClient) { }

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiOrdersUrl);
  }

  getOrderById(orderId: number): Observable<Order> {
    return this.http.get<Order>(this.apiOrdersUrl + "/" + orderId);
  }

  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiOrdersUrl, order);
  }

  updateUser(orderId: number, order: Order): Observable<Order> {
    return this.http.put<Order>(this.apiOrdersUrl + "/" + orderId, order);
  }
}
