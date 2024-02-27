import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Service } from 'src/app/core/models/service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ServiceService } from 'src/app/core/services/service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  services!: Service[];
  services$!: Observable<Service[]>;

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService) {}

  ngOnInit(): void {
    this.services$ = this.activatedRoute.data.pipe(
      map(data => data['services'])
    )
  }

  isLogged(): boolean {
    if(this.authService.isAuthenticated()) {
      return true;
    }
    return false;
  }
}

