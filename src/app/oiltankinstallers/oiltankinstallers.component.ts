import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, RouterModule, Router} from '@angular/router';
import { locations } from '../../locations';
import {MatButtonModule} from '@angular/material/button';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';



@Component({
  selector: 'app-oiltankinstallers',
  templateUrl: './oiltankinstallers.component.html',
  styleUrls: ['./oiltankinstallers.component.css']
})
export class OiltankinstallersComponent implements OnInit {
  title;
  content;
  sub;
  urlTownParameter;
  urlCountyParameter;
  location = locations;
  countyData;
  countyDataArray;
  townDataArray;
  townData;
  townName;
  schema;
  areaType;
  areaName;


  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  //Subscribe to route paramters
    this.sub = this.route.params.subscribe(params => {
      this.urlTownParameter = params['townSlug'];
      this.urlCountyParameter = params['countySlug'];    
    });
    // Execute if a County Parameter is passed in from Route params

    if (this.urlCountyParameter != null) {
        this.countyData =  locations.find(x => x.countySlug === this.urlCountyParameter);
        console.log("county Name", this.countyData.countyName);
        console.log("Towns", this.countyData.towns);
    };

    // Execute if a Town is passed in from Route Params
    if (this.urlTownParameter != null) {  
      this.townName = ((this.countyData.towns).find(
         town => town.townSlug.toUpperCase() == this.urlTownParameter.toUpperCase()).townName
      );
      this.title = 'Oil Tank Installation in ' + this.townName + ', ' + this.countyData.countyName + ' from £399 with SmartNow';
      this.content = 'Get three FREE quotes instantly for your oil tank installation in ' + this.townName + ' with SmartNow.  Tank installs from just £399!';
      this.areaType = 'City';
      this.areaName = this.townName.townName;

    }
    // Execute if a Town is NOT passed in from Route Params
    else {
      // Execute if a County is passed in from Route Params
      if (this.urlCountyParameter != null) {
      this.title = 'Oil Tank Installation in ' + this.countyData.countyName + ' from £399 with SmartNow';
      this.content = 'Get three FREE quotes instantly for your oil tank installation in ' + this.countyData.countyName + ' with SmartNow.  Tank installs from just £399!';
      this.areaType = 'County';
      this.areaName = this.countyData.countyName;
      } 
      // Execute if a County is NOT passed in from Route Params
      else {
        this.title = 'Get 3 Free Oil Tank Install Quotes Online From Your Best Local Installers | SmartNow ';
        this.content = 'Get three FREE quotes instantly for your oil tank installation or replacement with SmartNow!';
        this.areaType = 'Country';
        this.areaName = 'United Kingdom';
      }

    };

    //Set SEO Title
    this.titleService.setTitle(this.title);
    //Set SEO Description
    this.metaTagService.updateTag(
      { name: 'description', content: this.content });

    this.schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Oil Tank Installation",
      "description": "Oil Tank Installation and Replacement in " + this.areaName,
      "areaServed": {
        "@type": this.areaType,
        "name": this.areaName    
      },
      "Provider": {
        "@type": "Organization",
        "name": "SmartNow Ltd"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": 4.9,
        "reviewCount": 16
      }
    };  




  }

}