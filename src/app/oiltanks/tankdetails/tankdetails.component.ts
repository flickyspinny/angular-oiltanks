import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterModule, Router} from '@angular/router';
import { tanks } from '../../../tanks';
import { SelectedtankPipe } from '../../pipes/selectedtank.pipe';
import {MatButtonModule} from '@angular/material/button';
import { showBuyButton } from '../../assets/buybutton.js';
import { LocationStrategy } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';



@Component({
  selector: 'app-tankdetails',
  templateUrl: './tankdetails.component.html',
  styleUrls: ['./tankdetails.component.css'],
})


export class TankdetailsComponent implements  OnInit, AfterViewInit {
  _tankId: number;
  products=tanks;
  private sub: any;
  hello1: any;
  booleanOldTank;
  title;


  constructor(
    private route: ActivatedRoute,
    private location: LocationStrategy,
    private router: Router,
    private meta: Meta,
    private titleService: Title
    ) 
    { 
      this.location.onPopState(() => {
        this.router.navigate(['/domestic_heating_oil_tanks']);
      });
    }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this._tankId = +params['tankId'];
      });
//Set the instance of the title variable (this.title) to the value in seo.title in tanks.ts
    this.title = this.products[this._tankId-1].seo.title;
//Use the titleService to set the Page Title
    this.titleService.setTitle(this.title);
    this.meta.addTags([
        { name: 'description', content: this.products[this._tankId-1].seo.description},
        { name: 'keywords', content: this.products[this._tankId-1].seo.keywords },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'SmartNow Ltd' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'date', content: '2020-01-22', scheme: 'YYYY-MM-DD' },
        { charset: 'UTF-8' }
      ]);

//     console.log("this _tankId", this._tankId);
//     console.log("SEO Title", this.products[this._tankId-1].seo.title);
    

  }
  
  ngAfterViewInit() {
    showBuyButton(this.products[this._tankId-1].shopify_id);
  }


}