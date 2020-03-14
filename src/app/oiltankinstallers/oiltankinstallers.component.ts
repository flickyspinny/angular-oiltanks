import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, RouterModule, Router} from '@angular/router';
import { locations } from '../../locations';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-oiltankinstallers',
  templateUrl: './oiltankinstallers.component.html',
  styleUrls: ['./oiltankinstallers.component.css']
})
export class OiltankinstallersComponent implements OnInit {
  title = 'Get 3 Free Oil Tank Install Quotes Online From Your Best Local Installers | SmartNow ';
  sub;
  urlTownParameter;
  urlCountyParameter;
  location = locations;
  countyData;
  countyDataArray;
  townDataArray;
  townDataArray1;
  townData;
  townName;


  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);

    this.metaTagService.updateTag(
      { name: 'description', content: 'Get three FREE quotes instantly online from the best local tank installers.' });
    
    this.sub = this.route.params.subscribe(params => {
      this.urlTownParameter = params['townSlug'];
      this.urlCountyParameter = params['countySlug'];    
    });
    console.log('urlTownParameter', this.urlTownParameter);

    this.countyData =  locations.find(x => x.countySlug === this.urlCountyParameter);
    console.log("county Name", this.countyData.countyName);

    this.countyDataArray =  this.location.find(x => x.countySlug === this.urlCountyParameter);
    console.log("County Array", this.countyDataArray);

    this.townDataArray = this.location.find(county => 
      county.towns.find(town => town.townSlug == this.urlTownParameter));
        console.log("Town Array", this.townDataArray);


            console.log("Town Array1", this.townDataArray.towns.find(x => x.townSlug === this.urlTownParameter));
//    products.find(product => product.items.some(item => item.name === 'milk'));






  }

}