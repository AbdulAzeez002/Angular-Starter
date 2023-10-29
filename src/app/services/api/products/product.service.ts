import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductRepresentation } from '../models/product-representation';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl: string = 'https://fakestoreapi.com/';

  constructor(private http: HttpClient) {}

  // api to get all products
  getAllProductsWithLimit(limit: number = 5): any {
    const url = `${this.baseUrl}products?limit=${limit}`;
    return this.http.get<ProductRepresentation[]>(url);
  }

  // api to create a product
  createProduct(product: ProductRepresentation) {
    const url = `${this.baseUrl}products`;
    return this.http.post<ProductRepresentation>(url,product);
  }
}
