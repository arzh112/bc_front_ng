import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Service } from 'src/app/core/models/service';
import { ServiceService } from 'src/app/core/services/service.service';

export const serviceResolver: ResolveFn<Service[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(ServiceService).getAllService();
};
