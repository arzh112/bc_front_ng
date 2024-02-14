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
    // Get the auth token from the service.
    const authToken = this.authService.getToken();
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    if(authToken) {
      req = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + authToken)
      });
    }
    return next.handle(req);
  }
}
