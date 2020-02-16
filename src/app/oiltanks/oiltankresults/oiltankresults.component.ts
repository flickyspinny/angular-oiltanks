import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { tanks } from '../../../tanks';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import  {PageEvent } from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { Title, Meta } from '@angular/platform-browser';
import { Cloudinary  } from '@cloudinary/angular-5.x';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';




//import TankService
import { TankService } from '../../services/tank.service';



@Component({
  selector: 'app-oiltankresults',
  templateUrl: './oiltankresults.component.html',
  styleUrls: ['./oiltankresults.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class OiltankresultsComponent  implements OnInit  {

title = "The UK's #1 Independent Supplier of Bunded Heating Oil Tanks | 24/48 hour delivery available | SmartNow";

  filter = { name: true, 
             volume1to1000: true,
             volume1000to1500: true,
             volume1500to2000: true,
             volume2000to2500: true,
             volume2500orMore: true,
             shapeLowProfile: false,
             shapeSlimline: false,
             price: true, 
             currentTank: true, 
             oldTank: false,
             lengthMax: 250,
             widthMax: 200,
             heightMax: 200,
             internalShapeCuboid: true,
             internalShapeHorC: true,
             internalShapeVertC: true,
             materialSteel: true,
             materialPlastic: true,
             brandDeso: true,
             brandHarlequin: true,
             brandTitan: true,
             brandCarbery: true,       
             brandDiamond: true,          
            };

  Product = tanks; 
  imagePath;

  Brands = [
      {name: 'Deso', filterName: 'brandDeso'},
      {name: 'Harlequin', filterName: 'brandHarlequin'},
      {name: 'Titan', filterName: 'brandTitan'},
      {name: 'Carbery', filterName: 'brandCarbery'},
      {name: 'Diamond', filterName: 'brandDiamond'},
  ];

  columnsToDisplay = ['image', 'name', 'price'];

  displayedColumns: string[] = ['image', 'name', 'price'];

  constructor(
    private meta: Meta,
    private titleService: Title,
    private cloudinary: Cloudinary,
    public breakpointObserver: BreakpointObserver){};

  public ngOnInit() {
    this.filterChange();
    this.columnsToDisplay;
    this.titleService.setTitle(this.title);
    this.meta.updateTag(
        {name: 'description', content: "FREE 48 hour delivery on your new bunded heating oil tank from SmartNow, the largest independent retailer of oil tanks in the UK.  Every tank available in the UK listed and compared"});
this.meta.updateTag(
        {name: 'keywords', content: 'free delivery, Domestic Heating Oil Tank, bunded tank, slimline tank, oil tanks, diesel tanks, kerosene tanks, deso tanks, harlequin tanks, titan tanks, carbery tanks, diamond tanks, envirostore tanks' });
  }

  filteredProducts = this.Product;

 filterChange() {
    this.filteredProducts = this.Product.filter(x => 
       (((x.old === true && this.filter.oldTank) ||
       (x.old === false && this.filter.currentTank))
       &&
       (( x.physicalprops.volume <= 1050 && this.filter.volume1to1000)
       || ( x.physicalprops.volume >= 950 && x.physicalprops.volume <=1555 && this.filter.volume1000to1500)
       || ( x.physicalprops.volume >= 1450 && x.physicalprops.volume <=2050 && this.filter.volume1500to2000)
       || ( x.physicalprops.volume >= 1950 && x.physicalprops.volume <=2550 && this.filter.volume2000to2500)
       || ( x.physicalprops.volume >= 2450 && this.filter.volume2500orMore)))
       &&
       ((x.physicalprops.shapeType === 'low profile' && this.filter.shapeLowProfile) ||
       (this.filter.shapeLowProfile==false))
       &&
       ((x.physicalprops.shapeType === 'slimline' && this.filter.shapeSlimline) ||
       (this.filter.shapeSlimline==false))
       &&
       (x.physicalprops.length <=  this.filter.lengthMax) 
       &&
       (x.physicalprops.width <=  this.filter.widthMax) 
       &&
       (x.physicalprops.height <=  this.filter.heightMax)
       &&
       ((x.physicalprops.internalShape === 'cuboid' && this.filter.internalShapeCuboid) ||
       (x.physicalprops.internalShape === 'horizontal cylinder' && this.filter.internalShapeHorC) ||
       (x.physicalprops.internalShape === 'vertical cylinder' && this.filter.internalShapeVertC)) 
       &&
       ((x.physicalprops.material === 'plastic' && this.filter.materialPlastic) ||
       (x.physicalprops.material === 'steel' && this.filter.materialSteel)) 
       &&
       ((x.brand === 'Deso' && this.filter.brandDeso) ||
       (x.brand === 'Harlequin' && this.filter.brandHarlequin) ||
       (x.brand === 'Titan' && this.filter.brandTitan) ||
       (x.brand === 'Carbery' && this.filter.brandCarbery) ||
       (x.brand === 'Diamond' && this.filter.brandDiamond))
    );

 }; 

}