import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {ItemsService} from 'app/services/items.service';
import {ItemsComponent} from 'app/items/items.component';
import {Item} from 'app/items/item';


@Component({
  selector: 'at-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
  providers: [ItemsComponent]
})
export class ItemDetailComponent implements OnInit {
  
//Items : Item[];
  projectForm: FormGroup;
  itemForm: FormGroup;
  
  constructor(private _fb:FormBuilder, private _itemService: ItemsService, private _itemlist: ItemsComponent) { }

  ngOnInit() {
    /*
    console.log("ada di dalam detail");
    this._itemService.getItems().subscribe(res=>{
      this.Items = res.data;
      console.log(this.Items);      
    });
    */
    /*
    this.projectForm = this._fb.group({
      projectId: ['', [Validators.required, Validators.minLength(5)]],
      description: ['My cool project', [Validators.required, Validators.maxLength(140)]],
      startDate: [new Date(), Validators.required],
      projectType: ['B'],
      selectedDevs: [[]],
      rating: [3]
    })
    */

    this.itemForm = this._fb.group({
      itemName: '',
      itemNomor:'',
      itemKode:''
    });
  
  }

  hasFormErrors() {
    //return !this.projectForm.valid;
  }

  onSubmit() {
    //this._itemlist.saveItem(this.itemForm.value);
    console.log(this._itemlist.items);
    
    this._itemService.saveItems(this.itemForm.value).subscribe(data=>{
      console.log(data);
      var baru = {
        tmb_id: '',
        tmb_kode: data.itemKode,
        tmb_nama: data.itemNama,
        tmb_nomor:data.itemNomor
      }

      
    })
  
    alert(JSON.stringify(this.itemForm.value));
    


  }
}
