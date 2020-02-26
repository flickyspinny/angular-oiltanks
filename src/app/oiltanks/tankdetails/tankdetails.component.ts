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
  tank;
  urlParameter;
  tankData;


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
//Get the :id passed in on the URL.  This identifies which tank we're talking about
    this.sub = this.route.params.subscribe(params => {
      this.urlParameter = +params['tankId'];
//Select (into the variable tankData) all the data from the array "tanks" using the urlParameter
      this.tankData =  tanks.find(x => x.tankId == this.urlParameter);
//Select (into the variable _tankId) the tankId of the tank identified in tankData
      this._tankId = this.tankData.tankId
      });

//Set the instance of the title variable (this.title) to the value in seo.title in tanks.ts
    this.title = this.tankData.seo.title;
//Use the titleService to set the Page Title
    this.titleService.setTitle(this.title);
    this.meta.updateTag ({ name: 'description', content: this.tankData.seo.description});
    this.meta.updateTag ({ name: 'keywords', content: this.tankData.seo.keywords });
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
      "description": this.tankData.seo.description,
      "name": this.tankData.name,
      "sku": this.tankData.strucdata.sku,
      "image": [
        this.tankData.strucdata.image1,
        this.tankData.strucdata.image2,
        this.tankData.strucdata.image3
       ],
      "brand": {
        "@type": "Thing",
        "name": this.tankData.brand
      },
      "offers": {
        "@type": "Offer",
        "url": this.tankData.strucdata.url,
        "availability": "http://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition",
        "price": this.tankData.price,
        "priceCurrency": "GBP",
        "priceValidUntil": "2030-11-05",
        "seller": {
          "@type": "Organization",
          "name": "SmartNow Ltd"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": this.tankData.strucdata.ratingvalue,
        "reviewCount": this.tankData.strucdata.reviewcount
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
          "value": this.tankData.guarantee + " Years"
        },
        {
        "@type": "PropertyValue",
          "name": "Delivery",
          "value": "FREE - " + this.tankData.delivery.standardtime
        },
        {
          "@type": "PropertyValue",
          "name": "Volume",
          "value": this.tankData.physicalprops.volume + " Litres"
        },
        {
          "@type": "PropertyValue",
          "name": "Includes",
          "value": this.tankData.promo.header
        },
        {
          "@type": "PropertyValue",
          "name": "Fuel Type",
          "value": this.tankData.physicalprops.fuelType
        },
        {
          "@type": "PropertyValue",
          "name": "Tank Type",
          "value": this.tankData.physicalprops.bunded
        },
        {
          "@type": "PropertyValue",
          "name": "Shape Type",
          "value": this.tankData.physicalprops.shapeType
        },
        {
          "@type": "PropertyValue",
          "name": "Material",
          "value": this.tankData.physicalprops.material
        }
      ]
    };  
  }

  
  
  ngAfterViewInit() {
    showBuyButton(this.tankData.shopify_id);
  }


}