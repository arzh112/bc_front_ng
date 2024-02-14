import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrderService } from 'src/app/core/services/order.service';

export const orderResolver: ResolveFn<Order[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(OrderService).getAllOrders();
};
