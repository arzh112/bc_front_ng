import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  
  // Injection de l'authService contenant la méthode isAuthenticated
  const auth = inject(AuthService);
  // Injection du router
  const router = inject(Router);

  // Si l'utilisateur n'est pas authentifié, retourné false
  if(!auth.isAuthenticated()) {
      router.navigateByUrl('/login');
      return false;
  }
  return true;
};
