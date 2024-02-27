import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrderService } from 'src/app/core/services/order.service';

// Définition d'une constante qui retourne le résultat méthode getAllOrders du Service des commmandes.
export const orderResolver: ResolveFn<Order[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(OrderService).getAllOrders();
};
