import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';

export const userResolver: ResolveFn<User> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(UserService).getOneUser();
};
