import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterModule, Router} from '@angular/router';
import { tanks } from '../../../tanks';
import { SelectedtankPipe } from '../../pipes/selectedtank.pipe';
import { MatButtonModule } from '@angular/material/button';
import { LocationStrategy } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { showBuyButton } from './../../assets/buybutton.js';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import { Cloudinary  } from '@cloudinary/angular-5.x';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';

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
  variablemainwidth;
  variablepromowidth;
  breakpoint;
  cloudinaryOptions;
  schema;


  constructor(
    private route: ActivatedRoute,
    private location: LocationStrategy,
    private router: Router,
    private meta: Meta,
    private titleService: Title,
    private cloudinary: Cloudinary,
    public breakpointObserver: BreakpointObserver
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
    this.title = this.products[this._tankId-2].seo.title;
//Use the titleService to set the Page Title
    this.titleService.setTitle(this.title);
    this.meta.updateTag ({ name: 'description', content: this.products[this._tankId-2].seo.description});
    this.meta.updateTag ({ name: 'keywords', content: this.products[this._tankId-2].seo.keywords });
// Breakpoint Observer for Cloudinary images
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe(result => {
      if (result.breakpoints[Breakpoints.XSmall]) {
        this.variablemainwidth = "290"; 
        this.variablepromowidth = "290"; 
        console.log(this.variablemainwidth);
      }
      if (result.breakpoints[Breakpoints.Small]) {
        this.variablemainwidth = "450"; 
        this.variablepromowidth = "120"; 
        console.log(this.variablemainwidth);        
      }
      if (result.breakpoints[Breakpoints.Medium]) {
        this.variablemainwidth = "450"; 
        this.variablepromowidth = "120"; 
        console.log(this.variablemainwidth);
      }
      if (result.breakpoints[Breakpoints.Large]) {
        this.variablemainwidth = "600"; 
        this.variablepromowidth = "150"; 
        console.log(this.variablemainwidth);
      }
      if (result.breakpoints[Breakpoints.XLarge]) {
       this.variablemainwidth = "600"; 
        this.variablepromowidth = "150"; 
        console.log(this.variablemainwidth);
      }
    });  
    this.schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "description": this.products[this._tankId-2].seo.description,
      "name": this.products[this._tankId-2].name,
      "sku": this.products[this._tankId-2].strucdata.sku,
      "image": [
        this.products[this._tankId-2].strucdata.image1,
        this.products[this._tankId-2].strucdata.image2,
        this.products[this._tankId-2].strucdata.image3
       ],
      "brand": {
        "@type": "Thing",
        "name": this.products[this._tankId-2].brand
      },
      "offers": {
        "@type": "Offer",
        "url": this.products[this._tankId-2].strucdata.url,
        "availability": "http://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition",
        "price": this.products[this._tankId-2].price,
        "priceCurrency": "GBP",
        "priceValidUntil": "2030-11-05",
        "seller": {
          "@type": "Organization",
          "name": "SmartNow Ltd"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": this.products[this._tankId-2].strucdata.ratingvalue,
        "reviewCount": this.products[this._tankId-2].strucdata.reviewcount
      },
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "David Pearce"
        }
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Guarantee",
          "value": this.products[this._tankId-2].guarantee + " Years"
        },
        {
        "@type": "PropertyValue",
          "name": "Delivery",
          "value": "FREE - " + this.products[this._tankId-2].delivery.standardtime
        },
        {
          "@type": "PropertyValue",
          "name": "Volume",
          "value": this.products[this._tankId-2].physicalprops.volume + " Litres"
        },
        {
          "@type": "PropertyValue",
          "name": "Includes",
          "value": this.products[this._tankId-2].promo.header
        },
        {
          "@type": "PropertyValue",
          "name": "Fuel Type",
          "value": this.products[this._tankId-2].physicalprops.fuelType
        },
        {
          "@type": "PropertyValue",
          "name": "Tank Type",
          "value": this.products[this._tankId-2].physicalprops.bunded
        },
        {
          "@type": "PropertyValue",
          "name": "Shape Type",
          "value": this.products[this._tankId-2].physicalprops.shapeType
        },
        {
          "@type": "PropertyValue",
          "name": "Material",
          "value": this.products[this._tankId-2].physicalprops.material
        }
      ]
    };  
  }

  
  
  ngAfterViewInit() {
    showBuyButton(this.products[this._tankId-2].shopify_id);
  }


}