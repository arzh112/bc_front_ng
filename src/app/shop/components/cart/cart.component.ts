import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Line } from 'src/app/core/models/line';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  @Input() lines!: Line[];
  
}
