import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterModule, Router} from '@angular/router';
import { tanks } from '../../../tanks';
import { SelectedtankPipe } from '../../pipes/selectedtank.pipe';
import {MatButtonModule} from '@angular/material/button';
import { showBuyButton } from '../../assets/buybutton.ts';
import { LocationStrategy } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import { Cloudinary  } from '@cloudinary/angular-5.x';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';



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
  }
  
  ngAfterViewInit() {
    showBuyButton(this.products[this._tankId-1].shopify_id);
  }


}