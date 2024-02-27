import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Récupération du token
    const authToken = this.authService.getToken();

    if(authToken) {
      // Clonage de la requête et remplacement par la nouvelle requête 
      // mise à jour avec l'en-tête d'authorisation contenant le token.
      req = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + authToken)
      });
    }
    return next.handle(req);
  }
}
