import { Injectable ,EventEmitter} from '@angular/core';
import { IProductType } from '../model/IProductType';


@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
GetUpdateList=new EventEmitter<Array<IProductType>>();
GetTypeInfo=new EventEmitter<IProductType>();
GetCartCount=new EventEmitter<number>();
constructor() { }
GetUpdateProductTypeList(){
  this.GetUpdateList.emit(JSON.parse(localStorage.getItem("ProductTypeList")));
}
GetProductTypeInfo(id:number){
  var list=[];
  list=JSON.parse(localStorage.getItem("ProductTypeList"));
  var type=list.find(item => {
    return (item["productTypeId"] === id)
 })
  this.GetTypeInfo.emit(type);
}
GetCartUpdatedCount(){
  this.GetCartCount.emit((JSON.parse(localStorage.getItem("CartList"))).length);
}

}
