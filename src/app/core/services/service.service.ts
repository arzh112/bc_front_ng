import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Service } from '../models/service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  apiServicesUrl: string = environment.apiUrl + "/api/services";

  constructor(private http: HttpClient) { }

  getAllService(): Observable<Service[]> {
    return this.http.get<Service[]>(this.apiServicesUrl);
  }

  getServiceById(serviceId: number): Observable<Service> {
    return this.http.get<Service>(this.apiServicesUrl + "/" + serviceId);
  }
}
