
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/core/models/article';
import { Line } from 'src/app/core/models/line';
import { Service } from 'src/app/core/models/service';
import { User } from 'src/app/core/models/user';
import { LineService } from 'src/app/core/services/line.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  
  articlesList!: Article[];
  servicesList!: Service[];

  user!: User;
  formArticle!: Article;

  linesArticle!: Article;
  linesService!: Service;
  lines: Line[] = [];
  
  shopForm: FormGroup = new FormGroup({
    article: new FormControl(''),
    service: new FormControl(''),
    quantity: new FormControl(''),
  });


  constructor(private activatedRoute: ActivatedRoute, private lineService: LineService) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => { 
      this.articlesList = data['articles'];
      this.servicesList = data['services'];
      this.user = data['user'];
      console.log(this.articlesList);
      console.log(this.servicesList);
    })
  }

  onSubmit(): void {
    console.log(this.shopForm.value);
    
    const newLine = this.lineService.createLine(
      this.shopForm.value.article, 
      this.shopForm.value.service, 
      this.shopForm.value.quantity
    );
    this.lines.push(newLine);
  }


}
