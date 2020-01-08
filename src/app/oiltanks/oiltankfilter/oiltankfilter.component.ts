import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-oiltankfilter',
  templateUrl: './oiltankfilter.component.html',
  styleUrls: ['./oiltankfilter.component.css']
})
export class OiltankfilterComponent implements OnInit{

//New output event emitter called "filter".  This is used in oiltanks.component.html when app-oiltankfilter is called.
  @Output() filter = new EventEmitter();

  private options = [
    {name:2500, type: 'Volume', checked:true},
    {name:true, type: 'Current', checked:false},
    {name:799, type:'Price', checked:true},
    {name:1800, type: 'Length', checked:true}
  ]

//Initiates an instance of onFilter when page is loaded
  public ngOnInit() {
    this.onFilter();
  }

// 
  private onFilter() {
    this.filter.emit(
      this.options
        .filter(jeff => jeff.checked)
        .map(opt => opt.name)
    );





//Form inputs and default values
/*  tankForm = new FormGroup({
    ColdTanks: new FormControl(false) ,
    volume0to1000: new FormControl(true),
    volume1001to1750: new FormControl(true),
    volume1751to2500: new FormControl(true),  
    volumeOver2501: new FormControl(true),
    shapeTallThin: new FormControl(true),
    shapeLowProfile: new FormControl(true),
    shapeSlimline: new FormControl(true),
    shapeCuboid: new FormControl(true),
    shapeVCyl: new FormControl(true),
    shapeHCyl: new FormControl(true),
    minHeight: new FormControl(true),
    maxHeight: new FormControl(true),
    minLength: new FormControl(true),
    maxLength: new FormControl(true),
    minWidth: new FormControl(true),
    maxWidth: new FormControl(true),
    materialPlastic: new FormControl(true),
    materialSteel: new FormControl(true)
  });
  */

//new private array
//  private filterOptions = [
//    {name:'oldTank', value:'oldTank', checked:true}
//  ]



  }
};