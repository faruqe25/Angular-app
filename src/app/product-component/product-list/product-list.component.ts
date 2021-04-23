import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/IProduct';
import { CommunicationService } from 'src/app/services/communication.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 productList:Array<IProduct>;
  constructor(private productService:ProductService,
    private communication:CommunicationService) { }

  ngOnInit() {
    this.productList=this.productService.getAllProductInfo();
  }
  AddToCart(data){
    var list=[];
    if(localStorage.getItem("CartList"))
    {
     list=JSON.parse(localStorage.getItem("CartList"));
     list=[data,...list]
    }
    else{
      list=[data]
    }
    localStorage.setItem("CartList",JSON.stringify(list));
    this.communication.GetCartUpdatedCount();

  }
}
