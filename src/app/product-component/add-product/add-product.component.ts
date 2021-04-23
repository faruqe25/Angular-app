import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'src/app/model/IProduct';
import { IProductType } from 'src/app/model/IProductType';
import { CommunicationService } from 'src/app/services/communication.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
 addProudctInfoForm: FormGroup;
 productInfo:IProduct;
 editMode:boolean=false;
 productTypeList:Array<IProductType>;

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.addProudctInfoForm=new FormGroup({
      productName:new FormControl("",[Validators.required]),
      productPrice:new FormControl("",[Validators.required]),
      productImageLink:new FormControl(""),
      productDescription:new FormControl("",[Validators.required]),
      productId:new FormControl("0"),
      productTypeId:new FormControl("",[Validators.required])

    });
    this.productTypeList=this.productService.getAllProductType();
  }
  addProductInfo(){

    if (localStorage.getItem("ProductInfoId")) {
      var ProductInfoId = JSON.parse(localStorage.getItem("ProductInfoId"));
      ProductInfoId++;
      localStorage.setItem("ProductInfoId", JSON.stringify(ProductInfoId));
    }
    else {
      localStorage.setItem("ProductInfoId", JSON.stringify(1));
    }
    this.productService.addProductInfo(this.productInfoMapper());


    this.addProudctInfoForm.reset();
    this.addProudctInfoForm.patchValue({
      productTypeId: ""
    })

  }
  productInfoMapper(){
    return this.productInfo={
      productName:this.addProudctInfoForm.get('productName').value,
      productId:+localStorage.getItem("ProductInfoId"),
      productDescription:this.addProudctInfoForm.get('productDescription').value,
      productPrice:this.addProudctInfoForm.get('productPrice').value,
      productImageLink:this.addProudctInfoForm.get('productImageLink').value,
      producTypetId:this.addProudctInfoForm.get('productTypeId').value,
    }

  }

}
