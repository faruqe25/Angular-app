import { JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../model/IProduct';
import { IProductType } from '../model/IProductType';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  //This  code written for the product Type
  addProductType(productType) {
    var list = [];
    if (localStorage.getItem("ProductTypeList")) {
      list = JSON.parse(localStorage.getItem("ProductTypeList"));
      list = [productType, ...list]
    }
    else {
      list = [productType]
    }
    localStorage.setItem("ProductTypeList", JSON.stringify(list));
  }
  getAllProductType(): Array<IProductType> {
    return JSON.parse(localStorage.getItem("ProductTypeList"))
  }
  editProductType(productType, id) {
    var index = Number(this.getProductTypeIndex(id));
    var productTypelist = [];

    productTypelist = JSON.parse(localStorage.getItem("ProductTypeList"))
    productTypelist.splice(index, 1, productType)


    localStorage.setItem("ProductTypeList", JSON.stringify(productTypelist))
  }
  getProductTypeIndex(id) {
    var productTypelist = [];
    if (localStorage.getItem("ProductTypeList")) {
      productTypelist = JSON.parse(localStorage.getItem("ProductTypeList"));
      return productTypelist.findIndex(item => {
        return (item["productTypeId"] === id)
      })
    }
    return false;

  }
  // End

  // This code Written for product Info
  addProductInfo(product) {
    var list = [];
    if (localStorage.getItem("ProductList")) {
      list = JSON.parse(localStorage.getItem("ProductList"));
      list = [product, ...list]
    }
    else {
      list = [product]
    }
    localStorage.setItem("ProductList", JSON.stringify(list));
  }
  getAllProductInfo(): Array<IProduct> {
    return JSON.parse(localStorage.getItem("ProductList"))
  }
  editProductInfo(productType, id) {
    var index = Number(this.getProductInfoIndex(id));
    var productlist = [];

    productlist = JSON.parse(localStorage.getItem("ProductList"))
    productlist.splice(index, 1, productType)


    localStorage.setItem("ProductList", JSON.stringify(productlist))
  }
  getProductInfoIndex(id) {
    var productlist = [];
    if (localStorage.getItem("ProductList")) {
      productlist = JSON.parse(localStorage.getItem("ProductList"));
      return productlist.findIndex(item => {
        return (item["productTypeId"] === id)
      })
    }
  }

}
