import { Injectable } from '@angular/core';
import {Http, HttpModule} from '@angular/http'
import {Observable} from 'rxjs/'
import{Item} from 'app/items/item'

@Injectable()
export class ItemsService {
  
  hasil : string[];
  
  constructor(private _http:Http) {

   }

   getItems(){
    /* 
    return this._http.get('http://localhost:3000/items').subscribe(data=>{
       this.hasil = data['data'];
     });
     */

     return this._http.get('http://localhost:3000/items')
     .map(res => res.json());

//     return this.hasil;
   }

   saveItems(items){
    return this._http.post('http://localhost:3000/items', items)
    .map(res => res.json());

   }


}
