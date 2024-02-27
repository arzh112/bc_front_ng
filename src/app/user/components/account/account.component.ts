import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  user!: User;
  orders!: Order[];
  readyOrders: Order[] = [];
  collectedOrders: Order[] = [];
  prepOrders: Order[] = [];

  constructor(
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // récupération des données de la route résolue
    this.activatedRoute.data.subscribe((data) => { 
    this.user = data['user'];
    this.orders = data['orders'];
    // Séparation des commandes en fonction de leurs status
    for(let order of this.orders) { 
      if(order.status === 'prête') {
        this.readyOrders.push(order);
      } else if(order.status === 'récupérée') {
        this.collectedOrders.push(order);
      } else {
        this.prepOrders.push(order);
      }
    }
  });
}

  // ngOnInit() {
  // 	this.userService.getOneUser().subscribe((data) => {
  // 		this.user = data;
  // 	});
  // 	this.orderService.getAllOrders().subscribe((data) => {
  // 		this.orders = data;
  // 	})
  // }
}
