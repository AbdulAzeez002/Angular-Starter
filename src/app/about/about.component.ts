import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/api/products/product.service';
import { ProductRepresentation } from '../services/api/models/product-representation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(
    private activateRoute: ActivatedRoute,
    private service: ProductService
  ) {}

  ngOnInit(): void {
    // console.log(this.activateRoute,'activate Route')
    // this.param=this.activateRoute.snapshot.params['username']
    // this.queryParam=this.activateRoute.snapshot.queryParams['course']
    this.service.getAllProductsWithLimit().subscribe(
      (data: ProductRepresentation[]) => {
        console.log(data[0].category, 'data');
      },
      (error: any) => {
        console.error('An error occurred:', error);
        // You can handle the error here, such as displaying an error message to the user.
      }
    );
  }

  param: any;
  queryParam: any;
}
