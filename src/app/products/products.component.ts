import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {ProductsService} from '../services/products.service';

@Component({
  selector: 'app-products',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  standalone: true
})
export class ProductsComponent implements OnInit {
  products! : any

  constructor(private productservice: ProductsService) {
  }

  getAllProducts(){
    this.products = this.productservice.getAllProducts().subscribe(
      {
        next : value => {
          this.products = value;
        },
        error: error => {
          console.log(error);
        }
      }
    )
    console.log(this.products)
  }

  ngOnInit(): void {
    this.getAllProducts()
  }


  deleteProduct(product: any){
    this.products = this.products.filter((p: any) => p.id != product.id)
  }


  handleDelete(p: any) {
    let v = confirm("You sure ?")
    if (v==true){
      this.productservice.deleteProduct(p).subscribe(
        {
          next: value => {
            this.deleteProduct(p);
            // this.getAllProducts()
          },
          error: err => {
            console.log(err)
          }
        }
      )

    }
  }
}
