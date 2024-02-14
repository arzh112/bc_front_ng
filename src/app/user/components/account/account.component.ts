import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { User } from 'src/app/core/models/user';
import { OrderService } from 'src/app/core/services/order.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  orders$!: Observable<Order[]>;
	user$!: Observable<User>;
	user!: User;
	orders!: Order[];

	constructor(
		private orderService: OrderService,
		private userService: UserService,
    private activatedRoute: ActivatedRoute
	) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.user = data['user'];
      this.orders = data['orders'];
    })
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
