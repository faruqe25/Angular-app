import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProductType } from 'src/app/model/IProductType';
import { CommunicationService } from 'src/app/services/communication.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product-type',
  templateUrl: './add-product-type.component.html',
  styleUrls: ['./add-product-type.component.css']
})
export class AddProductTypeComponent implements OnInit {
  addProductForm: FormGroup;
  productType: IProductType;
  productTypeList: Array<IProductType>;
  editMode: boolean = false;
  constructor(private ProductService: ProductService,
    private communication: CommunicationService) { }

  ngOnInit() {
    this.addProductForm = new FormGroup({
      productType: new FormControl('', [Validators.required]),
      productTypeId: new FormControl('0'),
    });
    this.communication.GetTypeInfo.subscribe((data) => {
      this.addProductForm.patchValue({
        productType: data.productType,
        productTypeId: data.productTypeId
      })
      this.editMode = true;

    });
  }
  addNewProductType() {
    if (!this.editMode) {
      if (localStorage.getItem("ProductTypeId")) {
        var ProductTypeId = JSON.parse(localStorage.getItem("ProductTypeId"));
        ProductTypeId++;
        localStorage.setItem("ProductTypeId", JSON.stringify(ProductTypeId));
      }
      else {
        localStorage.setItem("ProductTypeId", JSON.stringify(1));
      }
      this.ProductService.addProductType(this.productTypeMapper());

      this.communication.GetUpdateProductTypeList();
      this.addProductForm.reset();

    }
    else {

      this.ProductService.editProductType(this.productTypeMapper(),
        this.addProductForm.get('productTypeId').value);
      this.editMode = false;
      this.addProductForm.reset();
      this.communication.GetUpdateProductTypeList()
    }


  }
  productTypeMapper() {
    if (!this.editMode) {
      return this.productType = {
        productType: this.addProductForm.get('productType').value,
        productTypeId: +localStorage.getItem("ProductTypeId")
      }
    }
    return this.productType = {
      productType: this.addProductForm.get('productType').value,
      productTypeId: this.addProductForm.get('productTypeId').value
    }
  }

}
