import { Component, OnInit } from '@angular/core';
import {ItemsService} from 'app/services/items.service';
import {Item} from 'app/items/item';

@Component({
  selector: 'at-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  providers: [Item]
  
})
export class ItemsComponent implements OnInit {
  items : Item[];
  constructor(private _itemService: ItemsService, private _dataItem : Item) {
    
   }

  ngOnInit() {

    this._itemService.getItems().subscribe(result=>{
      this.items = result.data;
      console.log(result)
    })
    

//    this.getDataList(); 
/*
    this._itemService.getItems().subscribe(
      items => this.items = items.data
    );
*/

    
    
  }





  getDataList(){
    console.log("getdatalist dipanggil"); 
    return this._itemService.getItems().subscribe(result=>{  
      this.items = result.data;
    });
    
  }


  saveItem(data){
   let __item = this.items;
    alert("save item ada di parent");
    
    
//    let baru = {data:{}, phone:{}, name:{}, address:{}}

  
//    let baru = {_tmb_id:'456',_tmb_kode:'123',_tmb_nama:'coba'};
    //let baru = new Item;
    this._dataItem.tmb_kode = data.itemKode;
    this._dataItem.tmb_nama  = data.itemNama;
    this._dataItem.tmb_nomor = data.itemNomor;
  //  baru._tmb_id = data.  

//    this.items.push(item);
    var baru = {
      tmb_id: '',
      tmb_kode: data.itemKode,
      tmb_nama: data.itemNama,
      tmb_nomor:data.itemNomor
    }
    
    var hasil = this._itemService.saveItems(baru);
    hasil.subscribe(x=>{
      __item.push(baru);      
    })
    
    console.log(this.items);
    
    
  }

  

  onRowSelect(rowInfo) {
    //console.log(JSON.stringify(rowInfo.data)); // or this.selectedRow
  }

  onEditComplete(editInfo) {
    let fieldChanged = editInfo.column.field;
    let newRowValues = editInfo.data;
    alert(`You edited ${fieldChanged} to ${newRowValues[fieldChanged]}`);
  }


}
