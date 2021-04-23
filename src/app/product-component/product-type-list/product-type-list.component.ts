import { Component, OnInit } from '@angular/core';
import { IProductType } from 'src/app/model/IProductType';
import { CommunicationService } from 'src/app/services/communication.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-type-list',
  templateUrl: './product-type-list.component.html',
  styleUrls: ['./product-type-list.component.css']
})
export class ProductTypeListComponent implements OnInit {
productTyeList:Array<IProductType>;
  constructor(private productService:ProductService,
    private communication:CommunicationService) { }

  ngOnInit() {
    this.productTyeList=this.productService.getAllProductType();
    this.communication.GetUpdateList.subscribe(
      (data)=>{
        this.productTyeList=data
      }
    );
  }
  UpdateType(id){
    this.communication.GetProductTypeInfo(Number(id));

  }
  DeleteType(id){
    var a=JSON.stringify(this.productService.getProductTypeIndex(id));
    var index=Number(a);
    this.productTyeList.splice(index,1).splice(0);
    localStorage.setItem("ProductTypeList",JSON.stringify(this.productTyeList))

  }

}
