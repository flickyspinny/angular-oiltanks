import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterModule, Router} from '@angular/router';
import { tanks } from '../../../tanks';
import { SelectedtankPipe } from '../../pipes/selectedtank.pipe';
// import  Buybutton from '../../assets/buybutton.js';
import {MatButtonModule} from '@angular/material/button';
//import { TankService } from '../../../services/tank.service';
import { showBuyButton } from '../../assets/buybutton.js';
import { LocationStrategy } from '@angular/common';
import {Router} from "@angular/router"

// declare const showBuyButton: any;


@Component({
  selector: 'app-tankdetails',
  templateUrl: './tankdetails.component.html',
  styleUrls: ['./tankdetails.component.css'],
  
//  providers: [TankService]
})


export class TankdetailsComponent implements  OnInit, AfterViewInit {
  private _tankId: number;
  products=tanks;
  private sub: any;
  hello1: any;
  booleanOldTank;



  constructor(
    private route: ActivatedRoute,
    private location: LocationStrategy,
    private router: Router
    ) 
    { 
      this.location.onPopState(() => {
        // history.pushState(null, null, window.location.href);
        // window.location.href = '/domestic_heating_oil_tanks';
        this.router.navigate(['/domestic_heating_oil_tanks']);
      });
    }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this._tankId = +params['tankId'];
          console.log(params);  
    });
//    this.products.tankId = this.route.snapshot.paramMap.get('tankId');  
    // console.log(this.products);  
    // console.log("this _tankId", this._tankId);
    
  }
  
  ngAfterViewInit() {
    showBuyButton(this.products[this._tankId-1].shopify_id);
  }


}