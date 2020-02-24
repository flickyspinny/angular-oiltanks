import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';



@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  title = 'SmartNow - Keeping You Warm | How to Contact Us';
  schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "url": "https://smartnowuk.com",
  "name": "SmartNow Ltd",
  "areaServed": {
    "@type": "Country",
    "name": "United Kingdom"},
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "0330 001 0212",
    "contactType": "Customer service"},
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Buntingford, United Kingdom",
    "postalCode": "SG9 9AZ",
    "streetAddress": "Park Farm Industrial Estate"},
  "email": "mailto:sales@smartnowuk.com"
  };  

  constructor(
    private meta: Meta,
    private titleService: Title){};




ngOnInit() {
      this.titleService.setTitle(this.title);
    }

}